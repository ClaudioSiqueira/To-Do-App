import React from 'react';

import codingMobile from '../../assets/images/coding-mobile.png';
import codingDesktop from '../../assets/images/coding-desktop.png';

import './styles.css';

const AuthImage = () => {
  return (
    <div className="auth-image">
      <main className="content">
        <img src={codingDesktop} alt="Ilustração de uma pessoa usando um notebook em uma mesa." className="desktop"/>
        <img src={codingMobile} alt="Ilustração de uma pessoa usando um notebook em uma mesa." className="mobile"/>
      </main>
    </div>
  );
}

export default AuthImage;