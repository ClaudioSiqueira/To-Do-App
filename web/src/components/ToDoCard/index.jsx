import React from 'react';

import trash from '../../assets/images/trash.svg';

import api from '../../services/api';

import './styles.css';

function ToDoCard(props) {

  async function deleteTask(id) {
    await api.delete('/task/' + id);
  }

  return (
    <div className="card-container">
      <article>
        <div className="task-content">
          <div className="type"></div>
          <div className="text">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span>{props.type}</span>
          </div>
        </div>

        <div className="actions">
          {/* <div className="check"></div> */}
          <button onClick={() => deleteTask(props.id)}><img src={trash} alt="Ícone de uma lata de lixo, preto"/></button>
        </div>
      </article>
    </div>
  );
}

export default ToDoCard;