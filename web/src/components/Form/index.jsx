import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input';

import './styles.css';

function Form(props) {

  const LogInForm = [
    <>
      <h2>Log In</h2>
      <Input id="email" placeholder="your@email.com" />
      <Input id="password" placeholder="password"/>
      <a href="/"><strong>Forgot your password?</strong></a>

      <button type="submit">Log In</button>
      <span>or</span>
      <Link to="/signUp" className="secondary-button">Create Account</Link>
    </>
  ];

  const createAccountForm = [
    <>
      <h2>Create Account</h2>
      <Input id="name" placeholder="name" />
      <Input id="email" placeholder="your@email.com"/>
      <Input id="password" placeholder="password"/>
      <Input id="pasword" placeholder="confirm your password"/>

      <button type="submit">Create Account</button>
      <span>or</span>
      <Link to="/signIn" className="secondary-button">Log In</Link>
    </>
  ];

  return (
    <div className="form-block">
      <form>
        {props.type === "logIn" ? LogInForm : null}
        {props.type === "createAccount" ? createAccountForm : null}
      </form>
    </div>
  );
}

export default Form;