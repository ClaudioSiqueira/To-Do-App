import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AuthImage from '../../components/AuthImage';
import AuthHeader from '../../components/AuthHeader';
import Input from '../../components/Input';

import orange from '../../assets/images/orange.svg';
import mail from '../../assets/images/mail.svg';
import lock from '../../assets/images/lock.svg';

import api from '../../services/api';
import { login } from "../../services/auth";

import '../SignUp/styles.css'

function SignIn() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogIn(e) {
    e.preventDefault();

    if (!email || !password) {
      alert('Preencha o formulário de login com seu email e senha');
    } else {
      try {
        const response = await api.post('/user/authenticate', {email, password});
        login(response.data.token);
        history.push('/app');
      } catch (err) {
        alert("Credenciais inválidas");
      }
    }
  }

  return (
    <div className="signIn">
      <AuthHeader color={orange} />
      <main className="auth-page">
        <AuthImage/>
        
        <form onSubmit={handleLogIn} className="form-block">

          <h2>Log In</h2>

          <Input
            required
            id="email"
            placeholder="your@email.com"
            image={mail}
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />

          <Input
            required
            id="password"
            placeholder="password"
            image={lock}
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />

          <a href="/"><strong>Forgot your password?</strong></a>

          <button type="submit" className="button" >Log In</button>
          
          <span>or</span>
          <Link to="/signUp" className="secondary-button">Create Account</Link>
        </form>
      </main>
    </div>
  );
}

export default SignIn;