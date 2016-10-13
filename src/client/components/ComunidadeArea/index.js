import React, { PropTypes } from 'react'
import { getColorForArea } from '@utils/get_color'
import { SetaDireita } from '@resources/icons'
import UsuariosCarousel from '@components/UsuariosCarousel'

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
class ComunidadeArea extends React.Component {
  static propTypes = {
    area: PropTypes.string,
    usuarios: PropTypes.array,
  }

  render() {
    const {
      area,
      usuarios,
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
          <SetaDireita color={color} />
        </div>


        <div style={styles.usuariosContainer}>
          <UsuariosCarousel
            usuarios={usuarios}
          />
        </div>
      </div>
    )
  }
}

export default ComunidadeArea;
