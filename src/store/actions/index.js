import * as types from '../../constants/ActionType';
import * as apis from '../../constants/Api';
import callApi from "../../utils/apiCaller";

// CALL API
export const actFetchTokenRequest = (data) => {
  return dispatch => {
    return callApi(apis.LOGIN_API, 'POST', data)
    .then(res => {
      dispatch(actFetchToken(res.data));
    }).catch(err => {
      dispatch(actSetLoginError(err.response.data))
    });
  };
}

export const actCreateNewAccount = (data) => {
  return dispatch => {
    return callApi(apis.REGISTER_API, 'POST', data)
    .then(res => {
      dispatch(actFetchToken(res.data));
    }).catch(err => {
      dispatch(actSetLoginError(err.response.data))
    });
  };
}

export const actFetchUserProfileRequest = (data) => {
  return dispatch => {
    return callApi(apis.USER_PROFILE_API, 'GET', null, null,{nickname: data})
    .then(res => {
      dispatch(actFetchUser(res.data));
    }).catch(err => {
      dispatch(actSetLoginError(err.response.data))
    })
  }
}

export const actFetchAdminRequest = () => {
  return dispatch => {
    return callApi(apis.ADMIN_API, 'GET', null, {Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`})
    .then(res => {
      dispatch(actFetchAdmin(res.data));
    })
    .catch(err => {
      console.log(err.message)
    });
  }
}

export const actFectchSuggestedUsersRequest = () => {
  return dispatch => {
    return callApi(apis.SUGGESTED_USERS, 'GET', null, {Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`})
    .then(res => {
      dispatch(actFetchSuggestedUsers(res.data));
    })
    .catch(err => {
      console.log(err.message)
    });
  }
}

export const actSendFollowUserRequest = (id) => {
  return dispatch => {
    return callApi(apis.SEND_FOLLOW_USER, 'POST', id, {Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`})
    .then(res => {
      console.log(res.response.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}



// ---------------------------------------------------------------------------------

export const actSetLoginError = (error) => {
  return {
    type: types.LOGIN_ERROR,
    payload: error,
  }
}

export const actFetchToken = (token) => {
  localStorage.setItem('jwt', JSON.stringify(token));
  return {
    type: types.SET_TOKEN,
    payload: token,
  }
}

export const actDeleteToken = () => {
  localStorage.removeItem('jwt');
  return {
    type: types.DELETE_TOKEN,
  }
}

export const actFetchSuggestedUsers = (data) => {
  return {
    type: types.SUGGESTED_USER,
    payload: data,
  }
}


export const actFetchAdmin = (data) => {
  return {
    type: types.ADMIN_INFO,
    payload: data,
  }
}

export const actFetchUser = (data) => {
  return {
    type: types.USER_INFO,
    payload: data,
  }
}