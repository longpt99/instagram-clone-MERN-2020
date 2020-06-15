import * as types from '../../constants/ActionType';

var initialState = {
  admin: null,
  user: null,
  list: [],
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
    default: return state;
  }
}

export default userReducer;