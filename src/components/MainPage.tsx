import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import sinal from '../assets/Cellular Signal.png';
import wifi from '../assets/Wifi.png';
import bateria from '../assets/Battery.png';
import sidebar from '../assets/Ícones.png';
import cart from '../assets/Frame 71.png';
import logo from '../assets/Logo Elektro.png';
import image1 from '../assets/Cutscene.png';
import celulares from '../assets/celulares.png';
import notebooks from '../assets/notebooks.png';
import tablets from '../assets/tablets.png';
import perifericos from '../assets/perifericos.png';
import tvs from '../assets/tvs.png';
import acessorios from '../assets/acessorios.png';
import pcs from '../assets/pcs.png';
import smartwatches from '../assets/smartwatches.png';
import homeIcon from '../assets/homeIcon.png';  
import chatIcon from '../assets/chatIcon.png';  
import notificationsIcon from '../assets/notificationsIcon.png';
import profileIcon from '../assets/profileIcon.png';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';  
import product3 from '../assets/product3.png';  
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import tiktok from '../assets/tiktok.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import '../styles/main.css';

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
          <Link to="/options">
            <img src={sidebar} className="sidebar" alt="sidebar" />
          </Link>
        </div>
        <div className='searchbar'>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Encontrar na Elektro" />
        </div>
        <div className='cart'>
          <Link to="/cart">
            <img src={cart} className="cart" alt="cart" />
          </Link>
        </div>
      </div>
      <div className='mainpage'>
        <div className='welcome'>
          <img src={logo} className='welcome-logo' alt="logo" />
          <p className='welcome-text'>Bem-vindo à Elektro!</p>
        </div>
        <div className='main-image'>
          <img src={image1} alt="Main content" />
        </div>
        <hr className='divider' />
        <div className='categories'>
          <h2>Categorias Elektro</h2>
          <div className='categories-grid'>
            <div className='category'>
              <img src={celulares} alt="Celulares" />
              <p>Celulares</p>
            </div>
            <div className='category'>
              <img src={notebooks} alt="Notebooks" />
              <p>Notebooks</p>
            </div>
            <div className='category'>
              <img src={tablets} alt="Tablets" />
              <p>Tablets</p>
            </div>
            <div className='category'>
              <img src={perifericos} alt="Periféricos" />
              <p>Periféricos</p>
            </div>
            <div className='category'>
              <img src={tvs} alt="TVs" />
              <p>TVs</p>
            </div>
            <div className='category'>
              <img src={acessorios} alt="Acessórios" />
              <p>Acessórios</p>
            </div>
            <div className='category'>
              <img src={pcs} alt="PCs" />
              <p>PCs</p>
            </div>
            <div className='category'>
              <img src={smartwatches} alt="Smartwatches" />
              <p>Smartwatches</p>
            </div>
            <div className="navbar">
              <Link to="/home">
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
          </div>  
          </div>
        </div>
        <hr className='divider' />
        <div className='for-you'>
          <h2>Para você</h2>
          <div className='carousel'>
            <div className='carousel-item'>
              <img src={product1} alt="Produto 1" />
              <p>Smatphone<br/>R$800,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
            </div>
            <div className='carousel-item'>
              <img src={product2} alt="Produto 2" />
              <p>Capa de Celular<br/>R$20,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
            </div>
            
          </div>
          <hr className='divider' />
        </div>
        <div className='products'>
          <h2>Produtos em destaque</h2>
          <div className='products-grid'>
            <div className='product'>
              <img src={product3} alt="Smart TV" />
              <p>Smart TV<br/>R$1.400,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
            </div>
            <div className='product'>
              <img src={product4} alt="Monitor" />
              <p>Monitor<br/>R$750,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
            </div>
          </div>
          <hr className='divider' />
          <h2>Mais vendidos</h2>
          <div className='products-grid'>
            <div className='product'>
              <img src={product5} alt="Smartphone" />
              <p>Smartphone<br/>R$3.200,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
            </div>
            <div className='product'>
              <img src={product6} alt="Smartwatch" />
              <p>Smartwatch<br/>R$900,00 <FontAwesomeIcon icon={faHeart} className="heart-icon" /></p>
            </div>
          </div>
        </div>
        <footer className='social-media'>
          <h2>Siga-nos nas redes sociais!</h2>
          <div className='social-icons'>
            <img src={facebook}alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={tiktok} alt="TikTok" />
            <img src={twitter} alt="Twitter" />
            <img src={linkedin}alt="LinkedIn" />
          </div>
        </footer>
      </div>
      
    </>
  );
};

export default MainPage;
