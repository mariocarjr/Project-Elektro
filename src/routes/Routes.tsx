import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../components/App';
import MainPage from '../components/MainPage';
import Options from '../components/Options';
import LoginError from '../components/LoginError';
import Search from "../components/Search";  
import TVs from '../components/TVs';
import Celulares from '../components/Celulares';
import CelularReview from '../components/CelularReview';
import ProductError from '../components/ProductError';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/options" element={<Options />} />
        <Route path="/loginerror" element={<LoginError />} />
        <Route path="/search" element={<Search />} />
        <Route path="/smart-tv" element={<TVs />} />
        <Route path="/celulares" element={<Celulares />} />
        <Route path="/celular-review" element={<CelularReview />} />
        <Route path="/producterror" element={<ProductError />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
