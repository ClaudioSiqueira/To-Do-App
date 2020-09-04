import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Landing() {
  return (
    <div id="landing-container">
      <main className="content">
        <h1>Sua nova ferramenta de To Do</h1>
        <p>Organize suas tarefas e aumente sua produtividade</p>
        <Link to="/signIn" className="signIn">Entar</Link>
        <Link to="/signUp" className="signUp">Cadastre-se</Link>
      </main>
    </div>
  );
}

export default Landing;