import * as types from '../../constants/ActionType';

const getToken = JSON.parse(localStorage.getItem('jwt'));
let initialState = getToken ? getToken : null;

const tokenReducer = (state = initialState, action) => {
  const { token } = action;
  switch(action.type) {
    case types.SET_TOKEN: localStorage.setItem('jwt', JSON.stringify(token)); return token;
    case types.DELETE_TOKEN: localStorage.removeItem('jwt'); return null;
    default: return state;
  }
};

export default tokenReducer;
