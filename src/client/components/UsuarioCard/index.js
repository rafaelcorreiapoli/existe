import React, { PropTypes } from 'react'
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import { Usuarios } from '@resources/icons';
import CircleNumber from '@components/CircleNumber';
import RatingStars from '@components/RatingStars';
import UsuarioAvatar from '@components/UsuarioAvatar'
import { ACCENT } from '@resources/colors'

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seguindoRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    width: '100%',
    marginBottom: 10,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  profissao: {
    fontSize: 14,
    textTransform: 'uppercase',
  },
  cidade: {
    fontSize: 14,
  },
  seguindoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  seguindoText: {
    fontSize: 12,
    color: 'gray',
  },
  seguindoCount: {
    fontSize: 16,
    marginBottom: 5,
    color: 'gray',
  },
  seguindoHighlighted: {
    color: 'black',
  },
}


const Subtitle = ({
  projetosCount,
  cidade,
  estado,
  funcao,
}) => (
  <div style={styles.row}>
    <CircleNumber
      style={{ marginRight: 10 }}
      number={projetosCount}
    />
    <span style={styles.funcao}>{funcao}</span>
    <span style={{ marginLeft: 10, marginRight: 10 }}>{'|'}</span>
    <span style={styles.cidade}>
      {cidade}, {estado}
    </span>
  </div>
)
Subtitle.propTypes = {
  projetosCount: PropTypes.number,
  cidade: PropTypes.string,
  estado: PropTypes.string,
  funcao: PropTypes.string,
}

class UsuarioCard extends React.Component {
  static propTypes = {
    foto: PropTypes.string,
    nome: PropTypes.string,
    area: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    funcao: PropTypes.string,
    seguindo: PropTypes.bool,
    mediaAvaliacoes: PropTypes.number,
    projetosCount: PropTypes.number,
    numeroAvaliacoes: PropTypes.number,
    numeroSeguidores: PropTypes.number,
    numeroSeguindo: PropTypes.number,
    mostrarAvaliacoes: PropTypes.bool,
    mostrarSeguidores: PropTypes.bool,
    seguidoresHighlighted: PropTypes.bool,
    seguindoHighlighted: PropTypes.bool,
    style: PropTypes.object,
  }

  render() {
    const {
      foto,
      nome,
      area,
      cidade,
      estado,
      seguindo,
      mediaAvaliacoes,
      projetosCount,
      numeroAvaliacoes,
      numeroSeguidores,
      numeroSeguindo,
      mostrarAvaliacoes,
      mostrarSeguidores,
      seguidoresHighlighted,
      seguindoHighlighted,
      funcao,
      style,
      ...props,
    } = this.props

    console.log(seguidoresHighlighted, seguindoHighlighted)
    return (
      <Card style={Object.assign({}, { width: '100%' }, style)} zDepth={0}>
        <CardMedia>
          <UsuarioAvatar
            image={foto}
            area={area}
          />
        </CardMedia>

        <CardTitle
          title={nome}
          style={{ paddingTop: 10, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
          titleStyle={styles.title}
          subtitle={
            <Subtitle
              cidade={cidade}
              estado={estado}
              projetosCount={projetosCount}
              funcao={funcao}
            />
          }
        />
        <CardActions>
          {
            mostrarAvaliacoes ?
              <div style={{ textAlign: 'center', marginBottom: 15 }}>
                <RatingStars rating={mediaAvaliacoes} style={{ marginBottom: 5 }} />
                <span>{numeroAvaliacoes} AVALIAÇÕES</span>
              </div>
              : null
          }
          {
            mostrarSeguidores ?
              <div style={styles.seguindoRow}>
                <div style={styles.seguindoContainer}>
                  <span
                    style={Object.assign(
                      {},
                      styles.seguindoCount,
                      seguindoHighlighted ? styles.seguindoHighlighted : {}
                    )}
                  >
                    {numeroSeguindo || 0}
                  </span>
                  <span style={styles.seguindoText}>
                    seguindo
                  </span>
                </div>
                <div style={styles.seguindoContainer}>
                  <span
                    style={Object.assign(
                      {},
                      styles.seguindoCount,
                      seguidoresHighlighted ? styles.seguindoHighlighted : {}
                    )}
                  >
                    {numeroSeguidores || 0}
                  </span>
                  <span style={styles.seguindoText}>
                    seguidores
                  </span>
                </div>
                {/* <span>{numeroSeguidores}</span>
                <Usuarios style={{ marginLeft: 20, marginRight: 20 }} />
                <span>Seguidores</span> */}
              </div>
              : null
          }
        </CardActions>
      </Card>
    )
  }
}


export default UsuarioCard
