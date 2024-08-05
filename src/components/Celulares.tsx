import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faFilter } from '@fortawesome/free-solid-svg-icons';
import sinal from '../assets/Cellular Signal.png';
import wifi from '../assets/Wifi.png';
import bateria from '../assets/Battery.png';
import homeIcon from '../assets/homeIcon.png';
import chatIcon from '../assets/chatIcon.png';
import notificationsIcon from '../assets/notificationsIcon.png';
import profileIcon from '../assets/profileIcon.png';
import menuIcon from "../assets/options_search.png";
import userIcon from "../assets/user_search.png";
import product1 from '../assets/product1.png';
import '../styles/Celular.css';

const Celulares: React.FC = () => {
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
      <div className="nav-bar">
        <img src={menuIcon} alt="Menu" className="nav-icon" />
        <span>Produtos</span>
        <img src={userIcon} alt="User" className="nav-icon" />
      </div>
      <div className="search-page">
        <div className="search-container">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Encontrar na Elektro" />
          </div>
          <button className="filter-button">
            <FontAwesomeIcon icon={faFilter} />
            Filtro
          </button>
        </div>
      </div>
      <div className='products-grid'>
            <div className='product'>
                <Link to="/celular-review" className='celular-link'>  
                <img src={product1} alt="Celular" />
                <p>Celular<br/>R$800,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
                </Link>
            </div>
        </div>
      <footer className="footer2">
        <Link to="/main">
          <img src={homeIcon} alt="Home" />
          <p>Home</p>
        </Link>
        <Link to="/loginerror">
          <img src={chatIcon} alt="Chat" />
          <p>Chat</p>
        </Link>
        <Link to="/loginerror">
          <img src={notificationsIcon} alt="Notifications" />
          <p>Avisos</p>
        </Link>
        <Link to="/loginerror">
          <img src={profileIcon} alt="Profile" />
          <p>Perfil</p>
        </Link>
      </footer>
    </>
  );
};

export default Celulares;
