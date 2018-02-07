import {
  setCellColor,
} from './actions';

import { connect } from 'react-redux';

import Cell from './Cell';

const mapStateToProps = (state, ownProps) => {
  return { 
    color : state.cells[ownProps.y][ownProps.x].color
  }
}


function doChangeColor(x,y) {
  return (dispatch, getState) => {
    let { selectedColor } = getState();
    dispatch(setCellColor(x, y, selectedColor));
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMouseDown: () => {
      dispatch(doChangeColor(ownProps.x, ownProps.y));
    },
    onMouseEnter: e => {
      if (e.buttons) {
        dispatch(doChangeColor(ownProps.x, ownProps.y));
      }
    } 
  }
}

const ColoredCell = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell);

export default ColoredCell;
