import React from 'react';

import AuthPage from '../../components/AuthPage';

import blue from '../../assets/images/blue.svg';

function SignIn() {
  return (
    <AuthPage type="createAccount" color={blue} />
  );
}

export default SignIn;