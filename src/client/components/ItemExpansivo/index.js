import React, { PropTypes } from 'react'
import FromNow from '@components/FromNow'
import IconButton from 'material-ui/IconButton'
import Badge from 'material-ui/Badge';
import VerticalDivider from '@components/VerticalDivider'

import {
  SetaDireita,
  SetaBaixo,
} from '@resources/icons'
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagemContainer: {
    alignSelf: 'flex-start',
  },
  mainContainer: {
    flexGrow: 1,
    padding: 10,
    alignSelf: 'flex-start'
  },
  dateContainer: {

  },
  textRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nomeUsuarioContainer: {
    flexGrow: 1
  },
  nome: {
    marginRight: 10,
  },
  seguidores: {
    marginLeft: 10,
    marginRight: 10,
  },
  deixarDeSeguir: {
    marginLeft: 10,
    marginRight: 10,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  children: {
    marginTop: 20,
  }
}
class ItemExpansivo extends React.Component {
  static propTypes = {
    badgeCount: PropTypes.number,
    nome: PropTypes.string,
    nomeUsuario: PropTypes.string,
    imagem: PropTypes.string,
    seguidoresCount: PropTypes.number,
    data: PropTypes.object,

    deixarDeSeguir: PropTypes.func,
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)

    this.state = {
      expandido: false,
    }

    this.toggleExpandido = this.toggleExpandido.bind(this)
  }

  toggleExpandido() {
    this.setState({
      expandido: !this.state.expandido,
    })
  }

  renderExpandidoToggle() {
    const {
      expandido,
    } = this.state

    if (expandido) {
      return (
        <IconButton onTouchTap={this.toggleExpandido}>
          <SetaDireita />
        </IconButton>
      )
    } else {
      return (
        <IconButton onTouchTap={this.toggleExpandido}>
          <SetaBaixo />
        </IconButton>
      )
    }
  }
  render() {
    const {
      badgeCount,
      nome,
      nomeUsuario,
      imagem,
      seguidoresCount,
      deixarDeSeguir,
      data,
      children,
    } = this.props
    const {
      expandido,
    } = this.state

    return (
      <div style={styles.container}>

        <div style={styles.imagemContainer}>
          <Badge
            primary
            badgeContent={badgeCount}
            >
            <img src={imagem} style={styles.imagem} />
          </Badge>
        </div>

        <div style={styles.mainContainer}>

          <div style={styles.textRow}>
            <span style={styles.nome}>{nome}</span>
            <VerticalDivider />
            {this.renderExpandidoToggle()}
            <VerticalDivider />
            <span style={styles.seguidores}>
              {seguidoresCount} SEGUIDORES
            </span>
            <VerticalDivider />
            <span style={styles.deixarDeSeguir} onClick={deixarDeSeguir}>
              DEIXAR DE SEGUIR
            </span>
            <VerticalDivider />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={styles.nomeUsuarioContainer}>
              <span style={styles.nomeUsuario}>
                {nomeUsuario}
              </span>
            </div>

            <div style={styles.dateContainer}>
              <FromNow date={data} />
            </div>
          </div>

          <div style={styles.children}>
            {
              !expandido && children
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ItemExpansivo;
