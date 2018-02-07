import React, { Component } from 'react';
import Grid from './Grid';
import PaletteContainer from './PaletteContainer';
import InfoBarContainer from './InfoBarContainer';
import PreviewContainer from './PreviewContainer';
import ToolsContainer from './ToolsContainer';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    const { numColumns, numRows } = store.getState();
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
