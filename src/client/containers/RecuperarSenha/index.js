import { connect } from 'react-redux'
import RecuperarSenhaForm from '../../components/RecuperarSenhaForm'
import { push } from 'react-router-redux';
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickLogin() {
      dispatch(push('/'));
    }
  }
}

const RecuperarSenha = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecuperarSenhaForm)

export default RecuperarSenha
