import * as types from '../../constants/ActionType';

const errorReducer = (state = null, action) => {
  const { error } = action;
  switch(action.type) {
    case types.LOGIN_ERROR: return error;
    default: return state;
  }
};

export default errorReducer;