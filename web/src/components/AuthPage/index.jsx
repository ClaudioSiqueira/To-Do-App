import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../Form';

import codingMobile from '../../assets/images/coding-mobile.png';
import codingDesktop from '../../assets/images/coding-desktop.png';
import backIcon from '../../assets/images/back.svg';

import './styles.css';

const AuthPage = (props) => {
  return (
    <div className="authentication-page">
      {/* Header para DESKTOP (>= 1100px) */}
      <header className="desktop">
        <Link to="/">To Do App</Link>
        <p>Increase your <b>productivity</b>.</p>
      </header>

      {/* Header para MOBILE (<= 500px) */}
      <header className="mobile">
        <img src={props.color} alt="Decoração laranja no canto superior esquerdo da página"/>
        <Link to="/"><img src={backIcon} alt="Seta"/></Link>
      </header>

      <main className="content">
        <img src={codingDesktop} alt="Ilustração de uma pessoa usando um notebook em uma mesa." className="desktop"/>
        <img src={codingMobile} alt="Ilustração de uma pessoa usando um notebook em uma mesa." className="mobile"/>
        
        <Form type={props.type} />
      </main>
    </div>
  );
}

export default AuthPage;