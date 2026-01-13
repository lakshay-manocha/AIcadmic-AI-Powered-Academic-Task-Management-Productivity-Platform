from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import re
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics.pairwise import cosine_similarity
# Download stopwords once
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
import nltk
nltk.download('stopwords')
# Download NLTK resources
nltk.download('stopwords')

# ----------------------------------------
#  TASK RECOMMENDER SYSTEM
# ----------------------------------------

# Load and prepare task dataset
task_data = pd.read_csv('Dataset.csv')
selected_features = ['task_name', 'category', 'tools_required', 'priority', 'deadline']
combined_features = task_data[selected_features].fillna('').agg(' '.join, axis=1)

# Vectorize task data
task_vectorizer = TfidfVectorizer()
task_features = task_vectorizer.fit_transform(combined_features)
task_similarity = cosine_similarity(task_features)

app = Flask(__name__)
CORS(app) 

@app.route('/recommend', methods=['POST'])
def recommend_task():
    data = request.json
    task_input = data.get('task_name')

    if not task_input:
        return jsonify({'error': 'Task name is required'}), 400

    task_list = task_data['task_name'].tolist()
    match = difflib.get_close_matches(task_input, task_list)

    if not match:
        return jsonify({'error': 'No matching task found'}), 404

    matched_task = match[0]
    task_index = task_data[task_data.task_name == matched_task]['task_id'].values[0]
    similarity_scores = list(enumerate(task_similarity[task_index]))
    sorted_tasks = sorted(similarity_scores, key=lambda x: x[1], reverse=True)

    recommended_tasks = []
    seen = set()

    for task in sorted_tasks:
        idx = task[0]
        task_name = task_data.iloc[idx]['task_name']
        if task_name != matched_task and task_name not in seen:
            recommended_tasks.append(task_name)
            seen.add(task_name)
        if len(recommended_tasks) == 20:
            break

    return jsonify({'recommended_tasks': recommended_tasks})


# ----------------------------------------
#  MOOD PREDICTION MODEL
# ----------------------------------------

# Load and prepare mood dataset
mood_data = pd.read_csv('mood_dataset.csv')
mood_data.dropna(inplace=True)

# Preprocessing function
stemmer = PorterStemmer()
def preprocess(text):
    text = re.sub('[^a-zA-Z]', ' ', text)
    text = text.lower().split()
    text = [stemmer.stem(word) for word in text if word not in stopwords.words('english')]
    return ' '.join(text)

mood_data['processed_text'] = mood_data['text'].apply(preprocess)

# Vectorization and training
mood_vectorizer = TfidfVectorizer()
X = mood_vectorizer.fit_transform(mood_data['processed_text'])
Y = mood_data['mood']

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, stratify=Y, test_size=0.2, random_state=2)

mood_model = LogisticRegression(max_iter=200)
mood_model.fit(X_train, Y_train)

@app.route('/predict_mood', methods=['POST'])
def predict_mood():
    data = request.json
    text_input = data.get('text')

    if not text_input:
        return jsonify({'error': 'Text input is required'}), 400

    processed = preprocess(text_input)
    vectorized = mood_vectorizer.transform([processed])
    prediction = mood_model.predict(vectorized)[0]

    mood_messages = {
        "happy": "You're feeling happy! celebrate it 😊",
        "sad": "You're feeling sad. Talk To Someone Trusted 💙",
        "angry": "You're angry. Try to take a deep breath cool down and drink some water 😤",
        "excited": "You're excited! That's awesome! Capture Your Moment🎉",
        "neutral": "You're feeling neutral Do Low Energy Productivity Things🌿"
    }

    return jsonify({
        'predicted_mood': prediction,
        'message': mood_messages.get(prediction.lower(), f"You are feeling: {prediction}")
    })


# ----------------------------------------
#  Start the Flask server
# ----------------------------------------
if __name__ == '__main__':
    app.run(debug=True)
