import React from 'react';
import './styles.css';

function InputBlock({id, placeholder}) {
  return (
    <div className="input-block">
      <i/>
      <input 
        id={id}
        type={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBlock;
