import re


COLUMN_MAPPINGS = {
    2007: {
        "distance_ft": "log_distance",
        "feature_type": "event_type",
        "depth_pct": "depth_percent",
        "id_reduction_pct": "id_reduction",
        "anomaly_length_in": "length",
        "anomaly_width_in": "width",
        "joint_length_ft": "joint_length",
        "wall_thickness_in": "wall_thickness",
        "dist_to_upstream_gw_ft": "dist_upstream_weld",
        "Height[ft]": "elevation",
        "burst_pressure_psi": "burst_mop",
        "internal_external": "orientation",
    },
    2015: {
        "distance_ft": "log_distance",
        "feature_type": "event_type",
        "depth_pct": "depth_percent",
        "depth_in": "depth_inches",
        "anomaly_length_in": "length",
        "anomaly_width_in": "width",
        "joint_length_ft": "joint_length",
        "wall_thickness_in": "wall_thickness",
        "dist_to_upstream_gw_ft": "dist_upstream_weld",
        "dist_to_downstream_gw_ft": "dist_downstream_weld",
        "internal_external": "orientation",
        "elevation_ft": "elevation",
        "mop_psi": "mop",
        "smys_psi": "smys",
        "design_pressure_psi": "pdesign",
    },
    2022: {
        "distance_ft": "log_distance",
        "feature_type": "event_type",
        "depth_pct": "depth_percent",
        "depth_in": "depth_inches",
        "anomaly_length_in": "length",
        "anomaly_width_in": "width",
        "joint_length_ft": "joint_length",
        "wall_thickness_in": "wall_thickness",
        "dist_to_upstream_gw_ft": "dist_upstream_weld",
        "dist_to_downstream_gw_ft": "dist_downstream_weld",
        "internal_external": "orientation",
        "elevation_ft": "elevation",
        "design_pressure_psi": "pdesign",
        "smys_psi": "smys",
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
    "launcher start": "AREA_START_LAUNCHER",
    "launcher end": "AREA_END_LAUNCHER",
    "area start receiver": "AREA_START_RECEIVER",
    "area end receiver": "AREA_END_RECEIVER",
    "area end receive trap": "AREA_END_RECEIVER",
    "area start installation": "AREA_START_LAUNCHER",
    "area end installation": "AREA_END_LAUNCHER",
    "above ground marker": "AGM",
    "cathodic protection point": "CPP",
    "attachment": "ATTACHMENT",
}

REFERENCE_TYPES = {"GIRTH_WELD", "VALVE", "TEE", "BEND", "FIELD_BEND", "AGM", "FLANGE"}

ANOMALY_TYPES = {"METAL_LOSS", "CLUSTER", "DENT", "METAL_LOSS_MFG"}


COLUMN_MAPPINGS["upload"] = {
    "distance_ft": "log_distance",
    "feature_type": "event_type",
    "depth_pct": "depth_percent",
    "depth_in": "depth_inches",
    "id_reduction_pct": "id_reduction",
    "anomaly_length_in": "length",
    "anomaly_width_in": "width",
    "joint_length_ft": "joint_length",
    "wall_thickness_in": "wall_thickness",
    "dist_to_upstream_gw_ft": "dist_upstream_weld",
    "dist_to_downstream_gw_ft": "dist_downstream_weld",
    "internal_external": "orientation",
    "elevation_ft": "elevation",
    "mop_psi": "mop",
    "smys_psi": "smys",
    "design_pressure_psi": "pdesign",
    "burst_pressure_psi": "burst_mop",
}


def get_column_mapping(year) -> dict:
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
