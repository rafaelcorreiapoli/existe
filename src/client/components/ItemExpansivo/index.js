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
  subtituloContainer: {
    flexGrow: 1
  },
  bodyContainer: {
    marginTop: 20,
  },
  bodyContainerContraido: {
    maxWidth: 600,
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  titulo: {
    marginRight: 10,
  },
  seguidores: {
    marginLeft: 10,
    marginRight: 10,
  },
  colaboradores: {
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
    titulo: PropTypes.string,
    subtitulo: PropTypes.string,
    imagem: PropTypes.string,
    seguidoresCount: PropTypes.number,
    colaboradoresCount: PropTypes.number,
    data: PropTypes.object,
    hideSeguidores: PropTypes.bool,
    hideDeixarDeSeguir: PropTypes.bool,
    hideColaboradores: PropTypes.bool,
    body: PropTypes.element,

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

    if (!expandido) {
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
      titulo,
      subtitulo,
      imagem,
      seguidoresCount,
      colaboradoresCount,
      deixarDeSeguir,
      data,
      children,
      hideSeguidores,
      hideColaboradores,
      hideDeixarDeSeguir,
      body,
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
            <span style={styles.titulo}>{titulo}</span>
            <VerticalDivider />
            {this.renderExpandidoToggle()}
            <VerticalDivider />
            {
              !hideColaboradores &&
                <span style={styles.colaboradores}>
                  {colaboradoresCount} COLABORADORES
                </span>
            }
            {!hideColaboradores && <VerticalDivider /> }
            {
              !hideSeguidores &&
                <span style={styles.seguidores}>
                  {seguidoresCount} SEGUIDORES
                </span>
            }
            {!hideSeguidores && <VerticalDivider /> }
            {
              !hideDeixarDeSeguir &&
                <span style={styles.deixarDeSeguir} onClick={deixarDeSeguir}>
                  DEIXAR DE SEGUIR
                </span>
            }
            {!hideDeixarDeSeguir && <VerticalDivider /> }
          </div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={styles.subtituloContainer}>
              <span style={styles.subtitulo}>
                {subtitulo}
              </span>
              {
                body &&
                  <div style={Object.assign({}, styles.bodyContainer, expandido ? {} : styles.bodyContainerContraido)}>
                    {body}
                  </div>
              }
            </div>


            <div style={styles.dateContainer}>
              <FromNow date={data} />
            </div>
          </div>

          <div style={styles.children}>
            {
              expandido && children
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ItemExpansivo;
