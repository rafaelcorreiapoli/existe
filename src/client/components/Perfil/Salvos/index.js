import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import PerfilTabs from '@components/PerfilTabs'

export Videos from './Videos'
export Projetos from './Projetos'
export Perfis from './Perfis'


class Salvos extends React.Component {
  static propTypes = {
    videosCount: PropTypes.number,
    projetosCount: PropTypes.number,
    perfisCount: PropTypes.number,
    onVideosClick: PropTypes.func,
    onProjetosClick: PropTypes.func,
    onPerfisClick: PropTypes.func,
    children: PropTypes.node,
    routes: PropTypes.array,
  }
  render() {
    const {
      videosCount = 0,
      projetosCount = 0,
      perfisCount = 0,
      onVideosClick,
      onProjetosClick,
      onPerfisClick,
      children,
      routes,
      ...props,
    } = this.props

    const tabs = [
      {
        label: 'Projetos',
        value: 'projetos',
        count: projetosCount,
        onClick: onProjetosClick,
      },
      {
        label: 'Vídeos',
        value: 'videos',
        count: videosCount,
        onClick: onVideosClick,
      },
      {
        label: 'Perfis',
        value: 'perfis',
        count: perfisCount,
        onClick: onPerfisClick,
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

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onVideosClick() {
      dispatch(push('/perfil/salvos/videos'))
    },
    onProjetosClick() {
      dispatch(push('/perfil/salvos/projetos'))
    },
    onPerfisClick() {
      dispatch(push('/perfil/salvos/perfis'))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Salvos)
