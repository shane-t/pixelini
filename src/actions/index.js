import {
  SET_CELL_COLOR,
  SET_SELECTED_COLOR,
  CLEAR_GRID,
  TRANSLATE_UP,
  TRANSLATE_DOWN,
  TRANSLATE_LEFT,
  TRANSLATE_RIGHT,
  OPEN_FILE,
  SET_ROWS,
  SET_COLUMNS
} from './actionTypes';

export function setCellColor (x, y, color) {
  return { 
    type : SET_CELL_COLOR,
    color,
    x,
    y
  }
}

export function setSelectedColor (color) {
  return { 
    type : SET_SELECTED_COLOR,
    color
  }
}

export function clearGrid () {
  return {
    type: CLEAR_GRID
  }
}

export function translateUp () {
  return {
    type : TRANSLATE_UP
  }
}

export function translateDown () {
  return {
    type : TRANSLATE_DOWN
  }
}

export function translateLeft () {
  return {
    type : TRANSLATE_LEFT
  }
}

export function translateRight () {
  return {
    type : TRANSLATE_RIGHT
  }
}


export function openFile (x, y, cells) {
  return {
    type : OPEN_FILE,
    cells,
		x,
		y
  }
}

export function setColumns (columns) {
  return {
    type : SET_COLUMNS,
    columns
  }
}

export function setRows (rows) {
  return {
    type : SET_ROWS,
    rows
  }
}
