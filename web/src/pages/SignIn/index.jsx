import React from 'react';

import AuthPage from '../../components/AuthPage';

import orange from '../../assets/images/orange.svg';

function SignIn() {
  return (
    <AuthPage type="logIn" color={orange} />
  );
}

export default SignIn;