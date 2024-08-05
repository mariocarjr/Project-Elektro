import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'; 
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
import userphoto from '../assets/userphoto.png'; 
import '../styles/CelularReview.css';

const CelularReview: React.FC = () => {
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
        <span>Produto</span>
        <img src={userIcon} alt="User" className="nav-icon" />
      </div>

      <div className="product-card">
        <div className="product-image-container">
          <img src={product1} alt="Product" className="product-image" />
          <div className="product-actions">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          </div>
        </div>
        <div className="product-info">
          <div className="left-section">
            <h1>Celular</h1>
            <p>R$ 800,00</p>
          </div>
          <div className="right-section">
            <img src={userphoto} alt="User" className="user-photo2" />
            <p>João Ribeiro</p>
            <div className="stars">
              {[...Array(3)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
              ))}
              <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon" />
              <FontAwesomeIcon icon={faStarEmpty} className="star-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="product-details">
        <h2>Características do Produto</h2>
        <ul>
          <li>Tela Super Retina XDR de 6,1”</li>
          <li>Chip biônico A15 p/ desempenho + rápido</li>
          <li>Sistema avançado de câmera dupla</li>
          <li>Câmera frontal TrueDepth de 12 MP, com modo noturno e gravação 4K Dolby Vision</li>
        </ul>
      </div>
      <div className='button4'>
      <button className="buy-button2">Comprar</button>
      </div>

      <footer className="footer2">
        <Link to="/main">
          <img src={homeIcon} alt="Home" />
          <p>Home</p>
        </Link>
        <Link to="/chat">
          <img src={chatIcon} alt="Chat" />
          <p>Chat</p>
        </Link>
        <Link to="/notifications">
          <img src={notificationsIcon} alt="Notifications" />
          <p>Avisos</p>
        </Link>
        <Link to="/profile">
          <img src={profileIcon} alt="Profile" />
          <p>Perfil</p>
        </Link>
      </footer>
    </>
  );
};

export default CelularReview;
