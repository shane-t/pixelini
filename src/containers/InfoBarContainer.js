import { connect } from 'react-redux';
import InfoBar from '../components/InfoBar';

const mapStateToProps = state => {
  return { 
    selectedColor : state.present.selectedColor,
    numColumns : state.present.numColumns,
    numRows : state.present.numRows
  }
}

const InfoBarContainer = connect(mapStateToProps)(InfoBar);
export default InfoBarContainer;
