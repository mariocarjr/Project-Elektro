import React from 'react';
import sinal from '../assets/Cellular Signal.png';
import wifi from '../assets/Wifi.png';
import bateria from '../assets/Battery.png';
import { Link } from 'react-router-dom';
import sidebar from "../assets/Ícones.png";
import cart from "../assets/Frame 71.png";
import "../styles/main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Logo Elektro.png';



const MainPage: React.FC = () => {
  return (
    <>
      <header className="container-header">
        <div className="header-left">
          <a href="hora">9:41</a>
        </div>
        <div className="header-right">
          <img src={sinal} alt="sinal" />
          <img src={wifi} alt="wifi" />
          <img src={bateria} alt="bateria" />
        </div>
      </header>
        <div className="container-searchbar">
            <div className='options'>
              <Link to="/Options">
                <img src={sidebar} className="sidebar" alt="sidebar" />
              </Link>
            </div>
            <div className='searchbar'>
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input type="text" placeholder="Encontrar na Elektro"/>
            </div>
            <div className='cart'>
            <Link to="/Cart">
                <img src={cart} className="cart" alt="cart" />
            </Link>
            </div>  
        </div>
        <div className='top-page'>
          <div className='welcome'>
            <img src={logo} className='welcome-logo' alt="logo" />
            <p className='welcome-text'>Bem-vindo à Elektro!</p>
          </div>
        </div>
    </>
  );
};

export default MainPage;
