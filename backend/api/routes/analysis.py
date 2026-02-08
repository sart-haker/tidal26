import io
import math
from datetime import datetime, timezone

import pandas as pd
from bson import ObjectId
from fastapi import APIRouter, File, Form, HTTPException, UploadFile

from api.database import get_db
from src.loaders.csv_loader import normalize_uploaded_dataframe
from src.main import run_pipeline_from_dataframes

router = APIRouter()

REQUIRED_COLUMNS = {
    "distance_ft", "feature_type", "clock_position",
    "joint_number", "wall_thickness_in",
}


def sanitize_for_mongo(records: list[dict]) -> list[dict]:
    """Replace NaN/Infinity with None for MongoDB storage."""
    for record in records:
        for key, val in list(record.items()):
            if isinstance(val, float) and (math.isnan(val) or math.isinf(val)):
                record[key] = None
    return records


def doc_to_summary(doc: dict) -> dict:
    doc["id"] = str(doc.pop("_id"))
    summary = doc.get("summary", {})
    return {
        "id": doc["id"],
        "name": doc["name"],
        "run1_year": doc["run1_year"],
        "run2_year": doc["run2_year"],
        "created_at": doc["created_at"],
        "status": doc["status"],
        "matched_count": summary.get("matched_count"),
        "new_count": summary.get("new_count"),
        "missing_count": summary.get("missing_count"),
        "uncertain_count": summary.get("uncertain_count"),
        "critical_count": summary.get("critical_count"),
        "weld_count": summary.get("weld_count"),
    }


@router.post("/analyze")
async def analyze(
    run1_file: UploadFile = File(...),
    run2_file: UploadFile = File(...),
    name: str = Form(...),
    run1_year: int = Form(...),
    run2_year: int = Form(...),
    distance_tolerance: float = Form(10.0),
    clock_tolerance: float = Form(2.0),
    weld_tolerance: float = Form(50.0),
):
    if run1_year >= run2_year:
        raise HTTPException(422, detail="Run 1 year must be earlier than Run 2 year")

    # Read files into DataFrames (CSV or Excel)
    try:
        run1_bytes = await run1_file.read()
        ext1 = (run1_file.filename or "").rsplit(".", 1)[-1].lower()
        if ext1 in ("xlsx", "xls"):
            df_run1 = pd.read_excel(io.BytesIO(run1_bytes))
        else:
            try:
                df_run1 = pd.read_csv(io.BytesIO(run1_bytes), encoding="utf-8")
            except UnicodeDecodeError:
                df_run1 = pd.read_csv(io.BytesIO(run1_bytes), encoding="latin-1")
    except Exception as e:
        raise HTTPException(422, detail=f"Failed to parse Run 1 file: {str(e)}")

    try:
        run2_bytes = await run2_file.read()
        ext2 = (run2_file.filename or "").rsplit(".", 1)[-1].lower()
        if ext2 in ("xlsx", "xls"):
            df_run2 = pd.read_excel(io.BytesIO(run2_bytes))
        else:
            try:
                df_run2 = pd.read_csv(io.BytesIO(run2_bytes), encoding="utf-8")
            except UnicodeDecodeError:
                df_run2 = pd.read_csv(io.BytesIO(run2_bytes), encoding="latin-1")
    except Exception as e:
        raise HTTPException(422, detail=f"Failed to parse Run 2 file: {str(e)}")

    # Validate required columns
    for label, df in [("Run 1", df_run1), ("Run 2", df_run2)]:
        missing = REQUIRED_COLUMNS - set(df.columns)
        if missing:
            raise HTTPException(
                422,
                detail=f"{label} CSV missing required columns: {sorted(missing)}",
            )

    # Normalize
    df_run1 = normalize_uploaded_dataframe(df_run1)
    df_run2 = normalize_uploaded_dataframe(df_run2)

    # Run pipeline
    try:
        result = run_pipeline_from_dataframes(
            df_run1, df_run2, run1_year, run2_year,
            distance_tolerance, clock_tolerance, weld_tolerance,
        )
    except Exception as e:
        raise HTTPException(500, detail=f"Pipeline error: {str(e)}")

    growth_df = result["growth"]
    weld_offsets = result["weld_offsets"]
    results = result["results"]

    # Serialize DataFrames
    matched_anomalies = sanitize_for_mongo(growth_df.to_dict("records")) if len(growth_df) > 0 else []

    # Extract new/missing anomaly details from the normalized DataFrames
    new_df = result["df_run2"][result["df_run2"]["original_index"].isin(results["new"])]
    new_cols = ["original_index", "log_distance", "event_type_normalized", "clock_decimal",
                "depth_percent", "length", "width", "joint_number"]
    new_available = [c for c in new_cols if c in new_df.columns]
    new_anomalies = sanitize_for_mongo(new_df[new_available].to_dict("records"))

    missing_df = result["df_run1"][result["df_run1"]["original_index"].isin(results["missing"])]
    missing_available = [c for c in new_cols if c in missing_df.columns]
    missing_anomalies = sanitize_for_mongo(missing_df[missing_available].to_dict("records"))

    weld_alignments = sanitize_for_mongo(weld_offsets.to_dict("records")) if len(weld_offsets) > 0 else []

    uncertain_matches = results.get("uncertain", [])

    critical_count = int(growth_df["is_critical"].sum()) if len(growth_df) > 0 and "is_critical" in growth_df.columns else 0

    # Build document
    doc = {
        "name": name,
        "run1_year": run1_year,
        "run2_year": run2_year,
        "created_at": datetime.now(timezone.utc),
        "status": "completed",
        "distance_tolerance": distance_tolerance,
        "clock_tolerance": clock_tolerance,
        "weld_tolerance": weld_tolerance,
        "summary": {
            "matched_count": len(matched_anomalies),
            "new_count": len(new_anomalies),
            "missing_count": len(missing_anomalies),
            "uncertain_count": len(uncertain_matches),
            "critical_count": critical_count,
            "weld_count": len(weld_alignments),
            "run1_total_rows": len(df_run1),
            "run2_total_rows": len(df_run2),
        },
        "matched_anomalies": matched_anomalies,
        "new_anomalies": new_anomalies,
        "missing_anomalies": missing_anomalies,
        "uncertain_matches": uncertain_matches,
        "weld_alignments": weld_alignments,
    }

    # Store in MongoDB
    db = get_db()
    insert_result = await db.analyses.insert_one(doc)
    doc["_id"] = insert_result.inserted_id

    return doc_to_summary(doc)


