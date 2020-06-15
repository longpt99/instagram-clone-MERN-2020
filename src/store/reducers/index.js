import { combineReducers } from 'redux';

import token from './token';
import error from './error';
import users from './users';

const appReducers = combineReducers({
  token,
  error,
  users,
})

export default appReducers;