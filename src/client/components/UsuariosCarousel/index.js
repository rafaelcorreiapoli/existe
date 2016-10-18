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
  mainContainer: {
    minWidth: 1020,
    minHeight: 290,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  usersRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  iconButton: {
    marginTop: -60,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
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

        <div style={styles.mainContainer}>
          {
            loading ?
            // <div style={styles.loadingContainer}>
              <MDSpinner />
              // </div>
            :
              <div style={styles.usersRow}>
                {
                  usuarios.map((usuario, i) => (
                    <ComunidadeUsuario
                      key={i}
                      {...usuario}
                      mostrarSeguidores={false}
                      mostrarAvaliacoes={false}
                      style={{
                        marginRight: 10,
                      }}
                    />
                  ))
                }
              </div>
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
