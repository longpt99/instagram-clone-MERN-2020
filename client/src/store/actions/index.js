import * as types from 'constants/ActionType';
import * as apis from 'constants/Api';
import axios from 'utils/axios';

// CALL API
export const actFetchTokenRequest = (data) => {
  return dispatch => {
    return axios.post('/auth/login', data)
    .then(res => {
      debugger
      dispatch(actFetchToken(res));
      dispatch(actFetchAdminRequest());
    }).catch(err => {
      debugger;
      dispatch(actSetLoginError(err))
    });
  };
}

export const actCreateNewAccount = (data) => {
  return dispatch => {
    return axios.post('/auth/register', data)
    .then(res => {
      dispatch(actFetchToken(res));
    }).catch(err => {
      dispatch(actSetLoginError(err))
    });
  };
}

export const actFetchUserProfileRequest = (data) => {
  return dispatch => {
    return axios.get(`/accounts/${data}`)
    .then(res => {
      dispatch(actFetchUser(res));
    }).catch(err => {
      dispatch(actSetLoginError(err.response.data))
    })
  }
}

export const actFetchAdminRequest = () => {
  return dispatch => {
    return axios.get('/accounts/admin')
    .then(res => {
      dispatch(actFetchAdmin(res));
    })
    .catch(err => {
      console.log(err.message)
    });
  }
}

export const actFetchSuggestedUsersRequest = () => {
  return dispatch => {
    return axios.get(apis.SUGGESTED_USERS)
    .then(res => {
      dispatch(actFetchSuggestedUsers(res));
    })
    .catch(err => {
      console.log(err.message)
    });
  }
}

export const actSendFollowerRequest = (id) => {
  return dispatch => {
    return axios.post('/accounts/admin/followers/request', {userId: id})
    .then(res => {
      dispatch(actFetchNewSuggestedUserList(res))
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}

export const actFetchFollowingPostsRequest = () => {
  return dispatch => {
    return axios.get(apis.FOLLOWING_POSTS)
    .then(res => {
      dispatch(actFetchFollowingPosts(res));
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}

export const actPostCommentRequest = (data) => {
  return dispatch => {
    return axios.post(`posts/${data.postId}/comment`, {content: data.content})
    .then(res => {
      debugger;
      dispatch(actSetCommentDataToPost(res.data))
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}

export const actFetchSearchResultRequest = (nickname) => {
  return dispatch => {
    return axios.get('accounts/search', {params: {q: nickname}})
    .then(res => {
      dispatch(actFetchSearchUsers(res))
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}

export const actFetchPostRequest = (id) => {
  return dispatch => {
    return axios.get(`/posts/${id}`)
    .then(res => {
      dispatch(actFetchPost(res))
    })
  }
}

export const actReactionPostRequest = (id) => {
  return dispatch => {
    return axios.post(`posts/${id}/reaction`)
    .then(res => {
      dispatch(actSetReactionToPost(id, res.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const actUnlikePostRequest = (id) => {
  return dispatch => {
    return axios.delete(`posts/${id}/reaction`)
    .then(res => {
      dispatch(actDeleteReactionToPost(id, res.userId))
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
  localStorage.setItem('access_token', token);
  return {
    type: types.SET_TOKEN,
    payload: token,
  }
}

export const actDeleteToken = () => {
  localStorage.removeItem('access_token');
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

export const actSetCommentDataToPost = (data) => {
  return {
    type: types.SET_COMMENT_DATA_TO_POST,
    payload: data,
  }
}

export const actSetReactionToPost = (postId, data) => {
  return {
    type: types.SET_REACTION_DATA_TO_POST,
    payload: {postId, data},
  }
}

export const actDeleteReactionToPost = (postId, userId) => {
  return {
    type: types.DELETE_REACTION_DATA_TO_POST,
    payload: {postId, userId},
  }
}

export const actFetchNewSuggestedUserList = (userId) => {
  return {
    type: types.GET_NEW_SUGGESTED_USER_LIST,
    payload: userId,
  }
}

export const actSetPostToProfile = (data) => {
  return {
    type: types.SET_POST_DATA_TO_PROFILE,
    payload: data,
  }
}