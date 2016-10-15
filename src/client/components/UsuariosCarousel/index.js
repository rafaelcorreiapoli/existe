import React, { PropTypes } from 'react'
import ComunidadeUsuario from '@components/ComunidadeUsuario'
import IconButton from 'material-ui/IconButton'
import { SetaEsquerda, SetaDireita } from '@resources/icons'
import MDSpinner from 'react-md-spinner'
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  usersRow: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: 800,
    minHeight: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    marginTop: -60,
  },
}
class UsuariosCarousel extends React.Component {
  static propTypes = {
    usuarios: PropTypes.array,
    page: PropTypes.number,
    usuariosCount: PropTypes.number,
    pageSize: PropTypes.number,
    onPageChange: PropTypes.func,
    loading: PropTypes.bool,
  }

  render() {
    const {
      usuarios,
      page,
      usuariosCount,
      pageSize,
      onPageChange,
      loading,
    } = this.props

    return (
      <div style={styles.container}>
        <IconButton
          disabled={!(page > 0)}
          style={styles.iconButton}
          onTouchTap={() => onPageChange(page - 1)}
        >
          <SetaEsquerda />
        </IconButton>

        <div style={styles.usersRow}>

          {
            loading ?
              <MDSpinner />
            :
            usuarios.map((usuario, i) => (
              <ComunidadeUsuario
                key={i}
                {...usuario}
                mostrarSeguidores={false}
                mostrarAvaliacoes={false}
                style={{
                  width: 150,
                  marginRight: 10,
                }}
              />
            ))
          }
        </div>
        <IconButton
          disabled={!((page + 1) * pageSize < usuariosCount)}
          style={styles.iconButton}
          onTouchTap={() => onPageChange(page + 1)}
        >
          <SetaDireita />
        </IconButton>

      </div>
    )
  }
}

export default UsuariosCarousel;
