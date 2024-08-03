import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../components/App';
import MainPage from '../components/MainPage';
import Options from '../components/Options';
import Cart from '../components/Cart';
import LoginError from '../components/LoginError';
import Search from "../components/Search";  

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/options" element={<Options />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginerror" element={<LoginError />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
