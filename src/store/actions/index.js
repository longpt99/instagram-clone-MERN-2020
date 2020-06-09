import * as types from '../../constants/ActionType';
import * as apis from '../../constants/Api';
import callApi from "../../utils/apiCaller";

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
      return callApi(apis.LOGIN_API, 'POST', data).then(res => {
        dispatch(actFetchToken(res.data));
      }).catch(err => {
        dispatch(actSetLoginError(err.response.data))
      });
  };
}

export const actCreateNewAccount = (data) => {
  return dispatch => {
      return callApi(apis.REGISTER_API, 'POST', data).then(res => {
        dispatch(actFetchToken(res.data));
      }).catch(err => {
        dispatch(actSetLoginError(err.response.data))
      });
  };
}

export const actFetchUserRequest = () => {
  return dispatch => {
    return callApi('users/getUser', 'GET', null, {Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`}).then(res => {
      dispatch(actFetchUser(res.data));
    }).catch(err => {
      console.log(err.message)});
  }
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

export const actFetchUser = (data) => {
  return {
    type: types.USER_INFO,
    user: data,
  }
}