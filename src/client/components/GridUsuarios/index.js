import React, { PropTypes } from 'react'
import { CSSGrid, makeResponsive, measureItems, layout } from 'react-stonecutter';
import Pagination from 'react-ultimate-pagination-material-ui'

const Grid = makeResponsive(measureItems(CSSGrid), { maxWidth: 900 });

const styles = {
  paginationContainer: {
    marginTop: 20,
    textAlign: 'center',
  },
}

class GridUsuarios extends React.Component {
  static propTypes = {
    usuarios: PropTypes.array,
    hideUserInfo: PropTypes.bool,
    renderElement: PropTypes.func,
    columnWidth: PropTypes.number,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    usuariosCount: PropTypes.number,
    onPageChange: PropTypes.number,
  }

  render() {
    const {
      usuarios,
      renderElement,
      columnWidth,
      page,
      pageSize,
      usuariosCount,
      onPageChange,
    } = this.props

    return (
      <div>
        <Grid
          component="div"
          columnWidth={columnWidth}
          gutterWidth={20}
          gutterHeight={20}
          layout={layout.pinterest}
          duration={200}
          easing="ease-out"
        >
          {
            usuarios.map((usuario, i) => (
              <div style={{ display: 'inline-flex', width: columnWidth }} key={i}>
                {renderElement(usuario)}
              </div>
            ))
          }
        </Grid>
        <div style={styles.paginationContainer}>
          <Pagination
            currentPage={page + 1}
            totalPages={Math.ceil(usuariosCount / pageSize)}
            onChange={p => onPageChange(p - 1)}
          />
        </div>
      </div>

    )
  }
}

export default GridUsuarios;
