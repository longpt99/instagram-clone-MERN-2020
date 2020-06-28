import * as types from '../../constants/ActionType';
import * as apis from '../../constants/Api';
import callApi from "../../utils/apiCaller";
import {getBearerJWT} from '../../utils';

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
    return callApi(apis.ADMIN_API, 'GET', null, getBearerJWT())
    .then(res => {
      dispatch(actFetchAdmin(res.data));
    })
    .catch(err => {
      console.log(err.message)
    });
  }
}

export const actFetchSuggestedUsersRequest = () => {
  return dispatch => {
    return callApi(apis.SUGGESTED_USERS, 'GET', null, getBearerJWT())
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
    return callApi(apis.SEND_FOLLOW_USER, 'POST', {userId: id}, getBearerJWT())
    .then(res => {
      debugger;
      console.log(res.response.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}

export const actFetchFollowingPostsRequest = () => {
  return dispatch => {
    return callApi(apis.FOLLOWING_POSTS, 'GET', null, getBearerJWT())
    .then(res => {
      dispatch(actFetchFollowingPosts(res.data));
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}

export const actPostCommentRequest = (data) => {
  return dispatch => {
    return callApi(apis.POST_COMMENT, 'POST', data, getBearerJWT())
    .then(res => {
      console.log(res.data.status)
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}

export const actFetchSearchResultRequest = (nickname) => {
  return dispatch => {
    return callApi('users/search', 'GET', null, null, {q: nickname})
    .then(res => {
      dispatch(actFetchSearchUsers(res.data))
      // console.log(res.data);
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}

export const actFetchPostRequest = (id) => {
  return dispatch => {
    return callApi(`${apis.POST_API}/${id}`, 'GET')
    .then(res => {
      dispatch(actFetchPost(res.data))
    })
  }
}

export const actReactionPostRequest = (id) => {
  return dispatch => {
    return callApi(`${apis.POST_API}/${id}/reaction`, 'POST', null,  getBearerJWT())
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const actUnlikePostRequest = (id) => {
  return dispatch => {
    return callApi(`${apis.POST_API}/${id}/reaction`, 'DELETE', null,  getBearerJWT())
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err);
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

export const actFetchFollowingPosts = (data) => {
  return {
    type: types.FOLLOWING_POST,
    payload: data,
  }
}

export const actFetchPost = (data) => {
  return { 
    type: types.POST_CONTENT,
    payload: data
  }
}

export const actResetErr = () => {
  return {
    type: types.RESET_ERROR,
  }
}

export const actFetchSearchUsers = (data) => {
  return {
    type: types.SEARCH_USERS,
    payload: data,
  }
}

export const actUserLogout = () => {
  return {
    type: types.USER_LOGOUT,
  }
}

export const actResetSearchUsers = () => {
  return {
    type: types.RESET_SEARCH_USERS,
  }
}