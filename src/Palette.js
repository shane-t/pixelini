import React from 'react';
import Cell from './Cell';

const Palette = ({ colors, selectedColor, onMouseDown }) => {
  return (
    <div className='paletteContainer'>
    {Object.keys(colors).map(color => <Cell color={colors[color]} onMouseDown={onMouseDown} key={color} />)}
    </div>
  );
}

export default Palette;
