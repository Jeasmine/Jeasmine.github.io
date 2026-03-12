# CX Classifier

● **Brief Description:** This folder contains a customer-experience text classification project with exploratory analysis and model training notebooks.

● **Project Objective:** Build and evaluate models to classify conversational customer data into target labels.

● **How the Files Are Organized:**
- `EDA.ipynb`: Exploratory data analysis.
- `Model.ipynb`: Modeling and training workflow.
- `requirements.txt`: Dependencies used by the project.
- `claimstruct_multitable_v2/`: Base multitable dataset snapshot.
- `claimstruct_multitable_v2_for_training_20260312_004847/`: Training-oriented dataset snapshot.
- `.hf_keras_presets/`: Local cached transformer preset files.

● **Technologies Used:** Python, Jupyter Notebook, Pandas, NumPy, Scikit-learn, TensorFlow/Keras, Transformers, Keras Hub, PyTorch.

● **Key Results:** The notebooks provide EDA artifacts and model training/evaluation outputs for conversational label prediction.

## Task Performance Comparison (Model.ipynb)

This project trains a single multitask Transformer model with two prediction objectives: conversation-level **Intent Classification** and token-level **NER**. The table below summarizes the main test metrics reported in `Model.ipynb`.

| Task | Accuracy | Macro F1 | Weighted F1 | Notes |
| --- | ---: | ---: | ---: | --- |
| Intent Classification | 0.9475 | 0.9274 | 0.9449 | Strong and balanced multi-class performance across intents. |
| NER (token-level BIO) | 0.99 | 0.35 | 0.99 | High overall token accuracy, but low macro F1 due to class imbalance (`O` dominance). |

### Interpretation

- The model performs strongly on **intent prediction**, with high overall and macro-level quality.
- For **NER**, weighted metrics are high, but macro F1 highlights weaker performance on rare entity classes.
- The metric gap is consistent with token-label imbalance and indicates that future work should prioritize minority-entity recall.
