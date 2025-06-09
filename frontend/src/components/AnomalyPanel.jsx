import React, { useState } from 'react';
import axios from 'axios';

const AnomalyPanel = () => {
  const [results, setResults] = useState([]);
  
  const testData = [
    { amount: 1000, transactions: 10 },
    { amount: 8000, transactions: 1 },
    { amount: 900, transactions: 5 }
  ];

  const detect = async () => {
    const res = await axios.post('http://localhost:5000/api/anomaly/detect', testData);
    setResults(res.data.referrals);
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">🔍 Anomaly Detection</h2>
      <button onClick={detect} className="bg-green-600 text-white px-4 py-2 rounded">Run Detection</button>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
};

export default AnomalyPanel;
