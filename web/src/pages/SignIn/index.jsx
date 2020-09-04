import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function SignIn() {
  return (
    <div id="signIn-container">
      <PageHeader />
      <main className="content">
        <h2>Faça login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" className="email"/>

          <label htmlFor="password">Senha</label>
          <input type="text" className="password"/>

          <button type="submit">Entrar</button>
        </form>
      </main>
    </div>
  );
}

export default SignIn;