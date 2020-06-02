import * as types from '../constants/ActionType';

var initialState = [];

var users = (state = initialState, action) => {
  switch(action.type) {
    case types.USER_LIST: var {payload} = action ;return payload;
    case types.REGISTER_ACCOUNT: var {payload} = action ;return payload;
    default: return state;
  }
}

export default users;