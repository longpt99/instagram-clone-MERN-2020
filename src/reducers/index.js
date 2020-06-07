import { combineReducers } from 'redux';

import users from './users';
import token from './token';
import error from './errorReducer';

const appReducers = combineReducers({
  users,
  token,
  error,
})

export default appReducers;