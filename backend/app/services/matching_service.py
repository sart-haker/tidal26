"""Anomaly matching business logic – bridges MongoDB and the existing matcher."""

import math
import pandas as pd
from datetime import datetime, timezone

from app.repositories.anomaly_repository import AnomalyRepository
from app.repositories.inspection_repository import InspectionRepository
from app.repositories.matched_pair_repository import MatchedPairRepository
from app.core.exceptions import NotFoundError, BadRequestError

# --- Use the EXISTING algorithms (not reimplemented) --------------------
from src.matching.anomaly_matcher import extract_anomalies, match_anomalies
from src.analysis.growth_calculator import calculate_all_growth, flag_critical


class MatchingService:
    def __init__(
        self,
        anomaly_repo: AnomalyRepository,
        inspection_repo: InspectionRepository,
        matched_pair_repo: MatchedPairRepository,
    ):
        self.anomaly_repo = anomaly_repo
        self.inspection_repo = inspection_repo
        self.matched_pair_repo = matched_pair_repo

    async def run_matching(
        self,
        pipeline_id: str,
        run1_inspection_id: str,
        run2_inspection_id: str,
        parameters: dict,
    ) -> dict:
        """
        Flow:
        1. Fetch anomalies for both inspections from MongoDB
        2. Convert to DataFrames in the format the existing matcher expects
        3. Run match_anomalies() and calculate_all_growth()
        4. Store matched pairs back to MongoDB
        5. Return summary
        """

        # 1. Fetch inspection metadata
        insp1 = await self.inspection_repo.get_by_id(run1_inspection_id)
        insp2 = await self.inspection_repo.get_by_id(run2_inspection_id)
        if not insp1:
            raise NotFoundError("Inspection", run1_inspection_id)
        if not insp2:
            raise NotFoundError("Inspection", run2_inspection_id)

        # Fetch all rows for each inspection
        raw1 = await self.anomaly_repo.get_by_inspection(run1_inspection_id)
        raw2 = await self.anomaly_repo.get_by_inspection(run2_inspection_id)

        if not raw1 or not raw2:
            raise BadRequestError("Both inspections must have anomaly data")

        # 2. Convert to DataFrames matching the format the existing code expects
        df1 = _mongo_docs_to_matching_df(raw1)
        df2 = _mongo_docs_to_matching_df(raw2)

        anom1 = extract_anomalies(df1)
        anom2 = extract_anomalies(df2)

        # 3. Run existing matching algorithm
        distance_tolerance = parameters.get("distance_tolerance", 10.0)
        clock_tolerance = parameters.get("clock_tolerance", 2.0)

        results = match_anomalies(anom1, anom2, distance_tolerance, clock_tolerance)

        # Calculate growth
        years_between = insp2["year"] - insp1["year"]
        growth_df = calculate_all_growth(results["matched"], df1, df2, years_between)
        growth_df = flag_critical(growth_df)

        # 4. Clear old results and store new matched pairs
        await self.matched_pair_repo.delete_by_inspections(
            run1_inspection_id, run2_inspection_id
        )

        # Build a lookup from original_index to MongoDB id
        id_map1 = {i: raw1[i]["id"] for i in range(len(raw1))}
        id_map2 = {i: raw2[i]["id"] for i in range(len(raw2))}

        pair_docs = []
        for _, grow_row in growth_df.iterrows():
            r1_idx = int(grow_row.get("run1_idx", -1))
            r2_idx = int(grow_row.get("run2_idx", -1))

            doc = {
                "pipeline_id": pipeline_id,
                "run1_inspection_id": run1_inspection_id,
                "run2_inspection_id": run2_inspection_id,
                "run1_anomaly_id": id_map1.get(r1_idx, str(r1_idx)),
                "run2_anomaly_id": id_map2.get(r2_idx, str(r2_idx)),
                "confidence": float(grow_row.get("confidence", 0)),
                "distance_score": float(grow_row.get("distance_score", 0)),
                "clock_score": float(grow_row.get("clock_score", 0)),
                "dimension_score": float(grow_row.get("dimension_score", 0)),
                "depth_growth_pct": _safe(grow_row.get("depth_growth")),
                "depth_growth_rate": _safe(grow_row.get("depth_growth_rate")),
                "length_growth_in": _safe(grow_row.get("length_growth")),
                "width_growth_in": _safe(grow_row.get("width_growth")),
                "years_between": years_between,
                "is_critical_growth": bool(grow_row.get("is_critical", False)),
                "created_at": datetime.now(timezone.utc),
            }
            pair_docs.append(doc)

        if pair_docs:
            await self.matched_pair_repo.create_many(pair_docs)

        # Persist new/missing anomaly IDs for enriched results later
        new_ids = []
        for entry in results["new"]:
            idx = int(entry[0]) if isinstance(entry, (list, tuple)) else int(entry)
            aid = id_map2.get(idx)
            if aid:
                new_ids.append(aid)

        missing_ids = []
        for entry in results["missing"]:
            idx = int(entry[0]) if isinstance(entry, (list, tuple)) else int(entry)
            aid = id_map1.get(idx)
            if aid:
                missing_ids.append(aid)

        # Store matching run summary (upsert)
        summary_filter = {
            "run1_inspection_id": run1_inspection_id,
            "run2_inspection_id": run2_inspection_id,
        }
        await self.matched_pair_repo.collection.database["matching_runs"].delete_many(summary_filter)
        await self.matched_pair_repo.collection.database["matching_runs"].insert_one({
            **summary_filter,
            "pipeline_id": pipeline_id,
            "new_anomaly_ids": new_ids,
            "missing_anomaly_ids": missing_ids,
            "created_at": datetime.now(timezone.utc),
        })

        critical_count = int(growth_df["is_critical"].sum()) if len(growth_df) > 0 else 0

        return {
            "pipeline_id": pipeline_id,
            "run1_inspection_id": run1_inspection_id,
            "run2_inspection_id": run2_inspection_id,
            "status": "completed",
            "total_matched": len(results["matched"]),
            "new_anomalies": len(results["new"]),
            "missing_anomalies": len(results["missing"]),
            "uncertain": len(results["uncertain"]),
            "critical_growth_count": critical_count,
        }

    # -- queries ----------------------------------------------------------

    async def get_results(self, run1_id: str, run2_id: str) -> list[dict]:
        return await self.matched_pair_repo.get_by_inspections(run1_id, run2_id)

    async def get_critical_growth(self, run1_id: str, run2_id: str) -> list[dict]:
        return await self.matched_pair_repo.get_critical_growth(run1_id, run2_id)

    async def get_enriched_results(self, run1_id: str, run2_id: str) -> dict:
        """Return matching results in the enriched format the frontend expects."""
        # Fetch inspection metadata for years
        insp1 = await self.inspection_repo.get_by_id(run1_id)
        insp2 = await self.inspection_repo.get_by_id(run2_id)
        if not insp1 or not insp2:
            raise NotFoundError("Inspection", run1_id if not insp1 else run2_id)

        # Fetch matched pairs
        pairs = await self.matched_pair_repo.get_by_inspections(run1_id, run2_id)

        # Fetch all anomalies for both inspections (indexed by id)
        raw1 = await self.anomaly_repo.get_by_inspection(run1_id)
        raw2 = await self.anomaly_repo.get_by_inspection(run2_id)
        anom1_by_id = {doc["id"]: doc for doc in raw1}
        anom2_by_id = {doc["id"]: doc for doc in raw2}

        # Build enriched matched anomalies
        matched = []
        for pair in pairs:
            a1 = anom1_by_id.get(pair.get("run1_anomaly_id", ""), {})
            a2 = anom2_by_id.get(pair.get("run2_anomaly_id", ""), {})

            depth1 = _safe(a1.get("depth_pct"))
            depth2 = _safe(a2.get("depth_pct"))
            len1 = _safe(a1.get("anomaly_length_in"))
            len2 = _safe(a2.get("anomaly_length_in"))
            wid1 = _safe(a1.get("anomaly_width_in"))
            wid2 = _safe(a2.get("anomaly_width_in"))

            matched.append({
                "run1_idx": int(pair.get("run1_anomaly_id", "0")[-4:], 16) if pair.get("run1_anomaly_id") else 0,
                "run2_idx": int(pair.get("run2_anomaly_id", "0")[-4:], 16) if pair.get("run2_anomaly_id") else 0,
                "confidence": pair.get("confidence", 0),
                "event_type": a1.get("feature_type") or a2.get("feature_type") or "Unknown",
                "run1_distance": a1.get("distance_ft", 0),
                "run2_distance": a2.get("distance_ft", 0),
                "run1_clock": _safe(a1.get("clock_position_decimal")),
                "run2_clock": _safe(a2.get("clock_position_decimal")),
                "depth_run1": depth1,
                "depth_run2": depth2,
                "depth_change": (depth2 - depth1) if depth1 is not None and depth2 is not None else None,
                "depth_growth_rate": pair.get("depth_growth_rate"),
                "length_run1": len1,
                "length_run2": len2,
                "length_change": (len2 - len1) if len1 is not None and len2 is not None else None,
                "length_growth_rate": _safe(pair.get("length_growth_in")),
                "width_run1": wid1,
                "width_run2": wid2,
                "width_change": (wid2 - wid1) if wid1 is not None and wid2 is not None else None,
                "width_growth_rate": _safe(pair.get("width_growth_in")),
                "is_critical": pair.get("is_critical_growth", False),
            })

        # Fetch new/missing anomaly IDs from matching_runs summary
        db = self.matched_pair_repo.collection.database
        run_summary = await db["matching_runs"].find_one({
            "run1_inspection_id": run1_id,
            "run2_inspection_id": run2_id,
        })

        new_anomalies = []
        missing_anomalies = []

        if run_summary:
            for aid in run_summary.get("new_anomaly_ids", []):
                doc = anom2_by_id.get(aid, {})
                if doc:
                    new_anomalies.append(_to_exception(doc))

            for aid in run_summary.get("missing_anomaly_ids", []):
                doc = anom1_by_id.get(aid, {})
                if doc:
                    missing_anomalies.append(_to_exception(doc))

        return {
            "run1_year": insp1.get("year", 0),
            "run2_year": insp2.get("year", 0),
            "matched": matched,
            "newAnomalies": new_anomalies,
            "missing": missing_anomalies,
            "welds": [],
        }


