import React from 'react';

import './styles.css';

const AppHeader = () => {
  const name = localStorage.getItem('@ToDoApp-user');

  return (
    <header className="container">
      <div className="content">
        <div className="text">
          <h2>E aí, {name}!</h2>
          <p>Você tem 6 tarefas</p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;