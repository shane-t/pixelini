import { connect } from 'react-redux';
import { setSelectedColor } from '../actions';
import Palette from '../components/Palette';

function mapStateToProps (state) {
  return { 
    selectedColor : state.present.selectedColor,
    colors : state.present.colors
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onMouseDown: color => dispatch(setSelectedColor(color))
  }
}

const PaletteContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Palette);

export default PaletteContainer;

