# Skin Cancer

● **Brief Description:** This folder contains experiments for skin cancer prediction using exploratory analysis, image-based baselines, and transfer-learning workflows.

● **Project Objective:** Build and compare skin cancer classification approaches using available tabular and image data.

● **How the Files Are Organized:**
- `EDA.ipynb`: Exploratory data analysis.
- `Zero Model Img.ipynb`: Baseline image model workflow.
- `Zero Model Img + tabular.ipynb`: Combined image + tabular experiment.
- `TLM.ipynb`: Transfer-learning modeling workflow.
- `skin_df_eda.xlsx`: Dataset/export used in analysis.
- `requirements.txt`: Dependencies used by the project.

● **Dataset Used:** `skin_df_eda.xlsx` generated and external image data referenced by notebooks.

● **Technologies Used:** Python, Jupyter Notebook, Pandas, NumPy, TensorFlow/Keras, OpenCV, Pillow, Scikit-learn, KaggleHub.

● **Key Results:** Multiple experimental pipelines (baseline, multimodal, and transfer learning) are documented in the notebooks.

## Model Comparison (Notebook Results)

### Transfer-Learning Variants (`TLM.ipynb`)

| Model | Test Loss | Test Accuracy | Test Precision | Test Recall |
| --- | ---: | ---: | ---: | ---: |
| Baseline Transfer (MobileNetV2 frozen) | 0.3958 | 0.8207 | 0.5556 | 0.4266 |
| Advanced Transfer (fine-tuned) | 0.3348 | 0.8548 | 0.6959 | 0.4608 |
| Imbalance-Aware Transfer (class-weighted) | 0.4064 | 0.8107 | 0.5114 | 0.7679 |

### Baseline CNN vs Multimodal CNN

| Model | Test Loss | Test AUC | Test Recall | Source Notebook |
| --- | ---: | ---: | ---: | --- |
| Image-Only CNN Baseline | 0.4492 | 0.8582 | 0.8107 | `Zero Model Img.ipynb` |
| Image + Tabular Multimodal CNN | 0.3117 | 0.9078 | 0.6931 | `Zero Model Img + tabular.ipynb` |

### Interpretation

- In transfer learning, the **advanced fine-tuned model** gives the best accuracy and precision.
- The **imbalance-aware model** substantially improves recall, which is useful when sensitivity to malignant cases is prioritized.
- The **multimodal CNN** improves AUC over the image-only baseline, indicating stronger ranking/discrimination performance.
- Metric priorities should be selected by use case (for example: maximize recall for screening sensitivity vs maximize precision to reduce false positives).
