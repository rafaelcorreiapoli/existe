import React, { PropTypes } from 'react'
import CircleNumber from '@components/CircleNumber'
import { getFuncaoLabelByValue } from '@utils/labels'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 200,
  },
  imagemContainer: {

  },
  imagem: {
    width: 200,
    height: 200,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  footerRow: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    justifyContent: 'center',
  },
  nome: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  funcao: {
    marginLeft: 5,
    maxWidth: 200 - 5 - 28,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
  },
}
class ComunidadeUsuario extends React.Component {
  static propTypes = {
    imagem: PropTypes.string,
    nome: PropTypes.string,
    funcao: PropTypes.string,
    projetosCount: PropTypes.number,
    style: PropTypes.object,
  }
  render() {
    const {
      imagem,
      nome,
      funcao,
      projetosCount,
      style,
    } = this.props

    return (
      <div style={Object.assign({}, styles.container, style)}>
        <div style={styles.imagemContainer}>
          <img src={imagem} style={styles.imagem} alt={nome} />
        </div>
        <div style={styles.infoContainer}>
          <span style={styles.nome}>{nome}</span>
          <div style={styles.footerRow}>
            <CircleNumber
              number={projetosCount}
              borderColor="black"
            />
            <span style={styles.funcao}>{getFuncaoLabelByValue(funcao)}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ComunidadeUsuario;
