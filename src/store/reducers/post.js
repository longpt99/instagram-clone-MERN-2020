import * as types from '../../constants/ActionType';

const postReducer = (state = [], action) => {
  const { payload } = action;
  switch(action.type) {
    case types.FOLLOWING_POST: return [...payload.posts];
    default: return state;
  }
};

export default postReducer;