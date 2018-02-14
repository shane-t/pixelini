import { connect } from 'react-redux';
import { openFile } from '../actions';
import Upload from '../components/Upload';

function mapDispatchToProps (dispatch) {
  return {
    open : (x,y,cells) => dispatch(openFile(x,y,cells))
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
