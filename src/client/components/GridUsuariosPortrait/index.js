import React, { PropTypes } from 'react'
import { CSSGrid, makeResponsive } from 'react-stonecutter';
import UsuarioPortrait from '@components/UsuarioPortrait'

const Grid = makeResponsive(CSSGrid, { maxWidth: '100%' });

class GridUsuariosPortrait extends React.Component {
  static propTypes = {
    usuarios: PropTypes.array,
  }

  render() {
    const {
      usuarios,
    } = this.props
    return (
      <Grid
        style={{ margin: 'auto' }}
        component="div"
        columnWidth={150}
        gutterWidth={20}
        gutterHeight={20}
        itemHeight={160}
        duration={200}
        easing="ease-out"
      >
        {
          usuarios.map((usuario, i) => {
            return (
              <div style={{ display: 'inline-flex', width: 150 }} key={i}>
                <UsuarioPortrait {...usuario} />
              </div>
            )
          })
        }
      </Grid>
    )
  }
}

export default GridUsuariosPortrait;
