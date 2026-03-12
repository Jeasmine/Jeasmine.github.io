# Sales Forecasting with Machine Learning and Deep Learning

## Overview
This project develops demand forecasting models from real brewery sales data in Argentina (2022-2025). It combines exploratory analytics with machine learning and deep learning to support planning and operational decision-making.

## Problem
Retail demand forecasting is complex due to:

- Seasonality
- Variability in consumer behavior
- External influences such as tourism and weather

The project addresses the challenge of producing useful future-demand estimates under high day-to-day variability.

## Goals

- Understand sales behavior
- Identify product groups and purchasing patterns
- Predict future demand

## Approach
The workflow included extensive exploratory data analysis to identify:

- Product groups and categories with higher demand
- Products frequently purchased together
- Seasonal patterns across the year

### Forecasting models evaluated

- CatBoost
- XGBoost
- LSTM

### Training strategy

- **CatBoost and XGBoost** were trained on all product categories simultaneously
- **LSTM** was trained separately per category to assess whether specialized models improved forecasting quality

## Model Performance

The best-performing configurations for the boosting models are summarized below.

| Model    | Best MAE | Best RMSE | Best R | Best R² |
|----------|----------|-----------|--------|--------|
| XGBoost  | 6.96 *(tuned)* | 12.70 *(tuned)* | 0.929 *(tuned)* | 0.8449 *(tuned)* |
| CatBoost | 7.02 *(baseline)* | 12.43 *(baseline)* | 0.9248 *(tuned)* | 0.8513 *(baseline)* |

### Interpretation

- **XGBoost** achieved the lowest **MAE** after hyperparameter tuning, indicating slightly better average prediction accuracy.
- **CatBoost** obtained the best **R²**, suggesting a marginally better ability to explain variance in the data even without extensive tuning.
- Both models performed competitively despite the high variability in daily sales.

These results confirm that **gradient boosting approaches are effective for demand forecasting under noisy retail conditions**.

## Results and Findings
The models achieved reasonable predictive performance despite strong daily variability.

Key findings:

- High-volume categories show larger absolute errors but acceptable relative errors
- CatBoost baseline performed strongly without extensive hyperparameter tuning
- Hyperparameter tuning improved XGBoost but did not surpass CatBoost
- LSTM produced useful category-level forecasts but required careful tuning of lags and sequence windows

Additional insights discovered during analysis:

- Strong seasonal demand patterns
- Product category clusters
- Frequent co-purchases among specific products

These findings provide actionable value for:

- Demand planning
- Inventory optimization
- Promotional strategy

## Technologies

- Python
- Pandas
- Scikit-learn
- XGBoost
- CatBoost
- TensorFlow / Keras (LSTM)
- Time series analysis

## Repository Structure

- `EDA.ipynb`: Exploratory data analysis and business pattern discovery
- `XGBoost_and_CatBoost.ipynb`: Boosting model development and evaluation
- `LSTM.ipynb`: LSTM category-level forecasting experiments
- `requirements.txt`: Project dependencies

## Notes
This project emphasizes both predictive performance and business interpretability, making it suitable for practical forecasting workflows in retail environments.
