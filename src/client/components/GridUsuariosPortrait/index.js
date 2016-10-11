import React, { PropTypes } from 'react'
import { CSSGrid, makeResponsive, measureItems, layout } from 'react-stonecutter';
import UsuarioPortrait from '@components/UsuarioPortrait'

const Grid = makeResponsive(measureItems(CSSGrid), { maxWidth: 900 });

class GridUsuariosPortrait extends React.Component {
  static propTypes = {
    usuarios: PropTypes.array,
    hideUserInfo: PropTypes.bool,
  }

  render() {
    const {
      usuarios,
      hideUserInfo,
    } = this.props

    return (
      <Grid
        style={{ margin: 'auto' }}
        component="div"
        columnWidth={100}
        gutterWidth={20}
        gutterHeight={20}
        // itemHeight={160}
        layout={layout.pinterest}
        duration={200}
        easing="ease-out"
      >
        {
          usuarios.map((usuario, i) => {
            return (
              <div style={{ display: 'inline-flex', width: 100 }} key={i}>
                <UsuarioPortrait
                  hideUserInfo={hideUserInfo}
                  {...usuario}
                />
              </div>
            )
          })
        }
      </Grid>
    )
  }
}

export default GridUsuariosPortrait;
