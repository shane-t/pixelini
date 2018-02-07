import React from 'react';
import PropTypes from 'prop-types';

class Cell extends React.Component {
  handleClick () {
    this.props.onMouseDown(this.props.color);
  }

  render () {
    return (<div className='cell'
      onMouseDown={this.handleClick.bind(this)}
      onMouseEnter={this.props.onMouseEnter}
      style={{ backgroundColor: 'rgba(' + this.props.color.rgba + ')' }}
    ></div>)
  }
}

Cell.propTypes = {
  onMouseDown : PropTypes.func.isRequired,
  color : PropTypes.shape({
    hex : PropTypes.string.isRequired,
    rbga : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired
  })
}

export default Cell;
