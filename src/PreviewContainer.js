import { connect } from 'react-redux';
import Preview from './Preview';

const mapStateToProps = state => {
  return { 
    cells : state.cells,
    numRows : state.numRows,
    numColumns : state.numColumns
  }
}

const PreviewContainer = connect(mapStateToProps)(Preview);
export default PreviewContainer;
