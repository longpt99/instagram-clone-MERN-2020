import * as types from '../../constants/ActionType';

const initialState = {};

const errorReducer = (state = initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case types.SET_ERROR: return {...payload};
    case types.RESET_ERROR: return {};
    default: return state;
  }
};

export default errorReducer;