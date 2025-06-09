import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SchedulePanel = () => {
  const [email, setEmail] = useState('');
  const [interval, setInterval] = useState('daily');
  const [data, setData] = useState([]);

  const fetchSchedules = async () => {
    const res = await axios.get('http://localhost:5000/api/reports/schedule');
    setData(res.data);
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const schedule = async () => {
    await axios.post('http://localhost:5000/api/reports/schedule', { email, interval });
    fetchSchedules();
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">📩 Schedule Reports</h2>
      <input className="border p-2 rounded w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <select className="border p-2 rounded w-full" value={interval} onChange={e => setInterval(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
      <button onClick={schedule} className="bg-blue-600 text-white px-4 py-2 rounded">Schedule</button>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SchedulePanel;
