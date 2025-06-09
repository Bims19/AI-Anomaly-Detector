import React, { useState } from 'react';
import AnomalyPanel from '../components/AnomalyPanel';
import SchedulePanel from '../components/SchedulePanel';
import LogsPanel from '../components/LogsPanel';

const Dashboard = ({ onLogout }) => {
  const [tab, setTab] = useState('anomaly');

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AI Revenue Admin System</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onLogout}>Logout</button>
      </div>
      <div className="flex gap-4 mb-4">
        {['anomaly', 'schedule', 'logs'].map((t) => (
          <button key={t} className={`px-4 py-2 rounded ${tab === t ? 'bg-blue-600 text-white' : 'bg-white border'}`} onClick={() => setTab(t)}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>
      {tab === 'anomaly' && <AnomalyPanel />}
      {tab === 'schedule' && <SchedulePanel />}
      {tab === 'logs' && <LogsPanel />}
    </div>
  );
};

export default Dashboard;
