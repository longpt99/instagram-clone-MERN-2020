import * as types from '../constants/ActionType';

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

export const actSetToken = (token) => {
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