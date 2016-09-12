import React, { PropTypes } from 'react'

import PerfilTabs from '@components/PerfilTabs'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

export Feed from './Feed'
export Pessoas from './Pessoas'
export Projetos from './Projetos'


class Seguindo extends React.Component {
  static propTypes = {
    feedCount: PropTypes.number,
    projetosCount: PropTypes.number,
    pessoasCount: PropTypes.number,
    onFeedClick: PropTypes.func,
    onProjetosClick: PropTypes.func,
    onPessoasClick: PropTypes.func,
    children: PropTypes.node,
    routes: PropTypes.array,
  }

  render() {
    const {
      feedCount = 0,
      projetosCount = 0,
      pessoasCount = 0,
      onFeedClick,
      onProjetosClick,
      onPessoasClick,
      routes,
      children,
    } = this.props

    const tabs = [
      {
        label: 'Feed',
        value: 'feed',
        count: feedCount,
        onClick: onFeedClick,
      },
      {
        label: 'Projetos',
        value: 'projetos',
        count: projetosCount,
        onClick: onProjetosClick,
      },
      {
        label: 'Pessoas',
        value: 'pessoas',
        count: pessoasCount,
        onClick: onPessoasClick,
      },
    ]

    return (
      <PerfilTabs
        tabs={tabs}
        title={'Seguindo'}
        activeTab={routes[routes.length - 1].path}
      >
        {children}
      </PerfilTabs>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFeedClick() {
      dispatch(push('/perfil/seguindo/feed'))
    },
    onProjetosClick() {
      dispatch(push('/perfil/seguindo/projetos'))
    },
    onPessoasClick() {
      dispatch(push('/perfil/seguindo/pessoas'))
    },
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Seguindo)
