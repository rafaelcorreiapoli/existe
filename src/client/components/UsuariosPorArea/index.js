/**
 * DEPRECATED
 */

import React, { PropTypes } from 'react'
import { getColorForArea } from '@utils/get_color'
import { SetaDireita } from '@resources/icons'
import UsuariosCarousel from '@components/UsuariosCarousel'
import IconButton from 'material-ui/IconButton'

const styles = {
  container: {
    padding: 10,
  },
  area: {
    fontSize: 20,
  },
  areaContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
}
class UsuariosPorArea extends React.Component {
  static propTypes = {
    area: PropTypes.string,
    usuarios: PropTypes.array,
    usuariosCount: PropTypes.number,
    onPageChange: PropTypes.func,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    loading: PropTypes.bool,
    onClickTitle: PropTypes.func,
  }

  render() {
    const {
      area,
      usuarios,
      usuariosCount,
      onPageChange,
      page,
      pageSize,
      loading,
      onClickTitle,
    } = this.props

    const color = getColorForArea(area)

    const areaColor = {
      color,
    }
    const labels = {
      texto: 'Texto',
      imagem: 'Imagem',
      audio: 'Áudio',
      cena: 'Cena',
      producao: 'Produção',
    }

    return (
      <div style={styles.container}>
        <div style={styles.areaContainer}>
          <span style={Object.assign({}, styles.area, areaColor)}>
            {labels[area]}
          </span>
          <IconButton
            tooltip="Ver mais"
            onTouchTap={onClickTitle}
          >
            <SetaDireita color={color} />
          </IconButton>
        </div>


        <div style={styles.usuariosContainer}>
          <UsuariosCarousel
            loading={loading}
            usuariosCount={usuariosCount}
            usuarios={usuarios}
            onPageChange={onPageChange}
            page={page}
            pageSize={pageSize}
          />
        </div>
      </div>
    )
  }
}

export default UsuariosPorArea;
