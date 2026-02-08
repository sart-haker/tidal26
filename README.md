# TIDAL26 — Pipeline Integrity Analysis System

A complete pipeline In-Line Inspection (ILI) data analysis system that aligns multi-year inspection data, detects anomaly interaction zones, predicts future corrosion locations and growth rates using machine learning.

---

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Data Files](#data-files)
4. [Feature 1 — Data Alignment & Anomaly Matching](#feature-1--data-alignment--anomaly-matching)
5. [Feature 2 — Interaction Zone Detection (Clustering)](#feature-2--interaction-zone-detection-clustering)
6. [Feature 3 — ML Corrosion Prediction](#feature-3--ml-corrosion-prediction)
7. [Output Directory Structure](#output-directory-structure)
8. [Results Summary](#results-summary)
9. [Project Structure](#project-structure)
10. [Installation & Dependencies](#installation--dependencies)
11. [Testing](#testing)
12. [Troubleshooting](#troubleshooting)
13. [References](#references)

---

## Overview

This project processes ILI data from three inspection years (2007, 2015, 2022) to:

1. **Align & match** anomalies across inspection runs using girth weld positions
2. **Detect interaction zones** where clustered anomalies create combined structural weakness
3. **Predict future corrosion** locations with ML probability scores
4. **Prioritize** maintenance and inspection activities

### Key Findings

| Metric | Value |
|---|---|
| Anomaly growth | 711 → 1,774 → 2,638 (+271% over 15 years) |
| Interaction zones detected | 595 total (71 critical) |
| ML model ROC AUC | 0.9549 (Random Forest) |
| High-risk predicted locations | 969 |
| Monitoring point reduction | 88% fewer items vs. individual assessment |

---

## Quick Start

```bash
# 1. Install dependencies
cd backend
pip install -r requirements.txt

# 2. Run anomaly alignment pipeline (generates comparison CSVs)
python -m src.main

# 3. Run interaction zone detection
python3 run_clustering.py

# 4. Train ML corrosion prediction model
python -m src.ml.train

# 5. Predict future corrosion locations
python -m src.ml.predict
```

All results are saved to `backend/output/` in organized subfolders.

---

## Data Files

Located in `data/`:

| File | Rows | Anomalies | Year |
|------|------|-----------|------|
| `2007.csv` | 2,446 | 711 | 2007 |
| `2015.csv` | 3,678 | 1,774 | 2015 |
| `2022.csv` | 5,233 | 2,638 | 2022 |

---

## Feature 1 — Data Alignment & Anomaly Matching

**Location:** `backend/src/alignment/`, `backend/src/loaders/`, `backend/src/matching/`, `backend/src/analysis/`

### What It Does

1. Loads and normalizes ILI CSV data
2. Aligns inspections using girth weld positions
3. Matches anomalies across years (same defect tracked over time)
4. Identifies **new** corrosion that appeared between runs
5. Calculates growth rates for matched anomalies

### How to Run

```bash
cd backend
python -m src.main
```

### Output

Saved to `backend/output/anomaly_comparisons/`:

| File | Description |
|------|-------------|
| `{A}_vs_{B}_weld_alignment.csv` | Weld position alignment between years |
| `{A}_vs_{B}_matched_anomalies.csv` | Anomalies matched across runs (growth data) |
| `{A}_vs_{B}_new_anomalies.csv` | New corrosion found in later run |
| `{A}_vs_{B}_missing_anomalies.csv` | Anomalies no longer detected |

### Core Components

| Module | Purpose |
|--------|---------|
| `src/loaders/csv_loader.py` | CSV loading and standardization |
| `src/alignment/weld_matcher.py` | Girth weld alignment |
| `src/alignment/position_corrector.py` | Distance correction |
| `src/matching/anomaly_matcher.py` | Cross-year anomaly matching |
| `src/matching/scoring.py` | Match scoring algorithms |
| `src/analysis/growth_calculator.py` | Growth rate calculation |

---

## Feature 2 — Interaction Zone Detection (Clustering)

**Location:** `backend/src/clustering/`, `backend/src/visualization/`

### Key Concept

An **interaction zone** occurs when multiple corrosion defects are close enough to affect each other structurally. This creates stress concentration, combined wall loss, and higher failure risk than isolated anomalies suggest.

**Example — Cluster 31 (2022 data):**
```
10 anomalies within 5.2 feet at 5,379–5,384 ft
- Two defects reach 49% depth (critical wall loss)
- Average spacing: 0.6 ft between defects
- Status: CRITICAL ⚠️
```

### Algorithm

DBSCAN clustering with a custom 3D cylindrical distance metric:

```python
# Longitudinal distance (along pipe axis)
long_dist = |distance_ft_1 - distance_ft_2|

# Circumferential distance (around pipe surface)
angle_diff = shortest_arc(clock_1, clock_2)
circ_dist = pipe_radius × angle_diff_radians

# 3D distance on cylinder surface
distance_3d = √(long_dist² + circ_dist²)

# Clustering thresholds
# - Within 10 ft longitudinally
# - Within 90° circumferentially
# - At least 2 anomalies to form a cluster
```

**Critical Zone Criteria** — a cluster is flagged CRITICAL when ALL conditions are met:

| Condition | Threshold |
|-----------|-----------|
| Anomaly count | ≥ 3 |
| Max depth | ≥ 40% wall thickness |
| Span | ≤ 20 ft |

### How to Run

```bash
cd backend
python3 run_clustering.py
```

**Expected output:**
```
Processing 2007 data... Found 711 anomalies, 118 clusters, 5 critical
Processing 2015 data... Found 1774 anomalies, 181 clusters, 38 critical
Processing 2022 data... Found 2638 anomalies, 296 clusters, 28 critical
```

### Output

Saved to `backend/output/clustering/`:

| File | Description |
|------|-------------|
| `{year}_clustered_anomalies.csv` | Every anomaly with its `cluster_id` (-1 = isolated) |
| `{year}_cluster_stats.csv` | One row per zone: span, count, depth, severity, `is_critical` |
| `{year}_cluster_map.png` | 2D scatter plot — distance vs. clock position, color-coded by zone |
| `{year}_cluster_severity.png` | Bar chart ranking zones by severity score |

### Severity Score

```python
severity_score = (
    0.4 × max_depth_pct +
    0.3 × anomaly_count × 5 +
    0.3 × total_length_in
)
```

| Score | Risk | Action |
|-------|------|--------|
| < 20 | Low | Routine monitoring |
| 20–50 | Moderate | Schedule assessment |
| 50–100 | High | Plan intervention |
| > 100 | Critical | Immediate action |

### Reading the Visualizations

**Cluster Map:**
- Each colored point = one anomaly; clusters share colors
- Point size = corrosion depth
- Red edges = critical zones, orange = warning
- X-axis = distance along pipeline, Y-axis = clock position (0–12)

**Severity Chart:**
- Bars sorted worst-to-best (left to right)
- Red = critical, orange = warning
- Annotations show anomaly count and max depth

### API Usage

```python
from src.clustering.cluster_detector import AnomalyClusterDetector
import pandas as pd

detector = AnomalyClusterDetector(
    longitudinal_tolerance_ft=10.0,
    circumferential_tolerance_deg=90,
    min_anomalies=2,
    pipe_diameter_ft=2.5
)

df = pd.read_csv('../data/2022.csv')
anomalies = df[df['is_anomaly'] == True]

clustered_df = detector.detect_clusters(anomalies)     # adds 'cluster_id'
stats = detector.analyze_clusters(clustered_df)         # summary per zone
zone_31 = detector.get_cluster_members(clustered_df, cluster_id=31)
```

---

## Feature 3 — ML Corrosion Prediction

**Location:** `backend/src/ml/`

### What It Does

Trains a machine learning model that:
- **Learns** from where new corrosion formed between inspection periods
- **Identifies** patterns (density, proximity to welds, elevation, clock position)
- **Predicts** future corrosion locations with probability scores
- **Prioritizes** inspection and maintenance activities

### Step 1 — Generate Training Data

The alignment pipeline (Feature 1) must run first to produce the comparison CSVs:

```bash
cd backend
python -m src.main
```

### Step 2 — Train the Model

```bash
cd backend
python -m src.ml.train
```

**What happens:**
1. Loads comparison data from `output/anomaly_comparisons/`
2. Creates training samples:
   - **Positive**: Locations where corrosion formed
   - **Negative**: Locations that stayed clean
3. Engineers 50+ features
4. Trains Random Forest and Gradient Boosting models
5. Evaluates performance with cross-validation
6. Saves models to `backend/models/`

**Expected output:**
```
=== Training Random Forest Model ===
  accuracy:  0.9234
  precision: 0.8456
  recall:    0.7823
  roc_auc:   0.9549

Top Features:
  anomaly_density_50ft, dist_to_nearest_anomaly,
  dist_to_girth_weld, elevation, clock_6oclock
```

**Models saved to `backend/models/`:**
```
corrosion_predictor_rf.pkl            # Random Forest model
corrosion_predictor_rf_metrics.json   # Performance metrics
corrosion_predictor_rf_features.json  # Feature list
corrosion_predictor_gb.pkl            # Gradient Boosting model
```

### Step 3 — Predict Future Corrosion

```bash
cd backend
python -m src.ml.predict
```

**What happens:**
1. Loads trained model and latest inspection data (2022)
2. Samples along the pipeline
3. Engineers features at each location
4. Outputs corrosion probability per location

**Predictions saved to `backend/output/predictions/`.**

### Understanding the Results

#### Model Performance

| Metric | Good Range | Meaning |
|--------|-----------|---------|
| Accuracy | 0.85–0.95 | Overall correctness |
| Precision | 0.70–0.90 | Of predicted corrosion, % actually real |
| Recall | 0.65–0.85 | Of real corrosion, % we caught |
| ROC AUC | 0.85–0.95 | Overall ranking ability |

#### Prediction Risk Levels

| Probability | Risk | Action |
|------------|------|--------|
| > 0.9 | Critical | Immediate inspection |
| 0.7–0.9 | High | Priority next cycle |
| 0.5–0.7 | Medium | Standard monitoring |
| < 0.5 | Low | Regular schedule |

#### Top Predictive Features

1. **Anomaly Density** (50 ft radius) — areas with existing corrosion develop more
2. **Distance to Nearest Anomaly** — corrosion clusters and spreads
3. **Distance to Girth Weld** — welds are stress concentrators
4. **Elevation / Slope** — low points accumulate water
5. **Clock Position (6 o'clock)** — bottom of pipe = highest stress

### Growth Rate Prediction

A separate standalone model predicts 5-year corrosion depth growth rates:

```bash
cd backend
python -m src.ml.growth_rate_prediction
```

Output: `backend/output/predictions/corrosion_rates_predictions.csv`

### Customization & Tuning

**Adjust model parameters** in `src/ml/train.py`:
```python
# More conservative (fewer false positives)
train_model(model_type='random_forest', n_estimators=300, max_depth=10, min_samples_split=50)

# More aggressive (catch more corrosion)
train_model(model_type='random_forest', n_estimators=200, max_depth=20, min_samples_split=10)
```

**Change prediction grid resolution** in `src/ml/predict.py`:
```python
grid_points = np.arange(min_dist, max_dist, 2.0)   # every 2 ft (detailed)
grid_points = np.arange(min_dist, max_dist, 10.0)  # every 10 ft (faster)
```

**Add custom features** in `src/ml/feature_engineering.py`:
```python
result['my_custom_feature'] = result['wall_thickness'] * result['elevation']
```

### Improving Performance

- **More data**: Wait for next ILI run, retrain with new period
- **Domain features**: Coating type, soil resistivity, CP readings, pressure history
- **Hyperparameter tuning**: Use `GridSearchCV` with cross-validation
- **Ensemble**: Average RF and GB predictions for more robust results

---

## Output Directory Structure

```
backend/output/
├── anomaly_comparisons/           ← from alignment pipeline
│   ├── 2007_vs_2015_matched_anomalies.csv
│   ├── 2007_vs_2015_new_anomalies.csv
│   ├── 2007_vs_2015_missing_anomalies.csv
│   ├── 2007_vs_2015_weld_alignment.csv
│   ├── 2015_vs_2022_*.csv
│   └── 2007_vs_2022_*.csv
├── clustering/                    ← from interaction zone detection
│   ├── {year}_clustered_anomalies.csv
│   ├── {year}_cluster_stats.csv
│   ├── {year}_cluster_map.png
│   └── {year}_cluster_severity.png
└── predictions/                   ← from ML prediction
    ├── predictions_2022_future.csv
    ├── corrosion_rates_predictions.csv
    └── future_corrosion_predictions.csv
```

---

## Results Summary

### Anomaly Growth Over Time

| Year | Anomalies | Change from 2007 |
|------|-----------|-------------------|
| 2007 | 711 | — |
| 2015 | 1,774 | +149% |
| 2022 | 2,638 | +271% |

### Interaction Zones Detected

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

| Year | Worst Cluster | Anomalies | Max Depth | Span |
|------|--------------|-----------|-----------|------|
| 2007 | Cluster 25 | 14 | 59% | 4.7 ft |
| 2015 | Cluster 126 | 37 | 72% | 17.5 ft |
| 2022 | Cluster 147 | 16 | 63% | 13.3 ft |

### Efficiency Gains

- **Before:** 5,123 individual anomalies to assess
- **After:** 595 interaction zones + 402 isolated anomalies
- **Reduction:** 88% fewer monitoring points
- **Focus:** 71 critical zones for immediate action

---

## Project Structure

```
tidal26/
├── data/                              # Input ILI CSV files
│   ├── 2007.csv
│   ├── 2015.csv
│   └── 2022.csv
├── backend/
│   ├── src/
│   │   ├── alignment/                # Weld matching & position correction
│   │   ├── analysis/                 # Growth rate calculation
│   │   ├── clustering/               # DBSCAN interaction zone detection
│   │   ├── loaders/                  # CSV loading & normalization
│   │   ├── matching/                 # Cross-year anomaly matching
│   │   ├── ml/                       # Machine learning pipeline
│   │   │   ├── train.py              #   Model training entry point
│   │   │   ├── predict.py            #   Future corrosion prediction
│   │   │   ├── feature_engineering.py#   50+ feature extraction
│   │   │   ├── dataset_preparation.py#   Training sample creation
│   │   │   ├── model_training.py     #   Model train/evaluate/save
│   │   │   └── growth_rate_prediction.py # Growth rate RF regressor
│   │   ├── utils/                    # Clock position, normalization helpers
│   │   ├── visualization/            # Cluster maps & severity charts
│   │   └── main.py                   # Alignment pipeline entry point
│   ├── output/                       # All generated results
│   │   ├── anomaly_comparisons/
│   │   ├── clustering/
│   │   └── predictions/
│   ├── models/                       # Saved ML model .pkl files
│   ├── run_clustering.py             # Clustering entry point
│   ├── test_clustering.py            # Clustering test suite
│   └── requirements.txt
├── frontend/                          # Next.js dashboard
└── README.md                          # This file
```

---

## Installation & Dependencies

### Prerequisites

- Python 3.9+
- Node.js 18+ (for frontend)

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Key dependencies: `pandas`, `numpy`, `scikit-learn`, `matplotlib`, `scipy`, `openpyxl`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Testing

### Clustering Tests

```bash
cd backend
python3 test_clustering.py
```

**5 tests covering:**
1. ✅ Clock position parsing (handles `"9:00"` and `"09:00"` formats)
2. ✅ Cylindrical 3D distance calculations
3. ✅ Critical zone criteria validation
4. ✅ Anomaly filtering (only anomalies clustered, not references)
5. ✅ Output file generation (all 12 files)

### Manual Verification

```bash
cd backend/output/clustering

# View critical zones for 2022
grep "True" 2022_cluster_stats.csv

# Count zones per year
wc -l *_cluster_stats.csv

# Open visualizations
open 2022_cluster_map.png
open 2022_cluster_severity.png
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `ModuleNotFoundError: No module named 'src'` | Run from `backend/` directory using `python -m src.ml.train` |
| `ModuleNotFoundError: No module named 'sklearn'` | `pip install scikit-learn` |
| `Could not find new_anomalies.csv` | Run alignment pipeline first: `python -m src.main` |
| `Input X contains NaN` | Handled automatically; if persists, check data completeness |
| Low ROC AUC (< 0.7) | Check data quality, increase `max_depth`, try gradient boosting |
| All predictions identical | Increase model complexity, check feature engineering output |
| Matplotlib font cache warnings | Ignore — first run builds cache (~10 sec) |
| `npm run dev` fails | Run from `frontend/` directory, ensure `npm install` ran first |

---

## References

### Standards & Guidelines
- **ASME B31.8** — Gas Transmission and Distribution Piping Systems
- **NACE SP0102** — In-Line Inspection of Pipelines
- **API 579-1 / ASME FFS-1** — Fitness-For-Service
- **DNV-RP-F101** — Corroded Pipelines

### Algorithms
- **DBSCAN**: Ester et al. (1996) — *A density-based algorithm for discovering clusters*
- **Random Forest**: Breiman (2001) — *Random Forests*
- **scikit-learn**: https://scikit-learn.org/stable/user_guide.html

---

## License

Pipeline integrity analysis system for academic/research purposes.
