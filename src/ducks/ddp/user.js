const USER_LOGGED_IN = 'ddp/user/USER_LOGGED_IN'
const USER_LOGGED_OUT = 'ddp/user/USER_LOGGED_OUT'
const USER_LOGGING_IN = 'ddp/user/USER_LOGGING_IN'
const LOGOUT_REQUEST = 'ddp/user/LOGOUT_REQUEST'
const CLEAR_LOGOUT_REQUEST = 'ddp/user/CLEAR_LOGOUT_REQUEST'

import { Map } from 'immutable'

export const userLoggedIn = (userId) => {
  return {
    type: USER_LOGGED_IN,
    payload: {
      userId
    }
  }
}
export const clearLogoutRequest = () => {
  return {
    type: CLEAR_LOGOUT_REQUEST
  }
}
export const userLoggedOut = (userId) => {
  return {
    type: USER_LOGGED_OUT,
    payload: {

    }
  }
}

export const logoutRequest = () => (dispatch, getState, asteroid) => {

  dispatch({
    type: LOGOUT_REQUEST
  })
  asteroid.logout()
}

const initialState = Map({
  userId: null,
  loggedIn: false,
  loggingIn: true
})

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_LOGOUT_REQUEST:
      return state.set('logoutRequest', false)
    case LOGOUT_REQUEST:
      return state.set('logoutRequest', true)
    case USER_LOGGING_IN:
      return state.set('loggingIn', true).set('userId', null).set('loggedIn', false)
    case USER_LOGGED_IN:
      return state.set('loggingIn', false).set('userId', action.payload.userId).set('loggedIn', true)
    case USER_LOGGED_OUT:
      return state.set('loggingIn', false).set('userId', null).set('loggedIn', false)
    default:
      return state
  }
}
