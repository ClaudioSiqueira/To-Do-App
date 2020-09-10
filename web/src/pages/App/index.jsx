import React, { useState, useEffect } from 'react';

import AppHeader from '../../components/AppHeader';
import ToDoCard from '../../components/ToDoCard';
import CreateTask from '../../components/CreateTask';

import api from '../../services/api.js';

import './styles.css';

function App() {
  const [id] = localStorage.getItem('@ToDoApp-data');
  const [tasks, setTasks] = useState([]);
  const [lables, setLables] = useState([]);

  // Listar todas as tarefas
  async function listTasks(route = 'tasks') {
    const response = await api.get(`/${route}`, {user_id: id});
    setTasks(response.data);
  }

  useEffect(() => {
    listLabels();
  }, [lables]);
  
  // Lista as etiquetas na parte de cima da página
  async function listLabels() {
    const response = await api.get('/tasks/lables');
    setLables(response.data);
  }

  return (
    <div id="start" className="app-page">
      <AppHeader />

      <section className="filters">
          <button onClick={() => listTasks('tasks')} className="all filter">Todos</button>
          {lables.map(lable => (
            <button key={lable} onClick={() => listTasks('tasks/label/' + lable) } className="filter">{lable}</button>
          ))}  
      </section>

      <CreateTask />

      <div className="toDo-block">
        <h3>Your Tasks</h3>
        <section className="tasks-list">
          {/* List all user taks */}
          {tasks.map((task => (
            <div key={task.id} className="task-item">
              <ToDoCard 
                id={task.id}
                title={task.title}
                description={task.description}
                type={task.label}
              />
            </div>
          )))}
        </section>
      </div>
      
{/*       <footer>
        <a href="#start">+</a>
      </footer> */}
    </div>
  );
};

export default App;