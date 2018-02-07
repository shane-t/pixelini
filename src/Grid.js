import React from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

const Grid = ({rows}) => (
  <div className='grid'>
    { Array(rows).fill().map( (row, i) => <Row key={i} i={i} cols={rows} /> ) }
  </div>
)

Grid.propTypes = {
  rows : PropTypes.number.isRequired
};


export default Grid;
