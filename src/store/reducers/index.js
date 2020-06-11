import { combineReducers } from 'redux';

import admin from './adminReducer';
import token from './tokenReducer';
import error from './errorReducer';
import user from './userReducer';

const appReducers = combineReducers({
  admin,
  token,
  error,
  user,
})

export default appReducers;