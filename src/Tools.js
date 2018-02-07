import React from 'react';

export default ({ onClearClick, onUpClick, onDownClick, onLeftClick, onRightClick }) => {
  return (<div className='tools'>
      <button className='tool' onClick={onClearClick}>clear</button>
      <button className='tool' onClick={onUpClick}>↑</button>
      <button className='tool' onClick={onDownClick}>↓</button>
      <button className='tool' onClick={onLeftClick}>←</button>
      <button className='tool' onClick={onRightClick}>→</button>
  </div>);
};

