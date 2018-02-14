import React, { Component } from 'react';
import Grid from './components/Grid';
import PaletteContainer from './containers/PaletteContainer';
import InfoBarContainer from './containers/InfoBarContainer';
import PreviewContainer from './containers/PreviewContainer';
import ToolsContainer from './containers/ToolsContainer';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    const { numColumns, numRows } = store.getState().present;
		this.cols = numColumns;
		this.rows = numRows;
  }

  render() {
    return (
        <Provider store={store}>
          <div>
            <Grid cols={this.cols} rows={this.rows}></Grid>
            <PaletteContainer></PaletteContainer>
            <InfoBarContainer/>
            <ToolsContainer/>
            <PreviewContainer/>
          </div>
        </Provider>
    );
  }
}

export default App;