@router.get("/analyses")
async def list_analyses():
    db = get_db()
    cursor = db.analyses.find(
        {},
        {"matched_anomalies": 0, "new_anomalies": 0, "missing_anomalies": 0,
         "uncertain_matches": 0, "weld_alignments": 0},
    ).sort("created_at", -1)
    docs = await cursor.to_list(length=100)
    return [doc_to_summary(doc) for doc in docs]


@router.get("/analyses/{analysis_id}")
async def get_analysis(analysis_id: str):
    db = get_db()
    try:
        doc = await db.analyses.find_one({"_id": ObjectId(analysis_id)})
    except Exception:
        raise HTTPException(400, detail="Invalid analysis ID")
    if not doc:
        raise HTTPException(404, detail="Analysis not found")

    doc["id"] = str(doc.pop("_id"))
    return {
        **doc,
    }


@router.delete("/analyses/{analysis_id}", status_code=204)
async def delete_analysis(analysis_id: str):
    db = get_db()
    try:
        result = await db.analyses.delete_one({"_id": ObjectId(analysis_id)})
    except Exception:
        raise HTTPException(400, detail="Invalid analysis ID")
    if result.deleted_count == 0:
        raise HTTPException(404, detail="Analysis not found")


@router.post("/datasets")
async def upload_dataset(
    file: UploadFile = File(...),
    name: str = Form(...),
    year: int = Form(...),
):
    """Upload a CSV or Excel file and store it in MongoDB."""
    try:
        file_bytes = await file.read()
        ext = (file.filename or "").rsplit(".", 1)[-1].lower()
        if ext in ("xlsx", "xls"):
            df = pd.read_excel(io.BytesIO(file_bytes))
        else:
            try:
                df = pd.read_csv(io.BytesIO(file_bytes), encoding="utf-8")
            except UnicodeDecodeError:
                df = pd.read_csv(io.BytesIO(file_bytes), encoding="latin-1")
    except Exception as e:
        raise HTTPException(422, detail=f"Failed to parse file: {str(e)}")

    records = sanitize_for_mongo(df.to_dict("records"))

    doc = {
        "name": name,
        "year": year,
        "filename": file.filename,
        "created_at": datetime.now(timezone.utc),
        "row_count": len(records),
        "columns": list(df.columns),
        "rows": records,
    }

    db = get_db()
    result = await db.datasets.insert_one(doc)

    return {
        "id": str(result.inserted_id),
        "name": name,
        "year": year,
        "filename": file.filename,
        "row_count": len(records),
        "columns": list(df.columns),
    }


@router.get("/datasets")
async def list_datasets():
    db = get_db()
    cursor = db.datasets.find({}, {"rows": 0}).sort("created_at", -1)
    docs = await cursor.to_list(length=100)
    for doc in docs:
        doc["id"] = str(doc.pop("_id"))
    return docs


@router.get("/schema")
async def get_schema():
    return {
        "required_columns": sorted(REQUIRED_COLUMNS),
        "optional_columns": [
            "depth_pct", "anomaly_length_in", "anomaly_width_in",
            "internal_external", "elevation_ft", "depth_in",
            "dist_to_upstream_gw_ft", "dist_to_downstream_gw_ft",
            "joint_length_ft", "mop_psi", "smys_psi", "design_pressure_psi",
        ],
        "description": {
            "distance_ft": "Distance along pipeline in feet",
            "feature_type": "Feature type (e.g. Girth Weld, Metal Loss, Cluster, Dent)",
            "clock_position": "Circumferential position (e.g. 3:00, 6:30)",
            "joint_number": "Pipe joint identifier",
            "wall_thickness_in": "Wall thickness in inches",
            "depth_pct": "Wall thickness loss as percentage",
            "anomaly_length_in": "Anomaly length in inches",
            "anomaly_width_in": "Anomaly width in inches",
        },
    }
