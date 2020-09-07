import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Landing() {
  return (
    <div className="landing-container">
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

      <main className="landing-page">
        <div className="content">
          <h1>All your tasks in a single place</h1>
          <Link to="/signIn" className="button">Get started</Link>
        </div>

        <div className="image-container">

        </div>
      </main>
    </div>
  );
}

export default Landing;