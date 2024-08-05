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
import product3 from '../assets/product3.png';
import tv1 from '../assets/tv1.png';
import tv3 from '../assets/tv3.png';
import tv4 from '../assets/tv4.png';
import tv5 from '../assets/tv5.png';
import tv6 from '../assets/tv6.png';
import '../styles/TVs.css';

const TVs: React.FC = () => {
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
        <Link to="/options">
        <img src={menuIcon} alt="Menu" className="nav-icon" />
        </Link>
        <span>Produtos</span>
        <Link to="/loginerror">
        <img src={userIcon} alt="User" className="nav-icon" />
        </Link>
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
              <img src={tv1} alt="Smart TV" />
              <p>TV LG<br/>R$2.000,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
            </div>
            <div className='product'>
              <img src={product3} alt="Smart TV" />
              <p>TV Samsung<br/>R$1.400,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
            </div>
            <div className='product'>
              <img src={tv3} alt="Smart TV" />
              <p>TV TCL<br/>R$1.000,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
            </div>
            <div className='product'>
              <img src={tv4} alt="Smart TV" />
              <p>TV Semp<br/>R$1.200,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
            </div>
            <div className='product'>
              <img src={tv5} alt="Smart TV" />
              <p>TV AOC<br/>R$1.300,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
            </div>
            <div className='product'>
              <img src={tv6} alt="Smart TV" />
              <p>TV Philips<br/>R$1.400,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
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

export default TVs;
