import React from 'react';

const InfoBar = ({ selectedColor, numColumns, numRows}) => {
  return (<p><small>Color : {selectedColor.name} {numColumns}x{numRows}</small></p>);
};

export default InfoBar;
