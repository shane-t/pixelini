import React from 'react';
import colors from '../colors';

class Preview extends React.Component {
  
  componentDidUpdate(prevProps, prevState) {
    this.updateCanvas(prevProps);
  }

  updateCanvas(prevProps) {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    for (let i = 0; i<=this.props.cells.length-1; i++) {
      for (let j = 0; j<=this.props.cells[i].length-1; j++) {
        if (!prevProps[i] || !prevProps[j] || this.props.cells[i][j].color.name !== prevProps.cells[i][j].color.name) {
          if (this.props.cells[i][j].color.name === 'Transparent') {
            ctx.fillStyle = 'black';
            ctx.globalCompositeOperation = 'xor';
          } else {
            ctx.fillStyle = 'rgba(' + this.props.cells[i][j].color.rgba + ')';
            ctx.globalCompositeOperation = 'source-over';
          }
          ctx.fillRect(j, i, 1, 1);
        }
      }
    }
  }

  render () {
    return (<canvas ref='canvas' width={this.props.numColumns} height={this.props.numRows}></canvas>)
  }

}

export default Preview;
