import * as types from '../constants/ActionType';

var initialState = null;

var auth = (state = initialState, action) => {
  const { token } = action;
  switch(action.type) {
    case types.SET_TOKEN: return token;
    case types.DELETE_TOKEN: return null;
    default: return state;
  }
}

export default auth;