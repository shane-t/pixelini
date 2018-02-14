import React, { Component } from 'react';
import ColoredCell from '../containers/ColoredCell';

class Row extends Component {
  render() {
    const { i } = this.props;
    return (
      <div className='row'>
        { Array(this.props.cols).fill().map( (col,j) => <ColoredCell x={j} y={i} key={[j,i].join('-')} /> ) }
      </div>
    );
  }
}

export default Row;
