import React from 'react';
import { connect } from 'react-redux'
import { setDrawerOpen } from '../../actions/app'
import { push } from 'react-router-redux';
import Drawer from '../../components/Drawer'

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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer)
