import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
  return (
    <div id="header-container">
      <header >
        <h3>To Do App</h3>

        <div className="hamburguer">
          <ul>
            <li className="top"></li>
            <li className="middle"></li>
            <li className="bottom"></li>
          </ul>
        </div>

        <nav>
          <ul>
            <li><Link to="/signIn">Login</Link></li>
            <li><Link to="/signUp"><b>Create account</b></Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;