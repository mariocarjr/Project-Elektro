import React from 'react';
import { Link } from 'react-router-dom';
import sinal from '../assets/Cellular Signal.png';
import wifi from '../assets/Wifi.png';
import bateria from '../assets/Battery.png';
import homeIcon from '../assets/homeIcon.png';  
import chatIcon from '../assets/chatIcon.png';  
import notificationsIcon from '../assets/notificationsIcon.png';
import profileIcon from '../assets/profileIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faFilter } from '@fortawesome/free-solid-svg-icons';
import menuIcon from "../assets/options_search.png";
import userIcon from "../assets/user_search.png";
import celulares from '../assets/celular_search.png';
import teclados from '../assets/teclado_search.png';
import monitores from '../assets/monitor_search.png';
import "../styles/Search.css"; 

const Search: React.FC = () => {
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
        <Link to="/options" className="options">
        <img src={menuIcon} alt="Menu" className="nav-icon" />
        </Link>
        <span>Pesquisa</span>
        <Link to="/loginerror" className="loginerror">
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
        <div className="search-history">
          <div className="history-item">
            <Link to="/producterror" className="history-link">
              <span>Monitor</span>
            </Link>
            <FontAwesomeIcon icon={faTimes} className="delete-icon" />
          </div>
          <div className="history-item">
            <Link to="/smart-tv" className="history-link">
              <span>Smart TV</span>
            </Link>
            <FontAwesomeIcon icon={faTimes} className="delete-icon" />
          </div>
          <div className="history-item">
            <Link to="/producterror" className="history-link">
              <span>Mousepad</span>
            </Link>
            <FontAwesomeIcon icon={faTimes} className="delete-icon" />
          </div>
          <hr className="divider" />
        </div>
        <div className="history">
          <button className="clear-history">Apagar Histórico de Pesquisa</button>
        </div>
        <div className="search-suggestions">
          <h2>Sugestão de busca</h2>
          <div className="suggestion-item">
            <img src={celulares} alt="Celulares" />
            <Link to="/celulares" className="history-link">
              <span>Celulares</span>
            </Link>
          </div>
          <div className="suggestion-item">
            <img src={teclados} alt="Teclados" />
            <Link to="/producterror" className="history-link">
              <span>Teclados</span>
            </Link>
          </div>
          <div className="suggestion-item">
            <img src={monitores} alt="Monitores" />
            <Link to="/producterror" className="history-link">
              <span>Monitores</span>
            </Link>
          </div>
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

export default Search;
