# Skin Cancer Detection Using Deep Learning

## Overview
This project focuses on early skin cancer detection from dermoscopic images using deep learning. It is designed as a high-sensitivity AI screening workflow for malignant vs benign lesion classification.

## Problem
Early detection of malignant skin lesions is critical for patient outcomes. Manual diagnosis from images can be time-consuming and highly dependent on specialist availability.

The project goal is to build an AI system that detects whether a lesion is malignant or benign from dermoscopic imagery.

## Approach
Two model families were evaluated:

- Transfer Learning Models (TLM)
- Convolutional Neural Networks (CNN)

After experimentation, CNN-based approaches provided the strongest performance profile for this use case.

## Results
The model achieved strong detection performance:

- Approximately **98%** of malignant (positive) cases are correctly detected
- About **37%** of benign cases are misclassified
- Around **2%** of malignant cases are misclassified

The system is intentionally optimized for **high sensitivity**, prioritizing malignant-case detection because false negatives represent the highest risk in medical diagnosis.

## Key Takeaway
Prevention-oriented model behavior is preferable in medical contexts: missing a malignant case is significantly more dangerous than producing a false positive.

## Technologies

- Python
- TensorFlow
- Keras
- CNN architectures
- Image preprocessing

## Repository Structure

- `EDA.ipynb`: Exploratory analysis and dataset understanding
- `Zero Model Img.ipynb`: Image-based baseline experimentation
- `Zero Model Img + tabular.ipynb`: Multimodal experimentation
- `TLM.ipynb`: Transfer-learning experimentation
- `requirements.txt`: Project dependencies

## Notes
This project demonstrates how metric priorities must align with domain risk: in medical AI, sensitivity is often the primary objective.
