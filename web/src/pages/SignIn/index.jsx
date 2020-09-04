import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function SignIn() {
  return (
    <div id="signIn-container">
      <main className="content">
        <h2>Faça login</h2>
        <form>
          <input type="text" className="email" placeholder="your@email.com"/>
          <input type="text" className="password" placeholder="password"/>

          <a href="/">Esqueceu a senha?</a>
          <button type="submit">Entrar</button>
          <span>or</span>
          <Link to="/signUp">Create account</Link>
        </form>

        <a className="create-new">Ainda não tem conta?<b> Crie agora!</b></a>
      </main>
    </div>
  );
}

export default SignIn;