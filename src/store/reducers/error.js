import * as types from '../../constants/ActionType';

const errorReducer = (state = null, action) => {
  const { payload } = action;
  switch(action.type) {
    case types.LOGIN_ERROR: return payload;
    case types.RESET_ERROR: return null;
    default: return state;
  }
};

export default errorReducer;