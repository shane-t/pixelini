import { connect } from 'react-redux';
import InfoBar from './InfoBar';

const mapStateToProps = state => {
  return { 
    selectedColor : state.selectedColor,
    numColumns : state.numColumns,
    numRows : state.numRows
  }
}

const InfoBarContainer = connect(mapStateToProps)(InfoBar);
export default InfoBarContainer;
