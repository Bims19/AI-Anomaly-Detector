import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return token ? (
    <Dashboard onLogout={() => {
      localStorage.removeItem('token');
      setToken(null);
    }} />
  ) : (
    <LoginPage onLogin={(tk) => {
      localStorage.setItem('token', tk);
      setToken(tk);
    }} />
  );
};

export default App;
