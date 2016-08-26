import React from 'react';
import { connect } from 'react-redux'
import { setDrawerOpen } from '../../actions/app'
import { push } from 'react-router-redux';
import Authenticated from '../../components/Authenticated'
import { logoutRequest } from '../../ducks/ddp/user'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.app.get('drawerOpen'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeDrawerState(open) {
      dispatch(setDrawerOpen(open))
    },
    onClickBuscaLink() {
      dispatch(setDrawerOpen(false))
      dispatch(push('/busca'))
    },
    onClickComunidadeLink() {
      dispatch(setDrawerOpen(false))
      dispatch(push('/comunidade'))
    },
    onClickCadastroPessoal() {
      dispatch(setDrawerOpen(false))
      dispatch(push('/cadastro/pessoal'))
    },
    onClickCadastroEmpresarial() {
      dispatch(setDrawerOpen(false))
      dispatch(push('/cadastro/empresarial'))
    },
    onClickMuralLink() {
      dispatch(setDrawerOpen(false))
      dispatch(push('/mural'))
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
)(Authenticated)
