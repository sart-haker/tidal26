# RCP Track — Development Guide

## What This Project Does

RCP Track is a pipeline integrity tool that compares In-Line Inspection (ILI) data across multiple inspection runs. Smart pigs travel through pipelines recording anomalies (metal loss, dents, clusters) and reference points (girth welds, valves). Each run uses its own odometer, so the same physical location gets recorded at different distances. This tool corrects for that drift and tracks anomaly growth over time.

## Architecture

```
frontend/          Next.js 16 + TypeScript + Tailwind v4     (port 3000)
backend/src/       Python pipeline — matching algorithm        (library)
backend/api/       FastAPI server wrapping the pipeline        (port 8000)
MongoDB Atlas      Cloud database for storing analysis results
data/              Raw inspection CSVs (2007, 2015, 2022)
backend/output/    Pre-computed results from the 3 default comparisons
```

## How the Pipeline Works

1. **Load & Normalize** — CSVs have different column names per vendor/year. We standardize them to internal names (`log_distance`, `event_type`, `depth_percent`, etc.)
2. **Weld Matching** — Girth welds are immobile reference points. We match them across runs by joint number and proximity (two-pass algorithm).
3. **Position Correction** — Build a piecewise linear interpolation from matched welds to correct Run 2 positions into Run 1's coordinate system.
4. **Anomaly Matching** — For each Run 2 anomaly, find Run 1 candidates within distance/clock tolerances. Score matches using weighted formula: `0.5 * distance + 0.3 * clock + 0.2 * dimensions`.
5. **Growth Calculation** — For matched pairs, compute depth/length/width growth rates per year. Flag anomalies with depth growth > 2.0%/year as critical.
6. **Output** — Categorize all anomalies as: matched, new (only in Run 2), missing (only in Run 1), or uncertain.

## Key Files

### Backend Pipeline (DO NOT MODIFY — core algorithm)
- `backend/src/matching/anomaly_matcher.py` — Candidate search and anomaly classification
- `backend/src/matching/scoring.py` — Distance/clock/dimension scoring formulas
- `backend/src/alignment/weld_matcher.py` — Two-pass girth weld matching
- `backend/src/alignment/position_corrector.py` — Piecewise linear interpolation
- `backend/src/analysis/growth_calculator.py` — Growth rate computation and critical flagging
- `backend/src/utils/normalization.py` — Column mappings and event type normalization
- `backend/src/utils/clock_position.py` — Clock position parsing

### Backend API (FastAPI wrapper)
- `backend/api/app.py` — FastAPI entry point, CORS, startup/shutdown
- `backend/api/database.py` — MongoDB Atlas connection via motor (async)
- `backend/api/models.py` — Pydantic request/response models
- `backend/api/routes/analysis.py` — REST endpoints for upload, list, detail, delete

### Frontend
- `frontend/src/app/upload/page.tsx` — CSV upload form with validation
- `frontend/src/app/results/page.tsx` — List of all analyses
- `frontend/src/app/results/[id]/page.tsx` — Detailed results view with tabs
- `frontend/src/components/upload/FileUpload.tsx` — Drag-and-drop file upload component
- `frontend/src/lib/api.ts` — API client functions
- `frontend/src/lib/types.ts` — TypeScript interfaces

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/analyze` | Upload 2 CSVs, run pipeline, store results |
| GET | `/api/analyses` | List all analyses (summary) |
| GET | `/api/analyses/:id` | Get full analysis results |
| DELETE | `/api/analyses/:id` | Delete an analysis |
| GET | `/api/schema` | Get required CSV column spec |

## CSV Upload Format

Uploaded CSVs must include these columns:
- **Required:** `distance_ft`, `feature_type`, `clock_position`, `joint_number`, `wall_thickness_in`
- **Recommended:** `depth_pct`, `anomaly_length_in`, `anomaly_width_in`
- **Optional:** `internal_external`, `elevation_ft`, `depth_in`, `dist_to_upstream_gw_ft`, `dist_to_downstream_gw_ft`

## Running Locally

```bash
# 1. Backend
cd backend
pip install -r requirements.txt
# Set MONGODB_URI in .env to your Atlas connection string
uvicorn api.app:app --reload --port 8000

# 2. Frontend
cd frontend
npm install
npm run dev
# Opens on http://localhost:3000
```

## MongoDB

- **Host:** MongoDB Atlas (cloud) — connection string in `backend/.env`
- **Database:** `tidal26`
- **Collection:** `analyses` — stores full analysis results per upload

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Recharts
- **Backend:** Python 3, FastAPI, pandas, numpy
- **Database:** MongoDB Atlas (motor async driver)