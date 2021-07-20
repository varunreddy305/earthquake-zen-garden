import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import buildState from './buildState';
import reducer from './reducer';

const composeEnhancers = (typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, buildState(), composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
