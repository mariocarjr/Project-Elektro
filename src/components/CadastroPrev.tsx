import React from 'react';
import { Link } from 'react-router-dom';
import sinal from '../assets/Cellular Signal.png';
import wifi from '../assets/Wifi.png';
import bateria from '../assets/Battery.png';
import backIcon from '../assets/back2.png';
import registerImage from '../assets/cadasimg.png';
import "../styles/CadastroPrev.css";


const CadastroPrev: React.FC = () => {
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
      <div className="container">
        <Link to="/main" className="back-button">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <p>Cadastrar-se</p>
      </div>
      <div className="register-screen">
        <img src={registerImage} className="register-image" alt="Register" />
        <p>Faça parte do nosso time.<br></br> Cadastre-se!</p>
        <Link to="/cadastro" className="register-link">
        <button className="register-button">Cadastre-se!</button>
        </Link>
        <Link to="/login" className="login-link">Já possui cadastro? Faça Login!</Link>
      </div>
    </>
  );
};

export default CadastroPrev;
