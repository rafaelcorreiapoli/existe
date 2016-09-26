import React, { PropTypes } from 'react'
import FromNow from '@components/FromNow'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  imagemContainer: {
    padding: 10,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  dataContainer: {
    padding: 10,
  },
  textoContainer: {
    padding: 10,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  texto: {

  },
}
class Mensagem extends React.Component {
  static propTypes = {
    imagem: PropTypes.string,
    texto: PropTypes.string,
    data: PropTypes.object,
  }
  render() {
    const {
      imagem,
      texto,
      data,
    } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.imagemContainer}>
          <img src={imagem} style={styles.imagem} />
        </div>
        <div style={styles.mainContainer}>
          <div style={styles.dataContainer}>
            <FromNow
              data={data}
            />
          </div>
          <div style={styles.textoContainer}>
            <span style={styles.texto}>
              {texto}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Mensagem;
