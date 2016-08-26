import React from 'react';
import { connect } from 'react-redux'
import { setDrawerOpen } from '../../actions/app'
import { push } from 'react-router-redux';
import AppBar from '../../components/AppBar'
import { logoutRequest } from '../../ducks/ddp/user'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeDrawerState(open) {
      dispatch(setDrawerOpen(open))
    },
    onClickPerfilLink() {
      dispatch(push('/perfil'))
    },
    onClickNovoProjetoLink() {
      dispatch(push('/novo-projeto'))
    },
    onClickAjudaLink() {
      dispatch(push('/ajuda'))
    },
    onClickSairLink() {
      dispatch(logoutRequest())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar)
