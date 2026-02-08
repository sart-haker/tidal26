# How to Train Your Corrosion Prediction Model

## 📖 Complete Training Guide

This guide walks you through training a machine learning model to predict where new corrosion will form in your pipeline.

---

## 🎯 What You'll Build

A machine learning model that:
- **Learns** from 3 ILI inspection runs (2007, 2015, 2022)
- **Identifies** patterns where new corrosion formed
- **Predicts** future corrosion locations with probability scores
- **Helps** prioritize inspection and maintenance activities

---

## 📋 Prerequisites

### 1. Data Requirements

You need:
- ✅ At least 2 ILI inspection runs (you have 3: 2007, 2015, 2022)
- ✅ Normalized CSV format with location, depth, clock position, etc.
- ✅ Girth weld positions for alignment
- ✅ Anomaly data (metal loss, clusters)

**Status**: ✓ You have this data in `data/` directory

### 2. Software Requirements

```bash
# Install Python dependencies
cd backend
pip install -r requirements.txt
```

This installs:
- `pandas` - Data manipulation
- `numpy` - Numerical computing
- `scikit-learn` - Machine learning
- `matplotlib` - Visualization

---

## 🚀 Training Process (3 Steps)

### Step 1: Generate Training Data

The model learns from **where new corrosion formed** between inspection runs.

```bash
cd backend
python src/main.py
```

**What this does:**
1. Loads 2007, 2015, 2022 ILI data
2. Aligns the data using girth welds
3. Matches anomalies between runs
4. Identifies NEW corrosion in each period
5. Saves comparison files to `output/`

**Expected output:**
```
output/
├── 2007_vs_2015_new_anomalies.csv      ← New corrosion 2007→2015
├── 2015_vs_2022_new_anomalies.csv      ← New corrosion 2015→2022
├── 2007_vs_2015_matched_anomalies.csv  ← Growth data
└── ...
```

### Step 2: Train the Model

Now train ML models on this data:

```bash
cd src/ml
python train.py
```

**What this does:**
1. Loads comparison data from Step 1
2. Creates training samples:
   - **Positive samples**: Locations where corrosion formed
   - **Negative samples**: Locations that stayed clean
3. Engineers features (50+ features extracted)
4. Trains 2 models:
   - Random Forest (ensemble of decision trees)
   - Gradient Boosting (sequential learning)
5. Evaluates performance
6. Saves models to `models/`

**Expected output:**
```
=== Creating Multi-Period Dataset ===
Preparing Dataset: 2007 → 2015
  New anomalies to learn from: 1531
  Positive samples extracted: 1531
  Negative samples extracted: 4593
  Total samples: 6124
  
Preparing Dataset: 2015 → 2022
  New anomalies to learn from: 2149
  ...
  
Combined dataset shape: (10500, 52)

=== Training Random Forest Model ===
  Engineered 52 total features
  
Training Metrics:
  accuracy: 0.9234
  precision: 0.8456
  recall: 0.7823
  f1: 0.8127
  roc_auc: 0.9456

Validation Metrics:
  accuracy: 0.8876
  precision: 0.7654
  recall: 0.7234
  f1: 0.7438
  roc_auc: 0.8923

Top 15 Most Important Features:
  anomaly_density_50ft              : 0.1234
  dist_to_nearest_anomaly          : 0.0987
  dist_to_girth_weld               : 0.0876
  elevation                        : 0.0654
  ...
```

**Models saved:**
```
models/
├── corrosion_predictor_rf.pkl            ← Random Forest model
├── corrosion_predictor_rf_metrics.json   ← Performance metrics
├── corrosion_predictor_rf_features.json  ← Feature list
├── corrosion_predictor_gb.pkl            ← Gradient Boosting model
└── ...
```

### Step 3: Make Predictions

Use the trained model to predict future corrosion:

```bash
python predict.py
```

**What this does:**
1. Loads trained model
2. Loads latest inspection data (2022)
3. Samples every 5 feet along pipeline
4. Engineers features at each location
5. Predicts corrosion probability
6. Saves predictions to CSV

**Expected output:**
```
=== Prediction Summary ===
High risk (>70% probability):       127 locations
Medium risk (50-70% probability):   314 locations
Low risk (<50% probability):       8934 locations

Top 20 Highest Risk Locations:
Distance (ft)    Probability     Clock Pos       Elevation (ft)
----------------------------------------------------------------
2456.3          0.923           6:00            453.2
3789.1          0.887           5:45            421.8
5234.7          0.876           6:15            398.4
...
```

**Predictions saved:**
```
output/
└── predictions_2022_future_corrosion.csv
```

---

## 📊 Understanding the Results

### Model Performance Metrics

| Metric | Good Range | Meaning |
|--------|-----------|---------|
| **Accuracy** | 0.85-0.95 | Overall correctness |
| **Precision** | 0.70-0.90 | Of predicted corrosion, % that's real |
| **Recall** | 0.65-0.85 | Of real corrosion, % we caught |
| **ROC AUC** | 0.85-0.95 | Overall ranking ability |

**Trade-offs:**
- High precision, lower recall = Conservative (fewer false alarms, might miss some)
- Lower precision, high recall = Aggressive (catch more, but more false alarms)

### Feature Importance

Top features that drive predictions:

