import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../assets/back2.png';
import fbIcon from '../assets/fbicon.png';
import googleIcon from '../assets/googleicon.png';
import "../styles/Cadastro.css";

const Cadastro: React.FC = () => {
  return (
    <>
      <header className="container-header2">
        <Link to="/main" className="back-button">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <p>Cadastrar-se</p>
      </header>
      <div className="register-screen">
        <div className="social-login">
          <img src={fbIcon} className="social-icon" alt="Facebook" />
          <img src={googleIcon} className="social-icon" alt="Google" />
        </div>
        <div className="divider-container">
          <div className="divider"></div>
          <p>ou</p>
          <div className="divider"></div>
        </div>
        <form className="register-form">
          <label>
            Nome
            <input type="text" placeholder="Digite seu nome completo" />
          </label>
          <label>
            CPF
            <input type="text" placeholder="Digite seu CPF" />
          </label>
          <label>
            Telefone
            <input type="text" placeholder="Digite seu telefone" />
          </label>
          <label>
            E-mail
            <input type="email" placeholder="Digite seu e-mail" />
          </label>
          <label>
            Senha
            <input type="password" placeholder="Digite sua senha" />
          </label>
          <label>
            Confirme sua senha
            <input type="password" placeholder="Confirme sua senha" />
          </label>
          <Link to="/cadastrocheck">
          <button type="submit" className="register-button">Cadastrar-se!</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
