import React, { PropTypes } from 'react'
import PerfilTabs from '@components/PerfilTabs'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'


class Projetos extends React.Component {
  static propTypes = {
    meusCount: PropTypes.number,
    colaborandoCount: PropTypes.number,
    finalizadosCount: PropTypes.number,
    onMeusClick: PropTypes.func,
    onColaborandoClick: PropTypes.func,
    onFinalizadosClick: PropTypes.func,
    children: PropTypes.node,
    routes: PropTypes.array,
  }

  render() {
    const {
      meusCount = 0,
      colaborandoCount = 0,
      finalizadosCount = 0,
      onMeusClick,
      onColaborandoClick,
      onFinalizadosClick,
      children,
      routes,
      params: {
        filtro,
      },
    } = this.props


    const tabs = [
      {
        label: 'Meus',
        value: 'meus',
        count: meusCount,
        onClick: onMeusClick,
      },
      {
        label: 'Colaborando',
        value: 'convites',
        count: colaborandoCount,
        onClick: onColaborandoClick,
      },
      {
        label: 'Finalizados',
        value: 'finalizados',
        count: finalizadosCount,
        onClick: onFinalizadosClick,
      },
    ]

    return (
      <PerfilTabs
        tabs={tabs}
        title={'Projetos'}
        activeTab={filtro}
      >
        Conteudo
      </PerfilTabs>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMeusClick() {
      dispatch(push('/perfil/projetos/meus'))
    },
    onColaborandoClick() {
      dispatch(push('/perfil/projetos/colaborando'))
    },
    onFinalizadosClick() {
      dispatch(push('/perfil/projetos/finalizados'))
    },
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Projetos)
