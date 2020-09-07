import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
    </BrowserRouter>
  );
}

export default AuthRoutes;