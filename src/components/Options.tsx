import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Options.css';
import user from '../assets/user.png';

const Options: React.FC = () => {
  return (
    <div>
      <header className="header-container">
        <div className="user-info">
          <img src={user} alt="user" className="user-icon" />
          <h1 className="user-text">Usuário</h1>
        </div>
      </header>
      <div className="bodyform">
        <Link to="/loginerror" className="options-link2">Editar dados</Link>
        <hr className='divider2' />
        <Link to="/loginerror" className="options-link2">Meus pedidos</Link>
        <hr className='divider2' />
        <Link to="/loginerror" className="options-link2">Meus produtos</Link>
        <hr className='divider2' />
        <Link to="/loginerror" className="options-link2">Meu carrinho</Link>
        <hr className='divider2' />
        <Link to="/main" className="options-link2">Sair</Link>
      </div>
    </div>
  );
};

export default Options;
