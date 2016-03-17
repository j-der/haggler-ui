import React from 'react';

export default ({ counter, handleClick }) => (
  <div>
    <h2>{ counter }</h2>
    <button onClick={ handleClick }>Increment!</button>
  </div>
);
