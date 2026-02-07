# ILI Data Alignment & Growth Analysis Pipeline

## Overview

This pipeline compares In-Line Inspection (ILI) data across multiple inspection runs (2007, 2015, 2022) to track pipeline anomaly growth over time. ILI tools ("smart pigs") travel through pipelines recording features like girth welds, metal loss, dents, and other anomalies along with their positions.

The core challenge is that each inspection run uses its own odometer, so the same physical location gets recorded at slightly different distances across runs. This pipeline corrects for that positional drift and then matches anomalies across runs to calculate growth rates.

## Pipeline Steps

### Step 1: Load & Normalize

**File:** `src/loaders/csv_loader.py`

Each inspection year's CSV has different column naming conventions (different ILI vendors). The loader standardizes all column names to a common schema:

| Internal Name     | Description                        |
|-------------------|------------------------------------|
| `log_distance`    | Distance along pipeline (ft)       |
| `event_type`      | Feature type (Girth Weld, Metal Loss, etc.) |
| `depth_percent`   | Wall thickness loss (%)            |
| `clock_position`  | Circumferential position (o'clock) |
| `length`          | Anomaly length (in)                |
| `width`           | Anomaly width (in)                 |
| `joint_number`    | Pipe joint number                  |

Event types are normalized to standard categories:
- **Reference points:** `GIRTH_WELD`, `VALVE`, `TEE`, `BEND`, `FLANGE`, `AGM`
- **Anomalies:** `METAL_LOSS`, `CLUSTER`, `DENT`, `METAL_LOSS_MFG`

Clock positions are parsed from various formats (`"03:00"`, `"3"`, `3.0`) into decimal hours (e.g., `3.0`).

### Step 2: Weld Matching

**File:** `src/alignment/weld_matcher.py`

Girth welds are the most reliable reference points for aligning two inspection runs, since they are permanent physical features that don't change between inspections.

**Two-pass matching algorithm:**

1. **Pass 1 - Match by joint number:** For welds where both runs report a joint number, match welds with the same joint number (within rounding tolerance of 1.0). Among joint-number matches, pick the closest by distance. Only accept matches within a **50 ft** distance tolerance.

2. **Pass 2 - Match by proximity:** For remaining unmatched welds, find the closest unmatched weld in the other run. Again, only accept matches within **50 ft**.

For each matched weld pair, the **offset** is calculated:

```
offset = run2_distance - run1_distance
```

### Step 3: Position Correction

**File:** `src/alignment/position_corrector.py`

Using the matched weld pairs as control points, a **piecewise linear interpolation** function maps Run 2 distances into Run 1's coordinate system.

```
corrected_distance = numpy.interp(run2_position, run2_weld_positions, run1_weld_positions)
```

This accounts for the fact that odometer drift is not constant along the pipeline -- it varies locally due to tool speed changes, slippage, and other factors. The interpolation smoothly corrects positions between known weld locations.

### Step 4: Anomaly Matching

**File:** `src/matching/anomaly_matcher.py`, `src/matching/scoring.py`

After position correction, anomalies from Run 2 are matched to Run 1 anomalies using a multi-factor scoring system.

#### Candidate Selection

For each Run 2 anomaly, candidate matches from Run 1 must be within:
- **Distance tolerance:** 10 ft
- **Clock tolerance:** 2.0 hours

#### Scoring Formula

Each candidate is scored on three factors with weighted combination:

```
total_score = 0.5 * distance_score + 0.3 * clock_score + 0.2 * dimension_score
```

**Distance Score (50% weight):**

```
distance_score = max(0, 1 - |dist1 - dist2| / tolerance)
```

Where `tolerance = 10 ft`. A perfect position match scores 1.0; at the tolerance boundary it scores 0.0.

**Clock Score (30% weight):**

```
clock_distance = min(|pos1 - pos2|, 12 - |pos1 - pos2|)
clock_score = max(0, 1 - clock_distance / tolerance)
```

Where `tolerance = 1.5 hours`. The clock distance wraps around 12 (e.g., 11:00 and 1:00 are 2 hours apart, not 10). If clock data is missing, a neutral score of 0.5 is assigned.

**Dimension Score (20% weight):**

```
dimension_score = average of available sub-scores:
  - length_score = max(0, 1 - |len1 - len2| / 3.0)
  - width_score  = max(0, 1 - |wid1 - wid2| / 3.0)
  - depth_score  = max(0, 1 - |dep1 - dep2| / 20.0)
```

Tolerances: length 3.0 in, width 3.0 in, depth 20.0%. Only dimensions available in both runs are included. If no dimensions are available, a neutral score of 0.5 is assigned.

#### Match Classification

| Category      | Condition                                            |
|---------------|------------------------------------------------------|
| **Matched**   | Best candidate has `total_score >= 0.5`              |
| **Uncertain** | Matched, but a runner-up candidate has `score >= 0.4`|
| **New**       | No candidates found, or best score `< 0.5`          |
| **Missing**   | Run 1 anomaly not matched by any Run 2 anomaly       |

### Step 5: Growth Calculation

**File:** `src/analysis/growth_calculator.py`

For each matched anomaly pair, growth is calculated for depth, length, and width:

```
change = value_run2 - value_run1
growth_rate = change / years_between
```

For example, if an anomaly's depth went from 15% to 52% wall loss over 15 years:

```
depth_change = 52 - 15 = 37%
depth_growth_rate = 37 / 15 = 2.47 %/year
```

**Critical flag:** Anomalies with `depth_growth_rate > 2.0 %/year` are flagged as critical.

### Step 6: Output

**File:** `src/main.py`

Results are saved to `backend/output/` as CSV files:

| File                              | Contents                                      |
|-----------------------------------|-----------------------------------------------|
| `{year1}_vs_{year2}_matched_anomalies.csv` | Matched pairs with growth rates and confidence scores |
| `{year1}_vs_{year2}_new_anomalies.csv`     | Anomalies found only in the later run          |
| `{year1}_vs_{year2}_missing_anomalies.csv` | Anomalies from the earlier run not found in the later run |
| `{year1}_vs_{year2}_weld_alignment.csv`    | Matched weld pairs with positional offsets      |

## Run Comparisons

The pipeline runs three comparisons by default:

| Comparison       | Years Between |
|------------------|---------------|
| 2007 vs 2015     | 8 years       |
| 2015 vs 2022     | 7 years       |
| 2007 vs 2022     | 15 years      |

## Usage

```bash
# From the backend/ directory:

# Run all comparisons
python3 -m src.main

# Run a specific comparison
python3 -m src.main 2007 2015
```

## Dependencies

- `pandas` - Data loading and manipulation
- `numpy` - Piecewise linear interpolation for position correction
- `openpyxl` - Excel file support

## Project Structure

```
backend/
  src/
    main.py                        # Pipeline entry point
    loaders/
      csv_loader.py                # CSV loading and column normalization
    alignment/
      weld_matcher.py              # Girth weld matching (two-pass algorithm)
      position_corrector.py        # Piecewise linear position correction
    matching/
      anomaly_matcher.py           # Anomaly matching across runs
      scoring.py                   # Distance, clock, and dimension scoring
    analysis/
      growth_calculator.py         # Growth rate calculation and critical flagging
    utils/
      normalization.py             # Column mappings and event type normalization
      clock_position.py            # Clock position parsing and circular distance
  output/                          # Generated CSV results
data/
  2007.csv                         # ILI inspection data
  2015.csv
  2022.csv
```
