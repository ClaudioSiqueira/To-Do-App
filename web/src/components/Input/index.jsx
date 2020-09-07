import React from 'react';

import './styles.css';

function InputBlock(props) {
  var { id, image, ...rest } = props;

  return (
    <div className="input-block">
      <i style={{backgroundImage: `url(${image})`}}/>
      <input 
        id={id}
        type={id}
        {...rest}
      />
    </div>
  );
}

export default InputBlock;
