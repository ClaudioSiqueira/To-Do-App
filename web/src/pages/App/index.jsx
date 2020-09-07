import React, { useState, useEffect } from 'react';

import AppHeader from '../../components/AppHeader';
import ToDoCard from '../../components/ToDoCard';
import Input from '../../components/Input';

import api from '../../services/api.js';

import './styles.css';

function App() {
  const [id] = localStorage.getItem('@ToDoApp-data')

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    listTasks()
  });

  // Listar todas as tarefas
  async function listTasks() {
    const response = await api.get('/tasks', {user_id: id});
    setTasks(response.data);
  }

  // Adicionar tarefa
  async function createNewTask(e) {
    e.preventDefault();

    await api.post('/task', {
      title,
      description,
      label: 'Default'
    })

    setTitle('');
    setDescription('');
  }

  return (
    <div id="start" className="app-page">
      <AppHeader />

      <div className="form-create">
        <header>
          <h2>Create a task</h2>
          <button>voltar</button>
        </header>
        <form onSubmit={createNewTask}>
          <Input 
            id="text" 
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
          <Input 
            id="text" 
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
          />

          <button type="submit">Create Task</button>
        </form>
      </div>


      <div className="toDo-block">
        <h3>Your Tasks</h3>
        <section className="tasks-list">
          {/* List all user taks */}
          {tasks.map((task => (
            <div key={task.title} className="task-item">
              <ToDoCard 
                title={task.title}
                type={task.label}
              />
            </div>
          )))}
        </section>
      </div>
      
      <footer>
        <a onClick={createNewTask} href="#start">+</a>
      </footer>
    </div>
  );
}

export default App;