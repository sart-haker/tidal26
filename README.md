# TIDAL26 Pipeline Integrity Analysis

Pipeline In-Line Inspection (ILI) data analysis system for integrity management.

## Project Overview

This project processes ILI data from multiple inspection years to:
1. Track pipeline anomalies over time
2. **Identify interaction zones** where multiple nearby anomalies create combined structural weakness
3. Assess structural integrity risks
4. Prioritize maintenance and inspection activities

## Key Features

### 1. Data Normalization & Alignment
Location: `backend/src/alignment/`, `backend/src/loaders/`
- CSV data loading and standardization
- Weld position alignment across inspections
- Distance correction algorithms

### 2. Anomaly Matching & Growth Analysis
Location: `backend/src/matching/`, `backend/src/analysis/`
- Cross-year anomaly correlation
- Growth rate calculation
- Scoring algorithms

### 3. **Anomaly Clustering & Interaction Zone Detection** ⭐
Location: `backend/src/clustering/`, `backend/src/visualization/`

**What It Does:**
- Identifies areas where multiple nearby anomalies create **interaction zones**
- Uses DBSCAN clustering with cylindrical geometry
- Detects critical zones requiring immediate action
- Generates spatial maps and severity rankings

**Key Concept:** An **interaction zone** occurs when multiple corrosion defects are close enough that their combined effect exceeds the sum of individual assessments, creating localized structural weakness.

## Quick Start

### Run Interaction Zone Detection
```bash
cd backend
python3 run_clustering.py
```

**What This Does:**
- Processes 2007, 2015, and 2022 inspection data
- Identifies 595 total interaction zones
- Flags 71 critical zones requiring immediate action
- Generates maps and severity charts
- Saves results to `backend/output/`

### View Results
```bash
cd backend/output

# View critical zones
grep "True" 2022_cluster_stats.csv

# Open visualizations
open 2022_cluster_map.png
open 2022_cluster_severity.png
```

### Run Tests
```bash
cd backend
python3 test_clustering.py
```

Expected: 5/5 tests passing (100%)

## Data Files

Located in `data/`:
- `2007.csv` - 2,446 rows, 711 anomalies
- `2015.csv` - 3,678 rows, 1,774 anomalies
- `2022.csv` - 5,233 rows, 2,638 anomalies

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

**Critical Zone Example (2022):**
```
Cluster 31: 10 anomalies within 5.2 feet
- Location: 5,379 - 5,384 ft
- Max Depth: 49% (significant wall loss)
- Closest spacing: 0.06 ft between defects
- Status: CRITICAL ⚠️ (immediate action required)
```

### Data Storage

All interaction zone data is stored in:
- **`backend/output/{year}_clustered_anomalies.csv`** - Every anomaly with cluster assignment
- **`backend/output/{year}_cluster_stats.csv`** - Summary statistics per zone
- **`backend/output/{year}_cluster_map.png`** - Spatial visualization
- **`backend/output/{year}_cluster_severity.png`** - Severity ranking

## Documentation

📖 **Complete documentation:** [`backend/README.md`](backend/README.md)

This comprehensive guide includes:
- Interaction zone verification with examples
- Detailed data storage locations
- Technical implementation details
- API reference and usage examples
- Visualization interpretation guide
- Testing and troubleshooting

## Project Structure

```
tidal26/
├── data/                          # Input CSV files
│   ├── 2007.csv
│   ├── 2015.csv
│   └── 2022.csv
├── backend/
│   ├── src/
│   │   ├── clustering/           # Interaction zone detection
│   │   ├── visualization/        # Map and chart generation
│   │   ├── alignment/            # Position correction
│   │   ├── analysis/             # Growth calculation
│   │   ├── matching/             # Cross-year matching
│   │   └── utils/                # Helper functions
│   ├── output/                   # Generated results (12 files)
│   ├── run_clustering.py         # Main clustering script
│   ├── test_clustering.py        # Test suite
│   └── README.md                 # Complete documentation
└── README.md                     # This file
```

## Dependencies

```bash
pip install pandas numpy scikit-learn matplotlib scipy openpyxl
```

See `backend/requirements.txt` for specific versions.

## Verification

The clustering system correctly identifies interaction zones by:
1. ✅ Grouping anomalies within 10 ft longitudinally AND 90° circumferentially
2. ✅ Calculating true 3D distances on cylindrical pipe surface
3. ✅ Flagging zones with ≥3 anomalies, ≥40% depth, ≤20 ft span as critical
4. ✅ Storing complete data in CSV files with cluster assignments
5. ✅ Generating visual maps showing spatial patterns

**Example verification:** Cluster 31 in 2022 has 10 anomalies within 5.2 ft, with closest spacing of 0.06 ft and max depth of 49% - correctly flagged as critical due to structural interaction concerns.

## Key Findings

### Anomaly Growth
- 2007: 711 anomalies
- 2015: 1,774 anomalies (+149%)
- 2022: 2,638 anomalies (+271% from 2007)

### Critical Zones
- **71 critical interaction zones** identified across all years
- Require immediate engineering assessment
- Located at specific pipeline positions (stored in CSV files)
- Visualized in PNG maps for inspection planning

### Efficiency
- **Before:** 5,123 individual anomalies to assess
- **After:** 595 interaction zones + 402 isolated anomalies
- **Reduction:** 88% fewer monitoring points
- **Focus:** 71 critical zones for immediate action

## License

RCP Track - Pipeline integrity analysis system for academic/research purposes.

---

For detailed technical documentation, API reference, and usage examples, see **[`backend/README.md`](backend/README.md)**
