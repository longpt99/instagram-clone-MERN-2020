import { combineReducers } from 'redux';

import users from './users';
import authPage from './auth';
import token from './token';

const appReducers = combineReducers({
  users,
  authPage,
  token,
})

export default appReducers;