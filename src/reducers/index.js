import { combineReducers } from 'redux';

import users from './users';
import token from './token';

const appReducers = combineReducers({
  users,
  token,
})

export default appReducers;