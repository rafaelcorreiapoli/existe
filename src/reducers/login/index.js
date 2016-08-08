import { SET_LOGIN_EMAIL, SET_LOGIN_PASSWORD, START_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../../actions';
import { List, Map } from 'immutable';


const login = (state = Map({email: '', password: '', isLoggingIn: false, error: false, success: false}), action) => {
  switch (action.type) {
    case SET_LOGIN_EMAIL:
      const email = action.payload.email;
      return state.set('email', email);
    break;
    case SET_LOGIN_PASSWORD:
      const password = action.payload.password;
      return state.set('password', password);
    break;
    case START_LOGIN:
      return state.set('isLoggingIn', true);
    break;
    case LOGIN_SUCCESS:
      return state.merge({
        isLoggingIn: false,
        error: false,
        success: true
      })
    break;
    case LOGIN_ERROR:
      return state.merge({
        isLoggingIn: false,
        error: action.payload.reason,
        success: false
      });
    break;
    default:
      return state;
  }
  return state
}

export default login
