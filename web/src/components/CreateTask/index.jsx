import React, {useState} from 'react';

import Input from '../../components/Input';

import api from '../../services/api.js';

import './styles.css';

function CreateTask() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

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
    <div className="form-create">
      <header>
        <h2>Create a task</h2>
        <button>voltar</button>
      </header>
      <form onSubmit={createNewTask}>
        <Input 
          required
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
  )
}

export default CreateTask;