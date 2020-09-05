import React, { useState } from 'react';

import AppHeader from '../../components/AppHeader';
import ToDoCard from '../../components/ToDoCard';
import Input from '../../components/Input';

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
    <div className="app-page">
      <AppHeader />

      <div id="new-task">
        {createTask}
      </div>

      <h3>Your Tasks</h3>
      <ToDoCard 
        title="Passear com o cão"
        type="Tarefas de casa"
      />
      <ToDoCard 
        title="Exercícios de Estrutura de Dados I"
        type="Mackenzie"
      />
      
      <footer>
        <a onClick={createNewTask} href="#new-task">+</a>
      </footer>
    </div>
  );
}

export default App;