1. **Anomaly Density** (50ft radius) - Most important!
   - Areas with existing corrosion tend to develop more
   
2. **Distance to Nearest Anomaly**
   - Corrosion clusters and spreads
   
3. **Distance to Girth Weld**
   - Welds are stress concentrators
   
4. **Elevation / Slope**
   - Low points accumulate water
   
5. **Clock Position (6 o'clock)**
   - Bottom of pipe is highest stress

### Prediction Interpretation

| Probability | Risk Level | Action |
|------------|-----------|---------|
| **>0.9** | Critical | Immediate inspection required |
| **0.7-0.9** | High | Priority inspection next cycle |
| **0.5-0.7** | Medium | Standard monitoring |
| **<0.5** | Low | Regular inspection schedule |

---

## 🔧 Customization & Tuning

### Adjust Model Parameters

Edit `train.py`:

```python
# More conservative (fewer false positives)
rf_model, rf_metrics = train_model(
    model_type='random_forest',
    n_estimators=300,      # More trees
    max_depth=10,          # Shallower trees
    min_samples_split=50,  # More samples required
    class_weight='balanced'
)

# More aggressive (catch more corrosion)
rf_model, rf_metrics = train_model(
    model_type='random_forest',
    n_estimators=200,
    max_depth=20,          # Deeper trees
    min_samples_split=10,  # Fewer samples required
    class_weight='balanced'
)
```

### Change Prediction Grid Resolution

Edit `predict.py`:

```python
# Predict every 2 feet (more detailed, slower)
grid_points = np.arange(min_dist, max_dist, 2.0)

# Predict every 10 feet (faster, less detail)
grid_points = np.arange(min_dist, max_dist, 10.0)
```

### Add Custom Features

Edit `feature_engineering.py`:

```python
def engineer_features(df, existing_anomalies):
    # ... existing code ...
    
    # Add your custom feature
    result['my_custom_feature'] = (
        result['wall_thickness'] * result['elevation']
    )
    
    return result

def select_model_features(df):
    core_features = [
        'wall_thickness',
        'my_custom_feature',  # Add here
        # ... existing features ...
    ]
```

---

## ⚡ Quick Start (One Command)

Run everything at once:

```bash
cd backend/src/ml
python example_workflow.py
```

This runs all 3 steps automatically:
1. ✓ Alignment pipeline
2. ✓ Model training
3. ✓ Predictions

Takes ~5-15 minutes depending on data size.

---

## 🐛 Common Issues & Solutions

### Issue: "Could not find new_anomalies.csv"

**Solution:** Run the alignment pipeline first:
```bash
python src/main.py
```

### Issue: Low model performance (ROC AUC < 0.7)

**Possible causes:**
- Not enough new anomalies (need >100)
- Features have too many missing values
- Model is underfitting

**Solutions:**
- Check data quality and completeness
- Increase `max_depth` parameter
- Add more relevant features
- Try gradient boosting instead

### Issue: "sklearn not installed"

**Solution:**
```bash
pip install scikit-learn matplotlib seaborn
```

### Issue: All predictions are the same

**Possible causes:**
- Model is underfitting
- Features are not informative
- Class imbalance too severe

**Solutions:**
- Increase model complexity (depth, trees)
- Check feature engineering output
- Adjust `class_weight` parameter
- Try different `negative_sample_ratio`

---

## 📈 Improving Model Performance

### 1. Get More Training Data

**Best approach:**
- Wait for next ILI run
- Compare with previous runs
- Retrain with new period

### 2. Add Domain Knowledge

**Feature engineering ideas:**
- Coating type/age (if available)
- Soil resistivity data
- Cathodic protection readings
- Operating pressure history
- Product type (crude, gas, etc.)

### 3. Hyperparameter Tuning

Use cross-validation to find best parameters:

```python
from sklearn.model_selection import GridSearchCV

param_grid = {
    'n_estimators': [100, 200, 300],
    'max_depth': [10, 15, 20],
    'min_samples_split': [10, 20, 50]
}

grid_search = GridSearchCV(
    RandomForestClassifier(class_weight='balanced'),
    param_grid,
    cv=5,
    scoring='roc_auc'
)

grid_search.fit(X_train, y_train)
best_params = grid_search.best_params_
```

### 4. Ensemble Multiple Models

Combine predictions from multiple models:

```python
# Average predictions from RF and GB
rf_proba = rf_model.predict_proba(X)[:, 1]
gb_proba = gb_model.predict_proba(X)[:, 1]
ensemble_proba = (rf_proba + gb_proba) / 2
```

---

## 🎓 Next Steps

1. **Review predictions** - Check high-risk locations
2. **Validate in field** - Compare with actual findings
3. **Update model** - Retrain with new inspection data
4. **Integrate** - Use predictions in maintenance planning
5. **Monitor** - Track model accuracy over time

---

## 📚 Additional Resources

- **Scikit-learn User Guide**: https://scikit-learn.org/stable/user_guide.html
- **Random Forests**: https://scikit-learn.org/stable/modules/ensemble.html#forest
- **Model Evaluation**: https://scikit-learn.org/stable/modules/model_evaluation.html

---

## 📞 Support

For questions or issues:
1. Check `backend/src/ml/README.md`
2. Review error messages carefully
3. Ensure data files are in correct format
4. Verify all dependencies are installed

---

**Happy Training! 🚀**
