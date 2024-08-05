import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../assets/back2.png';
import logo from '../assets/Logo Elektro.png';
import fbIcon from '../assets/fbicon.png';
import googleIcon from '../assets/googleicon.png';
import sinal from '../assets/Cellular Signal.png';
import wifi from '../assets/Wifi.png';
import bateria from '../assets/Battery.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import "../styles/Login.css";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
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
      <div className="container3">
        <Link to="/main" className="back-button">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <h4>Entrar</h4>
      </div>
      <div className="login-screen">
        <img src={logo} className="login-logo" alt="Logo" />
        <div className="login-form">
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input type="email" placeholder="Digite seu..." />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="**********"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="password-toggle"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="forgot-password-link">Esqueci minha senha</div>
          <Link to="/cadastrocheck" className="login">
          <button className="login-button">Entrar</button>
          </Link>
        </div>
        <div className="divider-container">
          <div className="divider"></div>
          <p>ou</p>
          <div className="divider"></div>
        </div>
        <div className="social-login">
          <Link to="/facebook-auth">
            <img src={fbIcon} className="social-icon" alt="Facebook" />
          </Link>
          <Link to="/google-auth">
            <img src={googleIcon} className="social-icon" alt="Google" />
          </Link>
        </div>
        <Link to="/cadastro" className="register-link">Não possui cadastro? Cadastre-se!</Link>
      </div>
    </>
  );
};

export default Login;
