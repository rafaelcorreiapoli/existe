import { Map } from 'immutable'
export const SET_LOGIN_EMAIL = 'login/SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'login/SET_LOGIN_PASSWORD';
export const START_LOGIN = 'login/START_LOGIN';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'login/LOGIN_ERROR';
export const LOGOUT_REQUEST = 'login/LOGOUT_REQUEST'
export const CLEAR_LOGOUT_REQUEST = 'login/CLEAR_LOGOUT_REQUEST'
export const SET_METEOR_USER_FETCHED = 'login/SET_METEOR_USER_FETCHED'
import { SET_USER } from './user'
export const setMeteorUserFetched = (fetched) => ({
  type: SET_METEOR_USER_FETCHED,
  payload: {
    fetched,
  },
})
export function startLogin() {
  return {
    type: START_LOGIN,
    payload: {},
  }
}
export function loginSuccess(userId) {
    return {
      type: LOGIN_SUCCESS,
      payload: {
        userId
      }
    }
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: {
      error
    }
  }
}

export const loginWithFacebook = () => (dispatch, getState, Meteor) =>
  new Promise((resolve, reject) => {
    dispatch(startLogin());
    Meteor.loginWithFacebook({}, (err, res) => {
      if (err) {
        dispatch(loginError(err))
        reject(err)
      }
      dispatch(loginSuccess(res))
      resolve(res)
    })
  })


export const loginWithLinkedin = () => (dispatch, getState, Meteor) => {
  dispatch(startLogin());
  return new Promise((resolve, reject) => (
    Meteor.loginWithLinkedin({}, (err, res) => {
      if (err) {
        console.log('er')
        dispatch(loginError(err))
        reject(err)
      }
      console.log('suc')
      dispatch(loginSuccess(res))
      resolve(res)
    })
  ))
}

export const loginWithPassword = (email, password) => (dispatch, getState, Meteor) => {
  console.log(email, password)
  dispatch(startLogin());
  return new Promise((resolve, reject) => (
    Meteor.loginWithPassword(email, password, (err, res) => {
      if (err) {
        console.log(err)
        dispatch(loginError(err))
        return reject(err)
      }
      console.log(res)
      dispatch(loginSuccess(res))
      resolve(res)
    })
  ))
}

export const logout = () => (dispatch, getState, Meteor) => (
  new Promise((resolve, reject) => {
    dispatch({
      type: LOGOUT_REQUEST,
    })
    Meteor.logout((err, res) => {
      if (err) return reject(err)
      resolve(res)
    })
  })
)

export function setLoginEmail(email) {
  return {
    type: SET_LOGIN_EMAIL,
    payload: {
      email,
    },
  }
}


export function setLoginPassword(password) {
  return {
    type: SET_LOGIN_PASSWORD,
    payload: {
      password,
    },
  }
}

export const logoutRequest = () => (dispatch, getState, asteroid) => {
  dispatch({
    type: LOGOUT_REQUEST
  })
  asteroid.logout()
}

export const clearLogoutRequest = () => {
  return {
    type: CLEAR_LOGOUT_REQUEST
  }
}
const initialState = Map({
  email: '',
  password: '',
  loading: false,
  error: false,
  success: false,
  logoutRequest: false,
  isMeteorUserFetched: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return state.set('isMeteorUserFetched', true)
    case CLEAR_LOGOUT_REQUEST:
      return state.set('logoutRequest', false)
    case LOGOUT_REQUEST:
      return state.set('logoutRequest', true)
    case SET_LOGIN_EMAIL:
      const email = action.payload.email;
      return state.set('email', email);
    case SET_LOGIN_PASSWORD:
      const password = action.payload.password;
      return state.set('password', password);
    case START_LOGIN:
      return state.set('loading', true)
        .set('success', false)
        .set('error', false)
        .set('isMeteorUserFetched', false)
    case LOGIN_SUCCESS:
      return state.merge({
        loading: false,
        error: false,
        success: true,
      })
    case LOGIN_ERROR:
      return state.withMutations(map => {
        map.set('loading', false).set('error', action.payload.error).set('success', false)
      })
    default:
      return state;
  }
}
