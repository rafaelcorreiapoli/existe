import React, { PropTypes } from 'react'
import UsuariosCarousel from '@components/UsuariosCarousel'
import GridUsuarios from '@components/GridUsuarios'
import ComunidadeUsuario from '@components/ComunidadeUsuario'

class UsuariosPorArea extends React.Component {
  static propTypes = {
    viewMode: PropTypes.string,
  }

  static defaultProps ={
    viewMode: 'carousel',
  }

  render() {
    const {
      viewMode,
      ...props,
    } = this.props
    return (
      <div>
        {
          viewMode === 'grid' &&
            <GridUsuarios
              gridStyle={{ minHeight: 910 }}
              style={{ minHeight: 910 }}
              columnWidth={200}
              renderElement={user => (
                <ComunidadeUsuario
                  {...user}
                />
              )}
              {...props}
            />
        }
        {
          viewMode === 'carousel' &&
            <UsuariosCarousel
              {...props}
            />
        }

      </div>
    )
  }
}

export default UsuariosPorArea;
