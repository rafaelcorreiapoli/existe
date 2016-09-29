import React, { PropTypes } from 'react'
import SalvosItem from '@components/SalvosItem'
import { composeWithTracker } from 'react-komposer'

class Perfis extends React.Component {
  static propTypes = {
    perfis: PropTypes.array,
  }

  render() {
    const {
      perfis,
    } = this.props
    return (
      <div>
        {perfis.map((perfil, i) => (
          <SalvosItem
            key={i}
            {...perfil}
          />
        ))}
      </div>
    )
  }
}

const composer = (props, onData) => {
  onData(null, {
    perfis: [{
      titulo: 'RAFAEL RIBEIRO CORREIA',
      subtitulo: 'rafaelribeirocorreia',
      imagem: 'http://placehold.it/400x400',
      data: new Date(),
    }],
  })
}
export default composeWithTracker(composer)(Perfis);
