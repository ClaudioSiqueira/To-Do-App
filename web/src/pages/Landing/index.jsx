import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function Landing() {
  return (
    <div className="landing-container">
      <PageHeader />
      <main>
        <div className="content">
          <h1>All your tasks in a single place</h1>
          <Link to="/signIn" className="get-started">Get started</Link>
        </div>

        <div className="image-container">

        </div>
      </main>
    </div>
  );
}

export default Landing;