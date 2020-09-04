import React from 'react';

import './styles.css';

function AppHeader() {
  return (
    <header id="container">
      <div className="content">
        <h2>Oi, Pedro!</h2>
        <p>Você tem 6 tarefas hoje</p>

        <section className="filters">
          <a href="#" className="all">Todos</a>
          <a href="#">Faculdade</a>
          <a href="#">Trabalho</a>
        </section>
      </div>
    </header>
  );
}

export default AppHeader;