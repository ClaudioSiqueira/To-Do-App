import React from 'react';

import './styles.css';

function AppHeader() {
  const name = localStorage.getItem('@ToDoApp-user');

  return (
    <header className="container">
      <div className="content">
        <div className="text">
          <h2>E aí, {name}!</h2>
          <p>Você tem 6 tarefas hoje</p>
        </div>
        
        <section className="filters">
          <a href="/" className="all filter">Todos</a>
          <a href="/" className="filter">Faculdade</a>
          <a href="/" className="filter">Trabalho</a>
        </section>
      </div>
    </header>
  );
}

export default AppHeader;