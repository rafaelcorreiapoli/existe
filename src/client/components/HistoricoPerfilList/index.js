import React, { PropTypes } from 'react'
import MiniFeedItem from '@components/MiniFeedItem'

class HistoricoPerfilList extends React.Component {
  static propTypes = {
    historicos: PropTypes.array,
  }

  render() {
    const {
      historicos,
    } = this.props

    return (
      <div>
        {
          historicos.map((historico, i) => (
            <MiniFeedItem
              key={i}
              icon={historico.iconElement}
              texto={historico.texto}
              data={historico.data}
            />
          ))
        }
      </div>
    )
  }
}

export default HistoricoPerfilList;
