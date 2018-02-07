import { connect } from 'react-redux';
import { clearGrid, translateUp, translateDown, translateLeft, translateRight } from './actions';
import Tools from './Tools';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onClearClick : () => dispatch(clearGrid()),
    onUpClick : () => dispatch(translateUp()),
    onDownClick : () => dispatch(translateDown()),
    onLeftClick : () => dispatch(translateLeft()),
    onRightClick : () => dispatch(translateRight())

  }
}

const ToolsContainer = connect(mapStateToProps, mapDispatchToProps)(Tools);

export default ToolsContainer;
