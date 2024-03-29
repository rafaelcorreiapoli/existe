import React, { PropTypes } from 'react'
import SalvosItem from '@components/SalvosItem'
import { composeWithTracker } from 'react-komposer'

class Projetos extends React.Component {
  static propTypes = {
    projetos: PropTypes.array,
  }

  render() {
    const {
      projetos,
    } = this.props
    return (
      <div>
        {projetos.map((projeto, i) => (
          <SalvosItem
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
    projetos: [{
      titulo: 'PROJETO01',
      subtitulo: 'rafaelribeirocorreia',
      imagem: 'http://placehold.it/400x400',
      data: new Date(),
    }],
  })
}
export default composeWithTracker(composer)(Projetos);
