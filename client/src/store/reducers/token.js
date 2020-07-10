import * as types from '../../constants/ActionType';

let initialState = {
  accessToken: null
}

const tokenReducer = (state = initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case types.SET_TOKEN: return {...state, accessToken:payload};
    default: return state;
  }
};

export default tokenReducer;
