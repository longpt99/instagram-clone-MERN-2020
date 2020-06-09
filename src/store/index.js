import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import appReducers from './reducers/index';

const store = createStore(
  appReducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;