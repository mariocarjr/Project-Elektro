import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../components/App';
import MainPage from '../components/MainPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
