import React, { useEffect, useState } from 'react';

import api from '../../services/api.js';

import './styles.css';

function AppHeader() {
  const [id] = localStorage.getItem('@ToDoApp-data');
  const name = localStorage.getItem('@ToDoApp-user');

  const [labels, setLabels] = useState([]);

  useEffect(() => {
    listLabels();
  }, []);
  
  async function listLabels() {
    const response = await api.get('/tasks/lables', {user_id: id});
    setLabels(response.data);
  }

  return (
    <header className="container">
      <div className="content">
        <div className="text">
          <h2>E aí, {name}!</h2>
          <p>Você tem 6 tarefas</p>
        </div>

        <section className="filters">
          <a href="/" className="all filter">Todos</a>
          {labels.map(label => (
            <a key={label.id} href="/" className="filter">{label.label}</a>
          ))}
        
        </section>
      </div>
    </header>
  );
}

export default AppHeader;