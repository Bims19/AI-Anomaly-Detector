import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LogsPanel = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reports/logs').then(res => setLogs(res.data));
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">📜 Logs</h2>
      <ul className="text-sm list-disc ml-6">
        {logs.map((log, idx) => <li key={idx}>{log}</li>)}
      </ul>
    </div>
  );
};

export default LogsPanel;
