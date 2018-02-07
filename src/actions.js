export const SET_CELL_COLOR = 'SET_CELL_COLOR';
export const SET_SELECTED_COLOR = 'SET_SELECTED_COLOR';
export const CLEAR_GRID = 'CLEAR_GRID';
export const TRANSLATE_UP = 'TRANSLATE_UP';
export const TRANSLATE_DOWN = 'TRANSLATE_DOWN';
export const TRANSLATE_LEFT = 'TRANSLATE_LEFT';
export const TRANSLATE_RIGHT = 'TRANSLATE_RIGHT';

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
