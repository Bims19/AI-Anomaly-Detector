from sklearn.ensemble import IsolationForest
import numpy as np

def run_isolation_forest(transactions):
    # Extract amounts as feature array
    amounts = np.array([[tx['amount']] for tx in transactions])
    clf = IsolationForest(contamination=0.1, random_state=42)
    clf.fit(amounts)
    preds = clf.predict(amounts)
    # -1 means anomaly
    anomalies = []
    for i, pred in enumerate(preds):
        if pred == -1:
            anomalies.append(transactions[i])
    return anomalies
