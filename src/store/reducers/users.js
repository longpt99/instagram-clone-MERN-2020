import * as types from '../../constants/ActionType';

var initialState = {
  admin: null,
  user: null,
  list: [],
  suggestion: [],
};

var userReducer = (state = initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case types.ADMIN_INFO: return {...state, admin: payload};
    case types.USER_INFO: return {...state, user: payload};
    case types.USER_LIST: {
      const userList = [...state.list];
      userList.push(payload);
      return {...state, list: userList}
    };
    case types.SUGGESTED_USER: {
      let suggestedUsers = [...state.suggestion];
      suggestedUsers = [...payload];
      return {...state, suggestion: suggestedUsers}
    }
    default: return state;
  }
}

export default userReducer;