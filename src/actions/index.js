import * as types from '../constants/ActionType';
import callApi from "../utils/apiCaller";

export const users = (users) => {
  return {
    type: types.USER_LIST,
    users,
  }
}

export const actShowAuthPage = () => {
  return {
    type: types.AUTH_PAGE,
  }
}

export const actFetchTokenRequest = (data) => {
  return dispatch => {
      return callApi('auth/login', 'POST', data).then(res => {
        dispatch(actFetchToken(res.data));
      }).catch(err => {
        dispatch(actSetLoginError(err.response.data))
      });
  };
}

export const actSetLoginError = (error) => {
  return {
    type: types.LOGIN_ERROR,
    error,
  }
}


export const actFetchToken = (token) => {
  return {
    type: types.SET_TOKEN,
    token,
  }
}

export const actDeleteToken = () => {
  return {
    type: types.DELETE_TOKEN,
  }
}

// export const registerAccount = (user) => {
//   return {
//     type: types.REGISTER_ACCOUNT,
//     users,
//   }
// }