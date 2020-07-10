import { combineReducers } from 'redux';

import token from './token';
import error from './error';
import users from './user';
import posts from './post'

const appReducers = combineReducers({
  token,
  error,
  users,
  posts,
})

const rootReducers = (state, action) => {
  switch(action.type) {
    case 'USER_LOGOUT': return appReducers(undefined, action);
    default: return appReducers(state, action);
  }
}

export default rootReducers;