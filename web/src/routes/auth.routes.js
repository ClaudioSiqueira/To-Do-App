import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../pages/App';
import Landing from '../pages/Landing';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/landing" component={Landing} />
    </BrowserRouter>
  );
}

export default AppRoutes;