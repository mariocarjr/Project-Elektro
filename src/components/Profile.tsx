import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/homeIcon.png';  
import chatIcon from '../assets/chatIcon.png';  
import notificationsIcon from '../assets/notificationsIcon.png';
import profileIcon from '../assets/profileIcon.png';
import userPlaceholder from '../assets/lockuser.png';
import logo from '../assets/Logo Elektro.png';
import settingsIcon from '../assets/settingsIcon.png';
import sinal from '../assets/Cellular Signal.png';
import wifi from '../assets/Wifi.png';
import bateria from '../assets/Battery.png';
import "../styles/Profile.css";

const Profile: React.FC = () => {
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
      <div className="profile-header">
        <Link to="/main">
        <img src={logo} alt="Logo" className="logo4" />
        </Link>
        <Link to="/loginerror">
        <img src={settingsIcon} alt="Settings" className="settings-icon" />
        </Link>
      </div>
      <div className="user-profile">
        <img src={userPlaceholder} alt="User" className="user-photo" />
        <div className="button-container3">
          <Link to="/login" className="button">Entrar</Link>
          <Link to="/cadastro" className="button">Cadastrar</Link>
        </div>
        <div className="options">
          <Link to="/loginerror" className="option">
            <p>Meus dados</p>
          </Link>
          <Link to="/loginerror" className="option">
            <p>Meus produtos</p>
          </Link>
          <Link to="/loginerror" className="option">
            <p>Meus Favoritos</p>
          </Link>
          <Link to="/loginerror" className="option">
            <p>Meu carrinho</p>
          </Link>
          <Link to="/loginerror" className="option">
            <p>Meus cupons</p>
          </Link>
          <Link to="/loginerror" className="option">
            <p>Meus chats</p>
          </Link>
        </div>
      </div>
      <footer className="footer">
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
        <Link to="/profile">
          <img src={profileIcon} alt="Profile" />
          <p>Perfil</p>
        </Link>
      </footer>
    </>
  );
};

export default Profile;
