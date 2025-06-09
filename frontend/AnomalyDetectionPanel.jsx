import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const AnomalyDetectionPanel = () => {
  const [loading, setLoading] = useState(false);
  const [anomalies, setAnomalies] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [error, setError] = useState(null);

  const runDetection = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('/api/reports/detect-anomalies');
      setAnomalies(res.data.anomalies || []);
      setReferrals(res.data.investigationReferrals || []);
      toast.success('Anomaly detection completed');
    } catch (e) {
      setError('Failed to detect anomalies');
      toast.error('Error running anomaly detection');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold">🤖 AI Anomaly Detection</h2>
      <Button onClick={runDetection} disabled={loading}>
        {loading ? 'Detecting...' : 'Run Anomaly Detection'}
      </Button>
      {error && <p className="text-red-600">{error}</p>}

      <div>
        <h3 className="font-semibold mt-4">Flagged Anomalies ({anomalies.length})</h3>
        {anomalies.length === 0 ? (
          <p>No anomalies detected yet.</p>
        ) : (
          <ul className="list-disc pl-5 max-h-48 overflow-auto">
            {anomalies.map((tx) => (
              <li key={tx.id}>
                ID: {tx.id}, User: {tx.user}, Amount: ${tx.amount.toFixed(2)}, Date: {tx.date}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3 className="font-semibold mt-4">Investigation Referrals ({referrals.length})</h3>
        {referrals.length === 0 ? (
          <p>No referrals created yet.</p>
        ) : (
          <ul className="list-disc pl-5 max-h-48 overflow-auto">
            {referrals.map((ref, idx) => (
              <li key={idx}>
                Transaction ID: {ref.transactionId}, Reason: {ref.reason}, Flagged At: {new Date(ref.flaggedAt).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AnomalyDetectionPanel;
