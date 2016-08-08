import { connect } from 'react-redux'
import { setLoginEmail, setLoginPassword, loginRequest } from '../../actions'
import LoginForm from '../../components/LoginForm'

const mapStateToProps = (state) => {
  return {
    email: state.login.get('email'),
    password: state.login.get('password'),
    success: state.login.get('success'),
    error: state.login.get('error'),
    isLoggingIn: state.login.get('isLoggingIn')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeEmail(email) {
      dispatch(setLoginEmail(email));
    },
    onChangePassword(password) {
      dispatch(setLoginPassword(password));
    },
    onLogin(email, password) {
      dispatch(loginRequest(email, password));
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default Login
