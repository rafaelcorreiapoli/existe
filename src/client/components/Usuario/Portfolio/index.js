import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import GridPortfolio from '@components/GridPortfolio'
import _ from 'lodash'

class Portfolio extends React.Component {
  static propTypes = {
    portfolios: PropTypes.array,
  }

  render() {
    const {
      portfolios,
    } = this.props

    return (
      <div>
        <GridPortfolio
          portfolios={portfolios}
        />
      </div>
    )
  }
}

const composer = (props, onData) => {
  onData(null, {
    portfolios: _.range(10).map(() => (
      {
        imagem: 'http://placehold.it/200x160',
        nome: 'WESTERN',
        nomeUsuario: 'rafa93br',
        descricao: 'Essa é a descrição',
        likesCount: 20,
        visualizacoesCount: 10,
      }
    )),
  })
}

export default composeWithTracker(composer)(Portfolio)
