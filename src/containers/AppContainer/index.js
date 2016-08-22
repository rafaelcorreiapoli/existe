import React from 'react';
import { connect } from 'react-redux'
import { setDrawerOpen } from '../../actions/app'
import { setupDdpListeners } from '../../ducks/ddp/collections'

import { push } from 'react-router-redux';
import App from '../../components/App'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.app.get('drawerOpen')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentDidMount() {
      dispatch(setupDdpListeners())
    },
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

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount()
  }

  render() {
    return <App {...this.props} />
  }
}

AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)

export default AppContainer
