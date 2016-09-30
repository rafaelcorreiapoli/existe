import React, { PropTypes } from 'react'
import CircleNumber from '@components/CircleNumber'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imagemContainer: {

  },
  imagem: {
    width: 150,
    height: 150,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  footerRow: {
    alignItems: 'center',
  },
  nome: {
    textAlign: 'center',
  },
  funcao: {
    marginLeft: 5,
  },
}
class ComunidadeUsuario extends React.Component {
  static propTypes = {
    imagem: PropTypes.string,
    nome: PropTypes.string,
    funcao: PropTypes.string,
    projetosCount: PropTypes.number,
  }
  render() {
    const {
      imagem,
      nome,
      funcao,
      projetosCount,
    } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.imagemContainer}>
          <img src={imagem} style={styles.imagem} />
        </div>
        <div style={styles.infoContainer}>
          <span style={styles.nome}>{nome}</span>
          <div style={styles.footerRow}>
            <CircleNumber
              number={projetosCount}
              borderColor="black"
            />
            <span style={styles.funcao}>{funcao}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ComunidadeUsuario;
