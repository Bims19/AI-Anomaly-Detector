# routes/anomaly.py
from flask import Blueprint, request, jsonify
from sklearn.ensemble import IsolationForest
import pandas as pd
import numpy as np

anomaly_bp = Blueprint('anomaly', __name__)
model = IsolationForest(contamination=0.05)

# Dummy training data
training_data = pd.DataFrame({
    'amount': np.random.normal(1000, 250, 1000),
    'transactions': np.random.randint(1, 100, 1000)
})
model.fit(training_data)

@anomaly_bp.route('/detect', methods=['POST'])
def detect():
    data = request.get_json()
    df = pd.DataFrame(data)
    preds = model.predict(df)
    df['anomaly'] = preds
    referrals = df[df['anomaly'] == -1].to_dict(orient='records')
    return jsonify({'referrals': referrals, 'all': df.to_dict(orient='records')})
