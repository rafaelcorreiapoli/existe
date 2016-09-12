import React, { PropTypes } from 'react'
import Radium from 'radium'
import UsuarioAvatar from '../../components/UsuarioAvatar'
import CircleNumber from '../../components/CircleNumber'
import { getColorForArea } from '@utils/get_color'
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  fotoContainer: {
    width: 150,
  },
  rightInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    flexGrow: 1,
  },
  circleRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-around',
    flexWrap: 'wrap',
  },
  circleNumber: {
    marginRight: 5,
  },
  circleNumberLast: {
    marginRight: 15,
  },
}

class PerfilInfo extends React.Component {
  static propTypes = {
    textoCount: PropTypes.number,
    imagemCount: PropTypes.number,
    audioCount: PropTypes.number,
    cenaCount: PropTypes.number,
    producaoCount: PropTypes.number,
    totalCount: PropTypes.number,
    image: PropTypes.string,
    area: PropTypes.string,
    nome: PropTypes.string,
    style: PropTypes.object,
    avatarStyle: PropTypes.object,
  }

  render() {
    const {
      textoCount = 0,
      imagemCount = 0,
      audioCount = 0,
      cenaCount = 0,
      producaoCount = 0,
      totalCount = 0,
      image,
      area,
      nome,
      style,
      avatarStyle,
      ...props,
    } = this.props

    return (
      <div style={[styles.container, style]} {...props}>
        <div style={styles.fotoContainer}>
          <UsuarioAvatar
            style={{ width: 150, ...avatarStyle }}
            image={image}
            area={area}
          />
        </div>
        <div style={styles.rightInfoContainer}>
          <h3>{nome}</h3>
          <div style={styles.circleRow}>
            <CircleNumber
              borderColor={getColorForArea('texto')}
              number={textoCount}
              style={styles.circleNumber}
            />
            <CircleNumber
              borderColor={getColorForArea('imagem')}
              number={imagemCount}
              style={styles.circleNumber}
            />
            <CircleNumber
              borderColor={getColorForArea('audio')}
              number={audioCount}
              style={styles.circleNumber}
            />
            <CircleNumber
              borderColor={getColorForArea('cena')}
              number={cenaCount}
              style={styles.circleNumber}
            />
            <CircleNumber
              borderColor={getColorForArea('producao')}
              number={producaoCount}
              style={styles.circleNumberLast}
            />
            <CircleNumber
              borderColor={'black'}
              number={totalCount}
              style={styles.circleNumber}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(PerfilInfo)
