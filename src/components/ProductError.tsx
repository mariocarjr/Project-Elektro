import React from 'react';
import { Link } from 'react-router-dom';
import sinal from '../assets/Cellular Signal.png';
import wifi from '../assets/Wifi.png';
import bateria from '../assets/Battery.png';
import error from '../assets/Error.png';
import homeIcon from '../assets/homeIcon.png';  
import chatIcon from '../assets/chatIcon.png';  
import notificationsIcon from '../assets/notificationsIcon.png';
import profileIcon from '../assets/profileIcon.png';
import back from '../assets/back.png';
import "../styles/ProductError.css";

const ProductError: React.FC = () => {
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
      <div className="main-screen">
        <div className="main">
            <h1>Opsss...</h1>
            <img src={error} className="error" alt="error" />
            <p>Infelizmente, parece que não encontramos o produto desejado.</p>
            <div className='back-button3'>
              <Link to="/main">
                <img src={back} alt="back" />
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
              <Link to="/loginerror">
                <img src={profileIcon} alt="Profile" />
                <p>Perfil</p>
              </Link>
          </footer> 
      </div>
    </>
  );
};

export default ProductError;
