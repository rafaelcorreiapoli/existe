import React, { PropTypes } from 'react'
import ComunidadeArea from '@components/ComunidadeArea'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}
class Comunidade extends React.Component {
  static propTypes = {
    usuariosPorArea: PropTypes.object,
  }

  render() {
    const {
      usuariosPorArea,
    } = this.props

    return (
      <div style={styles.container}>
        <ComunidadeArea
          area="texto"
          usuarios={usuariosPorArea.texto}
        />
        <ComunidadeArea
          area="imagem"
          usuarios={usuariosPorArea.imagem}
        />
        <ComunidadeArea
          area="audio"
          usuarios={usuariosPorArea.audio}
        />
        <ComunidadeArea
          area="cena"
          usuarios={usuariosPorArea.cena}
        />
        <ComunidadeArea
          area="producao"
          usuarios={usuariosPorArea.producao}
        />
      </div>
    )
  }
}

export default Comunidade;
