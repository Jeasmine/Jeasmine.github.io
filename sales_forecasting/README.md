# Sales Forecasting

● **Brief Description:** This folder contains time-series and machine learning experiments for sales forecasting using both boosting and deep learning approaches.

● **Project Objective:** Forecast sales behavior across product categories and compare model families.

● **How the Files Are Organized:**
- `EDA.ipynb`: Exploratory data analysis.
- `XGBoost_and_CatBoost.ipynb`: Gradient boosting modeling workflow.
- `LSTM.ipynb`: Sequence/deep learning workflow.
- `datos/`: Source and processed Excel datasets.
- `catboost_info/`: CatBoost training logs and artifacts.
- `model_*.keras`: Saved trained models by category.
- `requirements.txt`: Dependencies used by the project.

● **Technologies Used:** Python, Jupyter Notebook, Pandas, NumPy, Scikit-learn, TensorFlow/Keras, XGBoost, CatBoost, Statsmodels, Plotly.

● **Key Results:** Multiple category-specific trained model artifacts (`model_*.keras`) and notebook-based forecasting experiments are available after running.

## Model Comparison (Notebook Results)

The following summary compares the main reported results from the modeling notebooks:

| Model | MAE | RMSE | R² | Notes |
| --- | ---: | ---: | ---: | --- |
| XGBoost (tuned) | 6.97 | 12.70 | 0.8449 | Best MAE among boosting variants (`XGBoost_and_CatBoost.ipynb`). |
| CatBoost (baseline) | 7.02 | 12.44 | 0.8513 | Best R² and RMSE among boosting variants (`XGBoost_and_CatBoost.ipynb`). |
| LSTM (category baseline run) | 25.75 | 33.47 | 0.55 | Reported from the LSTM reference-category experiment (`LSTM.ipynb`). |

### Interpretation

- In this project setup, **tree-based boosting models (XGBoost/CatBoost)** outperform the reported **LSTM baseline** on the shared error metrics.
- **XGBoost** provides the lowest absolute error, while **CatBoost** shows the strongest explained variance.
- The reported LSTM score corresponds to a category-focused baseline workflow; further category-specific tuning and richer exogenous features are needed for a stronger deep-learning comparison.
