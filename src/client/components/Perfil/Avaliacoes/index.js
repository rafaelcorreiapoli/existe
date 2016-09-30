import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { composeWithTracker } from 'react-komposer'
import PerfilTabs from '@components/PerfilTabs'

export Feitas from './Feitas'
export Recebidas from './Recebidas'
import AvaliacaoItem from '@components/AvaliacaoItem'

class Avaliacoes extends React.Component {
  static propTypes = {
    recebidasCount: PropTypes.number,
    feitasCount: PropTypes.number,
    onRecebidasClick: PropTypes.func,
    onFeitasClick: PropTypes.func,
    children: PropTypes.node,
    params: PropTypes.object,
    routes: PropTypes.array,
    avaliacoes: PropTypes.array,
  }
  render() {
    const {
      recebidasCount = 0,
      feitasCount = 0,
      onRecebidasClick,
      onFeitasClick,
      routes,
      avaliacoes,
      params: {
        filtro,
      },
    } = this.props

    const tabs = [
      {
        label: 'Feitas',
        value: 'feitas',
        count: feitasCount,
        onClick: onFeitasClick,
      },
      {
        label: 'Recebidas',
        value: 'recebidas',
        count: recebidasCount,
        onClick: onRecebidasClick,
      },
    ]

    return (
      <PerfilTabs
        tabs={tabs}
        title={'Avaliações'}
        activeTab={filtro}
      >
        {avaliacoes.map((projeto, i) => (
          <AvaliacaoItem
            key={i}
            {...projeto}
          />
        ))}
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
    onRecebidasClick() {
      dispatch(push('/perfil/avaliacoes/recebidas'))
    },
    onFeitasClick() {
      dispatch(push('/perfil/avaliacoes/feitas'))
    },
    onPerfisClick() {
      dispatch(push('/perfil/salvos/perfis'))
    },
  }
}


const composer = (props, onData) => {
  const {
    params: {
      filtro,
    },
  } = props

  onData(null, {
    avaliacoes: filtro === 'recebidas' ? [] : [{
      nome: 'PROJETO 01',
      imagem: 'http://placehold.it/400x400',
      avaliacoesCount: 10,
      avaliacaoMedia: 5,
      criadoEm: new Date(),
      finalizadoEm: new Date(),
      avaliacoesPorUsuario: [{
        nome: 'RAFAEL',
        nomeUsuario: 'rafa93br',
        imagem: 'http://placehold.it/400x400',
        funcao: 'ENGENHEIRO',
        avaliacaoMedia: 4,
        avaliacoesPorCategoria: [{
          categoria: 'CALCULO',
          avaliacao: 3,
        }, {
          categoria: 'FISICA',
          avaliacao: 5,
        }],
      }],
    }, {
      nome: 'PROJETO 01',
      imagem: 'http://placehold.it/400x400',
      avaliacoesCount: 10,
      avaliacaoMedia: 5,
      criadoEm: new Date(),
      finalizadoEm: new Date(),
      avaliacoesPorUsuario: [{
        nome: 'RAFAEL',
        nomeUsuario: 'rafa93br',
        imagem: 'http://placehold.it/400x400',
        funcao: 'ENGENHEIRO',
        avaliacaoMedia: 4,
        avaliacoesPorCategoria: [{
          categoria: 'CALCULO',
          avaliacao: 3,
        }, {
          categoria: 'FISICA',
          avaliacao: 5,
        }],
      }],
    }],
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composeWithTracker(composer)(Avaliacoes))
