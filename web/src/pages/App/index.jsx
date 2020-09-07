import React, { useState, useEffect } from 'react';

import AppHeader from '../../components/AppHeader';
import ToDoCard from '../../components/ToDoCard';
import Input from '../../components/Input';

import api from '../../services/api.js';

import './styles.css';

function App() {
  const [createTask, setCreateTask] = useState('');

  function createNewTask() {
    setCreateTask([
      <div className="form-create">
        <header>
          <h2>Create a task</h2>
          <button>voltar</button>
        </header>
        <form>
          <Input id="text" placeholder="Title" />
          <Input id="text" placeholder="Description" />

          <button type="submit">Create Task</button>
        </form>
      </div>
    ]);
  }

  return (
    <div id="start" className="app-page">
      <AppHeader />

      <div id="new-task">
        {createTask}
      </div>

      <div className="toDo-block">
        <h3>Your Tasks</h3>
        <ToDoCard 
          title="Passear com o cão"
          type="Tarefas de casa"
        />
        <ToDoCard 
          title="Exercícios de Estrutura de Dados I"
          type="Mackenzie"
        />

        <ToDoCard 
          title="Estudar ponteiros e struct em C e C++"
          type="Mackenzie"
        />

        <ToDoCard 
          title="Estudo do playbook"
          type="FA"
        />
      </div>
      
      <footer>
        <a onClick={createNewTask} href="#start">+</a>
      </footer>
    </div>
  );
}

export default App;