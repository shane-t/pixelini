import { connect } from 'react-redux';
import Preview from '../components/Preview';

const mapStateToProps = state => {

  return { 
    cells : state.present.cells,
    numRows : state.present.numRows,
    numColumns : state.present.numColumns
  }
}

const PreviewContainer = connect(mapStateToProps)(Preview);
export default PreviewContainer;
