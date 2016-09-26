import React, { PropTypes } from 'react'
import moment from 'moment'
import Radium from 'radium'

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
  dataContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  imagem: {
    display: 'block',
    width: 100,
    height: 100,
  },
  titulo: {
    marginTop: 0,
    marginBottom: 20,
    fontSize: 18,
  },
  subtitulo: {
    margin: 0,
    color: '#555',
  },
  data: {
    color: 'gray',
  },
}

class FeedItem extends React.Component {
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
      iconElement,
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
          {React.cloneElement(iconElement, {
            style: {
              width: 40,
              height: 40,
            },
          })}
        </div>
        <div style={styles.textContainer}>
          <span style={styles.titulo}>{titulo}</span>
          <span style={styles.subtitulo}>{subtitulo}</span>
        </div>
        <div style={styles.dataContainer}>
          <span style={styles.data}>{moment(data).fromNow()}</span>
        </div>
      </div>
    )
  }
}

export default FeedItem
