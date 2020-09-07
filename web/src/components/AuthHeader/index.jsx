import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/back.svg';

import './styles.css';

function AuthHeader(props) {
  return (
    <div className="auth-header">
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
    </div>
  );
}

export default AuthHeader;