# -- helpers --------------------------------------------------------------

def _mongo_docs_to_matching_df(docs: list[dict]) -> pd.DataFrame:
    """Convert MongoDB anomaly documents into a DataFrame the matcher expects."""
    rows = []
    for i, doc in enumerate(docs):
        rows.append({
            "original_index": i,
            "log_distance": doc.get("distance_ft", 0),
            "clock_decimal": doc.get("clock_position_decimal"),
            "depth_percent": doc.get("depth_pct"),
            "length": doc.get("anomaly_length_in"),
            "width": doc.get("anomaly_width_in"),
            "event_type_normalized": doc.get("feature_type", "Unknown"),
            "is_anomaly": doc.get("is_anomaly", False),
            "is_reference": not doc.get("is_anomaly", False),
            "clock_position": doc.get("clock_position"),
            "joint_number": doc.get("joint_number"),
        })
    return pd.DataFrame(rows)


def _safe(val) -> float | None:
    if val is None:
        return None
    try:
        f = float(val)
        return None if math.isnan(f) else f
    except (ValueError, TypeError):
        return None


def _to_exception(doc: dict) -> dict:
    """Convert a MongoDB anomaly document to the frontend exception shape."""
    return {
        "original_index": 0,
        "log_distance": doc.get("distance_ft", 0),
        "event_type_normalized": doc.get("feature_type", "Unknown"),
        "clock_decimal": _safe(doc.get("clock_position_decimal")),
        "depth_percent": _safe(doc.get("depth_pct")),
        "length": _safe(doc.get("anomaly_length_in")),
        "width": _safe(doc.get("anomaly_width_in")),
        "joint_number": _safe(doc.get("joint_number")),
    }
