import React, { PropTypes } from 'react'
import PerfilTabs from '@components/PerfilTabs'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

export Convites from './Convites'
export Marcacoes from './Marcacoes'


class Notificacoes extends React.Component {
  static propTypes = {
    marcacoesCount: PropTypes.number,
    convitesCount: PropTypes.number,
    onMarcacoesClick: PropTypes.func,
    onConvitesClick: PropTypes.func,
    children: PropTypes.node,
    routes: PropTypes.array,
  }

  render() {
    const {
      marcacoesCount = 0,
      convitesCount = 0,
      onMarcacoesClick,
      onConvitesClick,
      children,
      routes,
    } = this.props

    const tabs = [
      {
        label: 'Marcações',
        value: 'marcacoes',
        count: marcacoesCount,
        onClick: onMarcacoesClick,
      },
      {
        label: 'Convites',
        value: 'convites',
        count: convitesCount,
        onClick: onConvitesClick,
      },
    ]

    return (
      <PerfilTabs
        tabs={tabs}
        title={'Notificações'}
        activeTab={routes[routes.length - 1].path}
      >
        {children}
      </PerfilTabs>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMarcacoesClick() {
      dispatch(push('/perfil/notificacoes/marcacoes'))
    },
    onConvitesClick() {
      dispatch(push('/perfil/notificacoes/convites'))
    },
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Notificacoes)
