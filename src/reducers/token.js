import * as types from '../constants/ActionType';
const getToken = JSON.parse(localStorage.getItem('token'));
let initialState = getToken ? getToken : null;

const tokenReducer = (state = initialState, action) => {
  const { token } = action;
  switch(action.type) {
    case types.SET_TOKEN: localStorage.setItem('token', JSON.stringify(token)); return token;
    case types.DELETE_TOKEN: return null;
    default: return state;
  }
};

export default tokenReducer;
