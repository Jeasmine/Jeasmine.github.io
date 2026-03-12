# Transformer-Based Customer Service Conversation Classifier

## Overview
This project automates the classification of customer service conversations in a banking context using a multitask Transformer model. The solution converts unstructured complaint text into structured outputs that support faster operations and more consistent service workflows.

## Problem
Customer service conversations are frequently classified manually, which introduces:

- High operational costs
- Inconsistent classification quality
- Limited scalability
- Slower routing to specialized teams

The objective is to automate complaint understanding and information extraction for routing, analytics, and traceability.

## Approach
A multitask Transformer-based architecture was implemented with a pretrained Spanish BERT encoder:

- `bert-base-spanish-wwm-cased`

The model performs two tasks simultaneously:

1. Intent classification
2. Named Entity Recognition (NER)

This multitask setup allows the system to classify the conversation and extract structured entities in a single pipeline.

## Performance

### Intent Classification

- Accuracy: **98%**
- Weighted F1 Score: **0.99**
- Macro F1 Score: **0.97**

### Named Entity Recognition (NER)

- Accuracy: **99%**
- Weighted F1 Score: **0.99**
- Macro F1 Score: **0.36**

## Outcome
The system successfully transforms unstructured customer conversations into structured information that can be used for:

- Automated routing
- Operational analytics
- End-to-end traceability
- Improved service efficiency

## Technologies

- Python
- Transformers
- BERT
- HuggingFace
- NLP pipelines

## Repository Structure

- `EDA.ipynb`: Exploratory data analysis
- `Model.ipynb`: Multitask Transformer training and evaluation
- `requirements.txt`: Project dependencies

## Notes
This project is designed as a practical foundation for production-oriented conversational AI workflows in regulated service environments.
