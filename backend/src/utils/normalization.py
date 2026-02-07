import re


COLUMN_MAPPINGS = {
    2007: {
        "Joint num": "joint_number",
        "Joint len [ft]": "joint_length",
        "t [in]": "wall_thickness",
        "to u/s w. [ft]": "dist_upstream_weld",
        "log dist. [ft]": "log_distance",
        "Height [ft]": "elevation",
        "event": "event_type",
        "depth [%]": "depth_percent",
        "ID Reduction [%]": "id_reduction",
        "length [in]": "length",
        "width [in]": "width",
        "P2 Burst / MOP": "burst_mop",
        "o'clock": "clock_position",
        "internal": "orientation",
        "comment": "comments",
    },
    2015: {
        "Joint num": "joint_number",
        "Joint len": "joint_length",
        "Wt [in]": "wall_thickness",
        "to u/s w. [ft]": "dist_upstream_weld",
        "to d/s w. [ft]": "dist_downstream_weld",
        "Log Dist. [ft]": "log_distance",
        "Event Description": "event_type",
        "ID/OD": "orientation",
        "Depth [%]": "depth_percent",
        "Depth [in]": "depth_inches",
        "OD Reduction [%]": "od_reduction_pct",
        "OD Reduction [in]": "od_reduction_in",
        "Length [in]": "length",
        "Width [in]": "width",
        "O'clock": "clock_position",
        "Comments": "comments",
        "Anomalies per Joint": "anomalies_per_joint",
        "Tool Velocity [ft/s]": "tool_velocity",
        "Elevation [ft]": "elevation",
        "MOP [PSI]": "mop",
        "SMYS [PSI]": "smys",
        "Seam Type": "seam_type",
        "Pdesign [PSI]": "pdesign",
        "B31G Psafe [PSI]": "b31g_psafe",
        "B31G Pburst [PSI]": "b31g_pburst",
        "Mod B31G Psafe [PSI]": "mod_b31g_psafe",
        "Mod B31G Pburst [PSI]": "mod_b31g_pburst",
        "Effective Area Psafe [PSI]": "eff_area_psafe",
        "Effective Area Pburst [PSI]": "eff_area_pburst",
        "ERF": "erf",
        "RPR": "rpr",
    },
    2022: {
        "Joint num": "joint_number",
        "Joint len": "joint_length",
        "WT [in]": "wall_thickness",
        "Distance to U/S GW [ft]": "dist_upstream_weld",
        "Distance to D/S GW [ft]": "dist_downstream_weld",
        "ILI Wheel Count [ft.]": "log_distance",
        "Event Description": "event_type",
        "ID/OD": "orientation",
        "Metal Loss Depth [%]": "depth_percent",
        "Metal Loss Depth [in]": "depth_inches",
        "Metal Loss Depth + Tolerance[%]": "depth_plus_tolerance",
        "Dimension Classification": "dimension_class",
        "Dent Depth[%]": "dent_depth_pct",
        "Dent Depth[in]": "dent_depth_in",
        "Length [in]": "length",
        "Width [in]": "width",
        "O'clock[hh:mm]": "clock_position",
        "Comments": "comments",
        "Anomalies per Joint": "anomalies_per_joint",
        "Elevation [ft]": "elevation",
        "Seam Position[hh:mm]": "seam_position",
        "Distance To Seam Weld [in]": "dist_to_seam",
        "Tool": "tool",
        "Evaluation Pressure [PSI]": "eval_pressure",
        "SMYS [PSI]": "smys",
        "Pipe Type": "pipe_type",
        "Pipe Diameter (O.D.)[in.]": "pipe_od",
        "Pdesign[PSI]": "pdesign",
        "Mod B31G Psafe [PSI]": "mod_b31g_psafe",
        "Mod B31G Pburst [PSI]": "mod_b31g_pburst",
        "Mod B31G Psafe Pressure with Tolerance[PSI]": "mod_b31g_psafe_tol",
        "Mod B31G Pburst Pressure with Tolerance[PSI]": "mod_b31g_pburst_tol",
        "Effective Area Psafe [PSI]": "eff_area_psafe",
        "Effective Area Pburst [PSI]": "eff_area_pburst",
        "ERF": "erf",
        "RPR": "rpr",
    },
}

EVENT_TYPE_MAP = {
    "girth weld": "GIRTH_WELD",
    "girthweld": "GIRTH_WELD",
    "valve": "VALVE",
    "tee": "TEE",
    "bend": "BEND",
    "field bend": "FIELD_BEND",
    "agm": "AGM",
    "above ground marker": "AGM",
    "metal loss": "METAL_LOSS",
    "cluster": "CLUSTER",
    "dent": "DENT",
    "metal loss-manufacturing anomaly": "METAL_LOSS_MFG",
    "metal loss manufacturing": "METAL_LOSS_MFG",
    "metal loss manufacturing anomaly": "METAL_LOSS_MFG",
    "flange": "FLANGE",
    "tap": "TAP",
    "support": "SUPPORT",
    "magnet": "MAGNET",
    "area start launcher": "AREA_START_LAUNCHER",
    "area end launcher": "AREA_END_LAUNCHER",
    "area end launch trap": "AREA_END_LAUNCHER",
    "area start receiver": "AREA_START_RECEIVER",
    "area end receiver": "AREA_END_RECEIVER",
    "area end receive trap": "AREA_END_RECEIVER",
    "attachment": "ATTACHMENT",
}

REFERENCE_TYPES = {"GIRTH_WELD", "VALVE", "TEE", "BEND", "FIELD_BEND", "AGM", "FLANGE"}

ANOMALY_TYPES = {"METAL_LOSS", "CLUSTER", "DENT", "METAL_LOSS_MFG"}


def get_column_mapping(year: int) -> dict:
    if year not in COLUMN_MAPPINGS:
        raise ValueError(f"No column mapping for year {year}. Available: {list(COLUMN_MAPPINGS.keys())}")
    return COLUMN_MAPPINGS[year]


def normalize_event_type(event: str) -> str:
    if not event or not isinstance(event, str):
        return "UNKNOWN"
    cleaned = event.strip().lower()
    # Remove extra details after a dash for bend descriptions like "BEND-HOT PULLED - 5.5D..."
    if cleaned.startswith("bend"):
        return "BEND"
    # Try direct lookup
    if cleaned in EVENT_TYPE_MAP:
        return EVENT_TYPE_MAP[cleaned]
    # Try matching beginning of string for compound event descriptions
    for key, val in EVENT_TYPE_MAP.items():
        if cleaned.startswith(key):
            return val
    return "UNKNOWN"


def is_reference_point(event_type: str) -> bool:
    return event_type in REFERENCE_TYPES


def is_anomaly(event_type: str) -> bool:
    return event_type in ANOMALY_TYPES
