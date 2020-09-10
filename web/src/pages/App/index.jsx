import React, { useState, useEffect } from 'react';

import AppHeader from '../../components/AppHeader';
import ToDoCard from '../../components/ToDoCard';
import CreateTask from '../../components/CreateTask';

import api from '../../services/api.js';

import './styles.css';

function App() {
  const [id] = localStorage.getItem('@ToDoApp-data');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    listTasks()
  });

  // Listar todas as tarefas
  async function listTasks() {
    const response = await api.get('/tasks', {user_id: id});
    setTasks(response.data);
  }

  function createTask() {
    return true;   
  }

  return (
    <div id="start" className="app-page">
      <AppHeader />

      {createTask === true ? <CreateTask /> : null}

      <div className="toDo-block">
        <h3>Your Tasks</h3>
        <section className="tasks-list">
          {/* List all user taks */}
          {tasks.map((task => (
            <div key={task.title} className="task-item">
              <ToDoCard 
                id={task.id}
                title={task.title}
                type={task.label}
              />
            </div>
          )))}
        </section>
      </div>
      
      <footer>
        <a onClick={createTask} href="#start">+</a>
      </footer>
    </div>
  );
};

export default App;