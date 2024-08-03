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
      <div className="options-body">
        <Link to="/loginerror" className="options-link">Editar dados</Link>
        <hr className='divider' />
        <Link to="/loginerror" className="options-link">Meus pedidos</Link>
        <hr className='divider' />
        <Link to="/loginerror" className="options-link">Meus produtos</Link>
        <hr className='divider' />
        <Link to="/loginerror" className="options-link">Meu carrinho</Link>
        <hr className='divider' />
        <Link to="/main" className="options-link">Sair</Link>
      </div>
    </div>
  );
};

export default Options;
