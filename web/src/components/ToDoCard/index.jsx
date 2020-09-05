import React from 'react';

import './styles.css';

function ToDoCard(props) {
  return (
    <div className="card-container">
      <article>
        <div className="task-content">
          <div className="type"></div>
          <div className="text">
            <h2>{props.title}</h2>
            <p>{props.type}</p>
          </div>
        </div>

        <div className="actions">
          <div className="check"></div>
          <span>more</span>
        </div>
      </article>
    </div>
  );
}

export default ToDoCard;