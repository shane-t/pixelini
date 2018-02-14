import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import pixelApp from './reducers';
import thunk from 'redux-thunk';
import undoable from 'redux-undo';

const store = createStore(
    undoable(pixelApp),
    compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {} )
);

export default store;
