import * as types from '../../constants/ActionType';
const initialState = {
  post: {},
  followingPost: [],
}

const postReducer = (state = initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case types.FOLLOWING_POST: return {...state, followingPost: [...payload.posts]};
    case types.POST_CONTENT: return {...state, post: {...payload.post}};
    default: return state;
  }
};

export default postReducer;