import { 
  SET_CELL_COLOR,
  SET_SELECTED_COLOR,
  CLEAR_GRID,
  TRANSLATE_UP,
  TRANSLATE_DOWN,
  TRANSLATE_LEFT,
  TRANSLATE_RIGHT
} from './actions';
import { initialRows, initialColumns } from './config';
import colors from './colors';

const initialState = {
  selectedColor : colors.BLACK,
  numRows : initialRows,
  numColumns : initialColumns,
  cells : Array(initialRows).fill(Array(initialColumns).fill({ color : colors.TRANSPARENT })),
  colors
};

export default function pixelApp(state = initialState, action) {
  switch (action.type) {
      case TRANSLATE_UP:
        return { ...state,
          cells : [ ...state.cells.slice(1, state.cells.length), state.cells[0] ]
        }
      case TRANSLATE_DOWN:
        return { ...state,
          cells : [ state.cells[state.cells.length-1], ...state.cells.slice(0, state.cells.length-1) ]
        }
      case TRANSLATE_LEFT:
        return { ...state,
          cells : state.cells.map(cols => [ ...cols.slice(1, cols.length), cols[0] ])
        }
      case TRANSLATE_RIGHT:
        return { ...state,
          cells : state.cells.map(cols => [ cols[cols.length-1], ...cols.slice(0, cols.length-1) ])
        }
      case CLEAR_GRID:
        return { ...state,
          cells: Array(initialRows).fill(Array(initialColumns).fill({ color : colors.TRANSPARENT }))
        }
      case SET_SELECTED_COLOR:
        return { ...state, selectedColor : action.color };
      case SET_CELL_COLOR:
        return { ...state,
          cells: state.cells.map((row, rowIndex) => {
            if (rowIndex === action.y) {
              return row.map((cell, cellIndex) => {
                if (cellIndex === action.x) {
                  return { ...cell, color: action.color };
                }
                return cell;
              });
            }
            return row;
          })
        };  
      default:
        return state;
  }
}
