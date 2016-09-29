import React, { PropTypes } from 'react'
import AvaliacaoItem from '@components/AvaliacaoItem'
import { composeWithTracker } from 'react-komposer'

class Feitas extends React.Component {
  static propTypes = {
    avaliacoes: PropTypes.array,
  }

  render() {
    const {
      avaliacoes,
    } = this.props
    return (
      <div>
        {avaliacoes.map((projeto, i) => (
          <AvaliacaoItem
            key={i}
            {...projeto}
          />
        ))}
      </div>
    )
  }
}


const composer = (props, onData) => {
  onData(null, {
    avaliacoes: [{
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
export default composeWithTracker(composer)(Feitas);
