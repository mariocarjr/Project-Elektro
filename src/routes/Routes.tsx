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
import CadastroPrev from '../components/CadastroPrev';
import Cadastro from '../components/Cadastro';
import CadastroCheck from '../components/CadastroCheck';
import Login from '../components/Login';
import Profile from '../components/Profile';

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
        <Route path="/cadastroprev" element={<CadastroPrev />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastrocheck" element={<CadastroCheck />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
