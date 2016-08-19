import React from 'react';
import { connect } from 'react-redux'
import { setDrawerOpen } from '../../actions/app'
import { push } from 'react-router-redux';
import App from '../../components/App'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.app.get('drawerOpen')
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
      dispatch(push('/'))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
