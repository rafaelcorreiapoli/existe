import React, { PropTypes } from 'react'
import moment from 'moment'
import { Bookmark } from '@resources/icons'
import FromNow from '@components/FromNow'
import { ACCENT } from '@resources/colors'
import { Close } from '@resources/icons'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  imagemContainer: {
    width: 100,
  },
  iconContainer: {
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    padding: 10,
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  dataContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  excluirButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    //  justifyContent: 'center'
  },
  imagem: {
    display: 'block',
    width: 100,
    height: 100,
  },
  excluir: {
    color: ACCENT,
  },
  titulo: {
    marginTop: 0,
    marginBottom: 20,
    fontSize: 18,
  },
  subtitulo: {
    margin: 0,
    fontWeight: 'bold',
    color: 'black',
  },
  data: {
    color: 'gray',
  },
}

class SalvosItem extends React.Component {
  static propTypes = {
    imagem: PropTypes.string,
    iconElement: PropTypes.element,
    titulo: PropTypes.string,
    subtitulo: PropTypes.string,
    data: PropTypes.object,
    style: PropTypes.object,
  }

  render() {
    const {
      imagem,
      titulo,
      subtitulo,
      data,
      style,
    } = this.props

    return (
      <div style={Object.assign({}, styles.container, style)}>
        <div style={styles.imagemContainer}>
          <img src={imagem} style={styles.imagem} />
        </div>
        <div style={styles.iconContainer}>
          <Bookmark />
        </div>
        <div style={styles.textContainer}>
          <span style={styles.titulo}>{titulo}</span>
          <span style={styles.subtitulo}>{subtitulo}</span>
        </div>
        <div style={styles.actionsContainer}>
          <div style={styles.excluirButton}>
            <Close color={ACCENT} />
            <span style={styles.excluir}>
              Excluir
            </span>
          </div>
          <div style={styles.dataContainer}>
            <span style={styles.data}>
              Salvo no dia {moment(data).format('DD/MM/YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default SalvosItem
