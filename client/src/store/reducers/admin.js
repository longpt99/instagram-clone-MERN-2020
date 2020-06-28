import * as types from '../../constants/ActionType';

var initialState = null

var user = (state = initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    // case types.ADMIN_INFO: return payload;
    default: return state;
  }
}

export default user;