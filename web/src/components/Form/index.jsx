import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input';

function Form() {


  const LogInForm = [
    <form>
      <h2>Log In</h2>
      <Input 
        id="email" 
        placeholder="your@email.com" 
        value="email"
      />

      <Input 
        id="password" 
        placeholder="password" 
        value="password"
      />

      <a href="/"><strong>Forgot your password?</strong></a>

      <button type="submit" className="button" >Log In</button>
      <span>or</span>
      <Link to="/signUp" className="secondary-button">Create Account</Link>
    </form>
  ];

  return (
    <div className="form-block">
      {LogInForm}
    </div>
  );
}

export default Form;