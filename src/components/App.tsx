import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo Elektro.png';
import sinal from '../assets/Cellular Signal.png';
import wifi from '../assets/Wifi.png';
import bateria from '../assets/Battery.png';
import "../styles/App.css";

const App: React.FC = () => {
  return (
    <>
      <header className="container-header">
        <div className="header-left">
          <a href="#hora">9:41</a>
        </div>
        <div className="header-right">
          <img src={sinal} alt="sinal" />
          <img src={wifi} alt="wifi" />
          <img src={bateria} alt="bateria" />
        </div>
      </header>
      <div className="mainscreen">
        <div className="main">
          <Link to="/main">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <h4>Elektro</h4>
        </div>
      </div>
    </>
  );
};

export default App;
