import { combineReducers } from 'redux';

import user from './userReducer';
import token from './tokenReducer';
import error from './errorReducer';

const appReducers = combineReducers({
  user,
  token,
  error,
})

export default appReducers;