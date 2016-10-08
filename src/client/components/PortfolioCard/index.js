import React, { PropTypes } from 'react'
import Divider from 'material-ui/Divider'
import {
  Likes,
  Visualizacoes,
} from '@resources/icons'

const styles = {
  container: {
    border: '1px solid #eee',
    display: 'inline-flex',
    flexDirection: 'column',
  },
  imagem: {
    display: 'block',
    width: 200,
    height: 160,
  },
  bodyContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 40,
  },
  by: {
    color: '#aaa',
  },
  descricao: {
    color: '#aaa',
    marginBottom: 5,
  },
  nomeUsuario: {
    color: 'initial',
    fontWeight: 'bold',
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  countContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 15,
    alignItems: 'center',
  },
  countIcon: {
    color: '#333',
    marginRight: 5,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#d3d3d3',
    padding: '5px 10px 5px 10px',
  },
}
class PortfolioCard extends React.Component {
  static propTypes = {
    imagem: PropTypes.string,
    nome: PropTypes.string,
    nomeUsuario: PropTypes.string,
    descricao: PropTypes.string,
    likesCount: PropTypes.number,
    visualizacoesCount: PropTypes.number,
  }
  render() {
    const {
      imagem,
      nome,
      nomeUsuario,
      descricao,
      likesCount,
      visualizacoesCount,
    } = this.props
    return (
      <div style={styles.container}>
        <img src={imagem} style={styles.imagem} alt={nome} />
        <div style={styles.bodyContainer}>
          <span style={styles.nome}>
            {nome}
          </span>
          <span style={styles.by}>
            by <span style={styles.nomeUsuario}>{nomeUsuario}</span>
          </span>
          <Divider style={styles.divider} />
          <span style={styles.descricao}>
            {descricao}
          </span>
        </div>
        <div style={styles.footerContainer}>
          <div style={styles.countContainer}>
            <Likes color="#999" style={styles.countIcon} />
            <span style={styles.countText}>{likesCount}</span>
          </div>
          <div style={styles.countContainer}>
            <Visualizacoes color="#999" style={styles.countIcon} />
            <span style={styles.countText}>{visualizacoesCount}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioCard;
