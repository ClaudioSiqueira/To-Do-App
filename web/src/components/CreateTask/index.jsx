import React, {useState, useEffect} from 'react';

import Input from '../../components/Input';

import api from '../../services/api.js';

import './styles.css';

function CreateTask() {
  const [id] = localStorage.getItem('@ToDoApp-data');
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [lable, setLable] = useState('')

  const [lables, setLables] = useState([]);

  useEffect(() => {
    listLabels();
  }, [lables]);
  
  async function listLabels() {
    const response = await api.get('/tasks/lables', {user_id: id});
    setLables(response.data);
  }

  // Adicionar tarefa
  async function createNewTask(e) {
    e.preventDefault();

    await api.post('/task', {
      title,
      description,
      label: lable
    })

    setTitle('');
    setDescription('');
    setLable('');
  }

  return (
    <div className="form-create">
      <header>
        <h2>Create a task</h2>
        {/* <button>voltar</button> */}
      </header>
      <form onSubmit={createNewTask}>
        <Input 
          required
          id="text" 
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />

        <div className="task-data">
          <Input 
            id="text" 
            placeholder="Description"
            className="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
          />

          <Input 
            required
            id="text" 
            placeholder="Etiqueta"
            value={lable}
            onChange={(e) => setLable(e.target.value)} 
          />
        </div>

        <button type="submit">Create Task</button>
      </form>
    </div>
  )
}

export default CreateTask;