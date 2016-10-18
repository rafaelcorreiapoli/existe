import React, { PropTypes } from 'react'
import { CSSGrid, makeResponsive, measureItems, layout } from 'react-stonecutter';
import Pagination from 'react-ultimate-pagination-material-ui'
import MDSpinner from 'react-md-spinner'

const Grid = makeResponsive(measureItems(CSSGrid), { maxWidth: 900 });

const styles = {
  paginationContainer: {
    marginTop: 20,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
}

class GridUsuarios extends React.Component {
  static propTypes = {
    usuarios: PropTypes.array,
    hideUserInfo: PropTypes.bool,
    renderElement: PropTypes.func,
    onPageChange: PropTypes.func,
    columnWidth: PropTypes.number,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    usuariosCount: PropTypes.number,
    style: PropTypes.object,
    gridStyle: PropTypes.object,
    loading: PropTypes.bool,
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
      style,
      gridStyle,
      loading,
    } = this.props
    return (
      <div style={Object.assign({}, styles.container, style)}>
        {
          loading ?
            <MDSpinner />
          :
            <div>
              <Grid
                component="div"
                columnWidth={columnWidth}
                gutterWidth={20}
                gutterHeight={20}
                layout={layout.pinterest}
                duration={200}
                easing="ease-out"
                style={gridStyle}
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
        }
      </div>
    )
  }
}

export default GridUsuarios;
