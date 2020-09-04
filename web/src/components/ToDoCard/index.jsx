import React from 'react';

import './styles.css';

function ToDoCard() {
  return (
    <div className="card-container">
      <article>
        <header>
          <h2>Exercícios de Estrutura de Dados I</h2>
          <p>5 exercícios sobre vetores, matrizes e ponteiros em C++</p>
        </header>
        
        <footer>
          <p>Mackenzie</p>
        </footer>
      </article>
    </div>
  );
}

export default ToDoCard;