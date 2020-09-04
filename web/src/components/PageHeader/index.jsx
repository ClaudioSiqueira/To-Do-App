import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
  return (
    <div id="header-container">
      <header >
        <Link to="/">voltar</Link>
        <h3>To Do App</h3>
      </header>
    </div>
  );
}

export default Header;