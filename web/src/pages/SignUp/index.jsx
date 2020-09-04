import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function SignUp() {
  return (
    <div id="signUp-container">
      <PageHeader />
      <main className="content">
        <h2>Crie sua conta!</h2>
        <form>
          <label htmlFor="user">Nome</label>
          <input type="text" className="user"/>

          <label htmlFor="email">Email</label>
          <input type="text" className="email"/>

          <label htmlFor="password">Senha</label>
          <input type="text" className="password"/>

          <label htmlFor="password">Confirme sua senha</label>
          <input type="text" className="password"/>

          <button type="submit">Entrar</button>
        </form>
      </main>
    </div>
  );
}

export default SignUp;