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
    case types.SET_COMMENT_DATA_TO_POST: {
      const {postId} = payload;
      const newData = state.followingPost.map((post) => {
        if (postId === post._id) {
          const comments = post.comments;
          comments.push({...payload});
        }
        return post;
      })
      return {
        ...state,
        followingPost: newData,
      } 
    };
    case types.SET_REACTION_DATA_TO_POST: {
      const {postId, data} = payload;
      const newData = state.followingPost.map((post, index) => {
        if (postId === post._id) {
          const reactions = post.reactions;
          reactions.push(data)
        }
        return post;
      })
      return {
        ...state,
        followingPost: newData,
      } 
    };
    case types.DELETE_REACTION_DATA_TO_POST: {
      const {postId, userId} = payload;
      const newData = state.followingPost.map((post) => {
        if (postId === post._id) {
          const reactions = post.reactions;
          const newReacts = reactions.filter(react => react.userId !== userId);
          post.reactions = [...newReacts];
        }
        return post;
      })
      return {
        ...state,
        followingPost: newData,
      } 
    };

    default: return state;
  }
};

export default postReducer;