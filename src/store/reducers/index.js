import { combineReducers } from 'redux';

import token from './token';
import error from './error';
import users from './users';
import posts from './post'

const appReducers = combineReducers({
  token,
  error,
  users,
  posts,
})

export default appReducers;