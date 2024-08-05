import React from 'react';
import { Link } from 'react-router-dom';
import sinal from '../assets/Cellular Signal.png';
import wifi from '../assets/Wifi.png';
import bateria from '../assets/Battery.png';
import check from "../assets/Aimação.png";
import back from '../assets/backright.png';
import "../styles/CadastroCheck.css";

const CadastroCheck: React.FC = () => {
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
            <img src={check} className="check" alt="check" />
            <h1>Parabéns, você conseguiu!</h1>
            <p>Bem-vindo ao time de usuários e colaboradores Elektro. </p>
            <div className='back-button2'>
              <Link to="/main">
                <img src={back} alt="back" />
              </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default CadastroCheck;
