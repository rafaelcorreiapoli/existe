import { connect } from 'react-redux'
import { setLoginEmail, setLoginPassword, loginRequest, loginWithFacebook, loginWithLinkedin } from '../../actions'
import LoginForm from '../../components/LoginForm'
import { push } from 'react-router-redux';


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
    },
    onLoginWithFacebook() {
      const { location: { query: { redirect = '/busca'} } } = ownProps
      dispatch(loginWithFacebook(redirect))
    },
    onLoginWithLinkedin() {
      dispatch(loginWithLinkedin())
    },
    onClickRecuperarSenha() {
      dispatch(push('/recuperar-senha'))
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default Login
