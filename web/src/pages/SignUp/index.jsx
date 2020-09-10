import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthImage from '../../components/AuthImage';
import AuthHeader from '../../components/AuthHeader';
import Input from '../../components/Input';

import blue from '../../assets/images/blue.svg';
import user from '../../assets/images/user.svg';
import mail from '../../assets/images/mail.svg';
import lock from '../../assets/images/lock.svg';

import api from '../../services/api';

import './styles.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleCreateAccount(e) {
    e.preventDefault();

    console.log(name)
    console.log(email)
    console.log(password)

    await api.post('/user', {
      name,
      email,
      password
    }).then(() => {
      alert('Cadastro realizado com sucesso')
    }).catch(() => {
      alert('Erro ao finalizar cadastro. Revise suas informações')
    });
  };

  return (
    <div className="signUp">
      <AuthHeader color={blue} />

      <main className="auth-page">
        <AuthImage/>
        
        <form onSubmit={handleCreateAccount} className="form-block">
          <h2>Create Account</h2>

          <Input 
            required
            id="name"
            placeholder="name"
            image={user}
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />

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

          <Input
            id="password-confirm"
            placeholder="confirm your password"
            image={lock}
          />

          <button type="submit" className="button" >Create Account</button>
          
          <span>or</span>
          <Link to="/signIn" className="secondary-button">Log In</Link>
        </form>
      </main>
    </div>
  );
}

export default SignUp;