# Pipeline Anomaly Clustering System - Complete Documentation

## Table of Contents
1. [Overview](#overview)
2. [Interaction Zone Detection - Verification](#interaction-zone-detection)
3. [Data Storage Locations](#data-storage-locations)
4. [Quick Start](#quick-start)
5. [Technical Implementation](#technical-implementation)
6. [Results Summary](#results-summary)
7. [API Reference](#api-reference)
8. [Visualization Guide](#visualization-guide)
9. [Testing](#testing)

---

## Overview

This system identifies **interaction zones** in pipeline In-Line Inspection (ILI) data - areas where multiple nearby anomalies could create combined structural weakness greater than the sum of individual defects.

### Key Concept: Interaction Zones

An **interaction zone** occurs when multiple corrosion defects are close enough to affect each other structurally. This creates:
- **Stress concentration** in a localized area
- **Combined weakening** that exceeds individual assessments
- **Higher failure risk** than isolated anomalies

### Example Interaction Zone (Real Data from 2022)

```
Cluster 31: 10 anomalies within 5.2 feet
Location: 5,379 - 5,384 ft along pipeline
Status: CRITICAL ⚠️

Individual Anomalies:
  Distance    Clock    Depth    Length    Spacing
  5378.7 ft   5:36     24%      1.9 in    -
  5379.3 ft   6:55     19%      2.4 in    0.6 ft apart
  5379.8 ft   7:14     47%      20.2 in   0.5 ft apart
  5380.4 ft   4:25     49%      29.8 in   0.6 ft apart
  ...and 6 more within 3.6 ft

Why This is Dangerous:
• 10 defects within 5.2 feet (average 0.6 ft spacing)
• Two anomalies reach 49% depth (critical wall loss)
• Stress concentration in small area
• Combined effect creates structural weakness
```

---

## Interaction Zone Detection

### Algorithm: DBSCAN Clustering with Cylindrical Geometry

The system uses a custom 3D distance metric that accounts for the cylindrical shape of the pipeline:

```python
# 1. Longitudinal distance (along pipe axis)
long_dist = |distance_ft_1 - distance_ft_2|

# 2. Circumferential distance (around pipe surface)
angle_diff = shortest_arc(clock_1, clock_2)  # Handle wrap-around
circ_dist = pipe_radius × angle_diff_radians

# 3. True 3D distance on cylinder surface
distance_3d = √(long_dist² + circ_dist²)

# 4. DBSCAN clustering
# Group anomalies if:
#   - Within 10 ft longitudinally AND
#   - Within 90° circumferentially AND
#   - At least 2 anomalies form cluster
```

### Critical Interaction Zone Criteria

A cluster is flagged as **CRITICAL** if ALL THREE conditions are met:

```python
is_critical = (
    anomaly_count >= 3     AND    # Multiple defects
    max_depth_pct >= 40    AND    # Deep corrosion
    span_ft <= 20                  # Tightly grouped
)
```

**Rationale:** Tightly clustered deep anomalies create stress concentration that exceeds ASME B31.8 single-defect assessment methods.

---

## Data Storage Locations

### Output Files Structure

```
backend/output/
├── 2007_clustered_anomalies.csv    # Every anomaly with cluster assignment
├── 2007_cluster_stats.csv          # Interaction zone summaries
├── 2007_cluster_map.png            # Visual map of zones
├── 2007_cluster_severity.png       # Severity ranking chart
├── 2015_clustered_anomalies.csv
├── 2015_cluster_stats.csv
├── 2015_cluster_map.png
├── 2015_cluster_severity.png
├── 2022_clustered_anomalies.csv
├── 2022_cluster_stats.csv
├── 2022_cluster_map.png
└── 2022_cluster_severity.png
```

### File Descriptions

#### 1. Clustered Anomalies CSV (`{year}_clustered_anomalies.csv`)

Contains **every anomaly** with its cluster assignment.

**Key Columns:**
- `cluster_id`: Interaction zone ID (-1 = isolated, 0+ = zone number)
- `distance_ft`: Position along pipeline (feet)
- `clock_position`: Position around pipe (time format: "09:00")
- `depth_pct`: Corrosion depth (% of wall thickness)
- `anomaly_length_in`: Defect length (inches)
- `anomaly_width_in`: Defect width (inches)
- `feature_type`: Type (e.g., "Metal Loss")

**Example Data:**
```csv
cluster_id,distance_ft,clock_position,depth_pct,anomaly_length_in,...
31,5378.7,5:36,24,1.9,...
31,5379.3,6:55,19,2.4,...
31,5379.8,7:14,47,20.2,...
-1,6520.3,3:15,12,2.1,...  (isolated anomaly)
```

#### 2. Cluster Statistics CSV (`{year}_cluster_stats.csv`)

Contains **one row per interaction zone** with summary metrics.

**Key Columns:**
- `cluster_id`: Unique zone identifier
- `start_distance_ft`: Beginning of zone (feet)
- `end_distance_ft`: End of zone (feet)
- `span_ft`: Physical extent of zone (feet)
- `anomaly_count`: Number of anomalies in zone
- `max_depth_pct`: Worst corrosion depth (%)
- `avg_depth_pct`: Average depth (%)
- `severity_score`: Combined risk metric (0-700+)
- `is_critical`: Boolean flag (TRUE = urgent action needed)

**Example Data:**
```csv
cluster_id,start_distance_ft,end_distance_ft,span_ft,anomaly_count,max_depth_pct,severity_score,is_critical
25,5361.1,5365.9,4.7,14,59,61.5,True
31,5378.7,5384.0,5.2,10,49,72.9,True
42,21353.0,21362.6,9.6,8,40,34.9,True
```

#### 3. Visualization Files (PNG Images)

**Cluster Map** (`{year}_cluster_map.png`):
- 2D scatter plot showing spatial distribution
- X-axis: Distance along pipeline
- Y-axis: Clock position (0-12 hours)
- Colors: Different for each zone
- Red edges: Critical zones
- Orange edges: Warning zones (severity > 50)

**Severity Chart** (`{year}_cluster_severity.png`):
- Bar chart ranking zones by severity
- X-axis: Cluster IDs (sorted by risk)
- Y-axis: Severity score
- Red bars: Critical zones
- Orange bars: Warning zones
- Annotations: Anomaly count + max depth

---

## Quick Start

### Running the System

```bash
cd backend

# Run clustering analysis on all years
python3 run_clustering.py
```

**Expected Output:**
```
================================================================================
Processing 2007 data...
================================================================================
Found 711 anomalies
Identified 118 clusters
Critical clusters: 5
✓ All outputs saved to output/ directory

Processing 2015 data...
Found 1774 anomalies
Identified 181 clusters
Critical clusters: 38
✓ All outputs saved to output/ directory

Processing 2022 data...
Found 2638 anomalies
Identified 296 clusters
Critical clusters: 28
✓ All outputs saved to output/ directory
```

### Testing the System

```bash
cd backend

# Run comprehensive test suite
python3 test_clustering.py
```

**Expected Result:** 5/5 tests passing (100%)

### Analyzing Results

```bash
cd backend/output

# View critical interaction zones for 2022
grep "True" 2022_cluster_stats.csv

# Count zones by year
wc -l *_cluster_stats.csv

# Open visualizations
open 2022_cluster_map.png
open 2022_cluster_severity.png
```

---

## Technical Implementation

### System Architecture

```
Data Flow:
1. Load normalized CSV data (from data/ directory)
2. Filter to anomalies only (is_anomaly == True)
3. Calculate 3D distances on cylinder surface
4. Run DBSCAN clustering
5. Analyze clusters for critical criteria
6. Generate statistics and visualizations
7. Save results to output/ directory
```

### Core Components

#### 1. Cluster Detector (`src/clustering/cluster_detector.py`)

Main class: `AnomalyClusterDetector`

**Methods:**
- `detect_clusters(df)` - Identifies interaction zones
- `analyze_clusters(df)` - Calculates statistics
- `get_cluster_members(df, id)` - Retrieves zone members

**Configuration:**
```python
detector = AnomalyClusterDetector(
    longitudinal_tolerance_ft=10.0,     # Max distance along pipe
    circumferential_tolerance_deg=90,   # Max angle around pipe
    min_anomalies=2,                    # Min for cluster
    pipe_diameter_ft=2.5                # Pipeline diameter
)
```

#### 2. Visualization (`src/visualization/cluster_viz.py`)

**Functions:**
- `plot_cluster_map(df, path)` - Creates 2D spatial map
- `plot_cluster_severity(stats, path)` - Creates severity chart

**Features:**
- Auto-scaling axes (minimizes white space)
- Dynamic bar spacing (improves readability)
- Color coding (red=critical, orange=warning)
- Annotations with metrics

#### 3. Main Pipeline (`run_clustering.py`)

Orchestrates the complete analysis workflow:
1. Loads data for each year
2. Runs clustering
3. Generates statistics
4. Creates visualizations
5. Saves all outputs

---

## Results Summary

### Interaction Zones Identified

```
Year    Total Zones    Critical    Warning    Normal
----    -----------    --------    -------    ------
2007         118           5          5        108
2015         181          38         14        129
2022         296          28         37        231
----    -----------    --------    -------    ------
Total        595          71         56        468
```

### Critical Zones by Year

#### 2007 - 5 Critical Zones
**Worst:** Cluster 25
- Location: 5,361 - 5,366 ft
- Anomalies: 14
- Max Depth: 59%
- Span: 4.7 ft
- **Status: URGENT ACTION REQUIRED**

#### 2015 - 38 Critical Zones
**Worst:** Cluster 126
- Location: Multiple sections
- Anomalies: 37
- Max Depth: 72%
- Span: 17.5 ft
- **Status: URGENT ACTION REQUIRED**

#### 2022 - 28 Critical Zones
**Worst:** Cluster 147
- Location: Multiple sections
- Anomalies: 16
- Max Depth: 63%
- Span: 13.3 ft
- **Status: URGENT ACTION REQUIRED**

### Verification Results

✅ **Interaction zones correctly identified**
- All critical zones have ≥3 anomalies
- All critical zones have ≥40% depth
- All critical zones have ≤20 ft span
- DBSCAN successfully groups nearby defects

✅ **Data properly stored**
- CSV files contain complete information
- PNG visualizations show spatial patterns
- Statistics match raw data calculations

✅ **Structural concerns validated**
- Average anomaly spacing in critical zones: 0.6-2.3 ft
- Combined wall loss creates stress concentration
- Zones match engineering expectations

---

## API Reference

### AnomalyClusterDetector Class

```python
from src.clustering.cluster_detector import AnomalyClusterDetector
import pandas as pd

# Initialize
detector = AnomalyClusterDetector(
    longitudinal_tolerance_ft=10.0,
    circumferential_tolerance_deg=90,
    min_anomalies=2,
    pipe_diameter_ft=2.5
)

# Load data
df = pd.read_csv('../data/2022.csv')
anomalies = df[df['is_anomaly'] == True]

# Detect zones
clustered_df = detector.detect_clusters(anomalies)
# Returns: DataFrame with added 'cluster_id' column

# Get statistics
stats = detector.analyze_clusters(clustered_df)
# Returns: DataFrame with one row per cluster

# Query specific zone
zone_31 = detector.get_cluster_members(clustered_df, cluster_id=31)
# Returns: DataFrame with all anomalies in cluster 31
```

### Configuration Parameters

| Parameter | Default | Description | Impact |
|-----------|---------|-------------|--------|
| `longitudinal_tolerance_ft` | 10.0 | Max distance along pipe (ft) | Higher = larger zones |
| `circumferential_tolerance_deg` | 90 | Max angle around pipe (°) | Higher = more wrap-around |
| `min_anomalies` | 2 | Min anomalies to form zone | Higher = stricter grouping |
| `pipe_diameter_ft` | 2.5 | Pipeline diameter (ft) | Affects circumferential distance |

### Severity Score Formula

```python
severity_score = (
    0.4 × max_depth_pct +           # Depth factor (40%)
    0.3 × anomaly_count × 5 +       # Interaction factor (30%)
    0.3 × total_length_in           # Extent factor (30%)
)
```

**Interpretation:**
- `< 20`: Low risk (routine monitoring)
- `20-50`: Moderate risk (schedule assessment)
- `50-100`: High risk (plan intervention)
- `> 100`: Critical risk (immediate action)

---

## Visualization Guide

### Cluster Map (2D Pipeline View)

**Purpose:** Shows spatial distribution of interaction zones

**What It Shows:**
- Each colored point = one anomaly
- Point clusters = interaction zones
- Point size = corrosion depth
- Red edges = critical zones
- Orange edges = warning zones

**How to Read:**
1. Look for clusters of points (interaction zones)
2. Red edges indicate urgent action needed
3. Larger points = deeper corrosion
4. Y-axis (0-12) = clock position around pipe
5. X-axis = distance along pipeline

**Example:**
```
A tight cluster of 10 large red-edged points at 5,380 ft
indicates a critical interaction zone with multiple deep
defects requiring immediate engineering assessment.
```

### Severity Chart

**Purpose:** Ranks interaction zones by combined risk

**What It Shows:**
- Each bar = one interaction zone
- Bar height = severity score
- Red bars = critical zones
- Orange bars = warning zones
- Annotations = count + depth

**How to Read:**
1. Bars are sorted left-to-right (worst to least severe)
2. Red bars need immediate attention
3. Orange bars need scheduled assessment
4. Numbers show "n=X" (anomaly count) and "Y%" (max depth)

**Example:**
```
First bar: "C147" with annotation "n=16, 63%"
This is Cluster 147 with 16 anomalies, max depth 63%
Red color indicates it meets critical criteria
Height shows combined severity score
```

---

## Testing

### Test Suite Coverage

Run: `python3 backend/test_clustering.py`

**Tests:**
1. ✅ **Clock Position Parsing** - Handles "9:00" and "09:00" formats
2. ✅ **Cylindrical Distance** - Accurate 3D geometry calculations
3. ✅ **Critical Criteria** - All critical zones meet requirements
4. ✅ **Anomaly Filtering** - Only anomalies clustered (references excluded)
5. ✅ **Output Files** - All 12 files generated correctly

### Manual Verification

```bash
cd backend/output

# Check critical zone count
python3 -c "
import pandas as pd
for year in [2007, 2015, 2022]:
    stats = pd.read_csv(f'{year}_cluster_stats.csv')
    critical = stats[stats['is_critical'] == True]
    print(f'{year}: {len(critical)} critical zones')
"

# View specific critical zone
python3 -c "
import pandas as pd
clustered = pd.read_csv('2022_clustered_anomalies.csv')
zone = clustered[clustered['cluster_id'] == 31]
print(zone[['distance_ft', 'clock_position', 'depth_pct']].to_string())
"
```

---

## Installation

### Prerequisites

```bash
pip install pandas numpy scikit-learn matplotlib scipy
```

Or use requirements file:
```bash
cd backend
pip install -r requirements.txt
```

### Directory Structure

```
tidal26/
├── data/                          # Input CSV files
│   ├── 2007.csv
│   ├── 2015.csv
│   └── 2022.csv
├── backend/
│   ├── src/
│   │   ├── clustering/           # Clustering algorithms
│   │   │   ├── __init__.py
│   │   │   └── cluster_detector.py
│   │   ├── visualization/        # Plotting functions
│   │   │   ├── __init__.py
│   │   │   └── cluster_viz.py
│   │   └── utils/
│   │       └── clock_position.py  # Time parsing
│   ├── output/                   # Generated results
│   ├── run_clustering.py         # Main script
│   ├── test_clustering.py        # Test suite
│   └── README.md                 # This file
└── README.md                     # Project overview
```

---

## Performance

### Processing Speed
- 2007 (711 anomalies): ~5 seconds
- 2015 (1,774 anomalies): ~7 seconds
- 2022 (2,638 anomalies): ~9 seconds
- **Total runtime: ~21 seconds** (all three years)

### Efficiency Gains
- **Before:** 5,123 individual anomalies to assess
- **After:** 595 interaction zones + 402 isolated anomalies
- **Reduction:** 88% fewer items to monitor
- **Focus:** 71 critical zones for immediate action

---

## Troubleshooting

### Common Issues

**Issue:** "ModuleNotFoundError: No module named 'sklearn'"
```bash
Solution: pip3 install scikit-learn
```

**Issue:** Matplotlib font cache warnings
```bash
Solution: First run builds cache (~10 sec). Ignore warnings.
```

**Issue:** Visualizations not readable
```bash
Solution: Images are already optimized. View at 100% zoom.
Increase DPI if printing: edit dpi=150 to dpi=300 in code.
```

---

## References

### Standards & Guidelines
- **ASME B31.8:** Gas Transmission and Distribution Piping Systems
- **NACE SP0102:** In-Line Inspection of Pipelines
- **API 579-1/ASME FFS-1:** Fitness-For-Service

### Algorithms
- **DBSCAN:** Ester et al. (1996) "A density-based algorithm for discovering clusters"
- **Pipeline Integrity:** DNV-RP-F101 Corroded Pipelines

---

## Version History

**v3.0** (Current - Feb 7, 2026)
- Added warning clusters to maps
- Improved bar spacing in charts
- Auto-scaling axes
- Consolidated documentation

**v2.0** (Feb 7, 2026)
- Filtered views (critical/warning only)
- Larger fonts and points
- Enhanced readability

**v1.0** (Feb 7, 2026)
- Initial implementation
- DBSCAN clustering
- Cylindrical geometry
- Critical zone detection

---

## License

Pipeline integrity analysis system for academic/research purposes.

---

## Contact & Support

For issues or questions about the clustering system:
1. Check output CSV files for data
2. View PNG visualizations for spatial understanding
3. Run test suite to verify installation
4. Review this README for detailed explanations

---

## Quick Reference Card

### Key Files
- **Input:** `data/{year}.csv`
- **Output:** `backend/output/{year}_*.csv` and `*.png`
- **Run:** `python3 backend/run_clustering.py`
- **Test:** `python3 backend/test_clustering.py`

### Critical Zone Criteria
- ≥3 anomalies
- ≥40% depth
- ≤20 ft span

### Data Location
- Clustered anomalies: `output/{year}_clustered_anomalies.csv`
- Zone statistics: `output/{year}_cluster_stats.csv`
- Visualizations: `output/{year}_cluster_map.png` and `*_severity.png`

### Status Summary (Latest Run)
- **Total zones:** 595
- **Critical:** 71 (immediate action)
- **Warning:** 56 (scheduled assessment)
- **Normal:** 468 (routine monitoring)

---

*End of Documentation*
