import * as types from '../../constants/ActionType';

var initialState = null;

var user = (state = initialState, action) => {
  const { user } = action;
  switch(action.type) {
    case types.USER_INFO: return user;
    default: return state;
  }
}

export default user;