import * as types from '../constants/ActionType';

var initialState = true;

var auth = (state = initialState, action) => {
  switch(action.type) {
    case types.AUTH_PAGE: return !state;
    default: return state;
  }
}

export default auth;