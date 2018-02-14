import React from 'react';
import UploadContainer from '../containers/UploadContainer';

export default ({ onClearClick, onUpClick, onDownClick, onLeftClick, onRightClick, onUndoClick, onRedoClick }) => {
  return (<div className='tools'>
      <button className='tool' onClick={onClearClick}>clear</button>
      <button className='tool' onClick={onUpClick}>↑</button>
      <button className='tool' onClick={onDownClick}>↓</button>
      <button className='tool' onClick={onLeftClick}>←</button>
      <button className='tool' onClick={onRightClick}>→</button>
      <button className='tool' onClick={onUndoClick}>^Z</button>
      <button className='tool' onClick={onRedoClick}>^Y</button>
      <UploadContainer />
  </div>);
};

