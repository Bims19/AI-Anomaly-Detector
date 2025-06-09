from flask import Flask, jsonify, request
from flask_cors import CORS
from anomaly_detection import run_isolation_forest
from investigation import create_referral
import datetime

app = Flask(__name__)
CORS(app)

# Dummy transaction data (replace with DB in production)
transactions = [
    {"id": 1, "user": "alice", "amount": 1200.0, "date": "2025-06-01"},
    {"id": 2, "user": "bob", "amount": 15.0, "date": "2025-06-01"},
    {"id": 3, "user": "carol", "amount": 30000.0, "date": "2025-06-02"},
    # ... add more sample transactions
]

# In-memory store for referrals
referrals = []

@app.route('/api/reports/detect-anomalies', methods=['GET'])
def detect_anomalies():
    # Run anomaly detection on transaction amounts
    anomalies = run_isolation_forest(transactions)
    # For each anomaly, create referral if not exists
    for a in anomalies:
        if not any(r['transactionId'] == a['id'] for r in referrals):
            referrals.append({
                "transactionId": a['id'],
                "reason": "Isolation Forest anomaly detected",
                "flaggedAt": datetime.datetime.utcnow().isoformat()
            })
    return jsonify({
        "anomalies": anomalies,
        "investigationReferrals": referrals
    })

if __name__ == '__main__':
    app.run(debug=True)
