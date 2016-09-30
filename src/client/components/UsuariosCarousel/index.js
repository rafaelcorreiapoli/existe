import React, { PropTypes } from 'react'
import ComunidadeUsuario from '@components/ComunidadeUsuario'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
}
class UsuariosCarousel extends React.Component {
  static propTypes = {
    usuarios: PropTypes.array,
  }

  render() {
    const {
      usuarios,
    } = this.props

    return (
      <div style={styles.container}>
        {
          usuarios.map((usuario, i) => (
            <ComunidadeUsuario
              key={i}
              {...usuario}
              mostrarSeguidores={false}
              mostrarAvaliacoes={false}
              style={{
                width: 150,
              }}
            />
          ))
        }
      </div>
    )
  }
}

export default UsuariosCarousel;