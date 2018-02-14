import { connect } from 'react-redux';
import { clearGrid, translateUp, translateDown, translateLeft, translateRight } from '../actions';
import Tools from '../components/Tools';
import { ActionCreators } from 'redux-undo';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onClearClick : () => dispatch(clearGrid()),
    onUpClick : () => dispatch(translateUp()),
    onDownClick : () => dispatch(translateDown()),
    onLeftClick : () => dispatch(translateLeft()),
    onRightClick : () => dispatch(translateRight()),
    onUndoClick : () =>  dispatch(ActionCreators.undo()),
    onRedoClick : () =>  dispatch(ActionCreators.redo())
  }
}

const ToolsContainer = connect(mapStateToProps, mapDispatchToProps)(Tools);

export default ToolsContainer;
