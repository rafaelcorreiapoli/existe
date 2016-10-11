import React, { PropTypes } from 'react'
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import { Usuarios } from '@resources/icons';
import CircleNumber from '@components/CircleNumber';
import RatingStars from '@components/RatingStars';
import UsuarioAvatar from '@components/UsuarioAvatar'
import { ACCENT } from '@resources/colors'
import FlatButton from 'material-ui/FlatButton'

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
    //  color: 'black',
  },
  seguindoCount: {
    fontSize: 16,
    marginBottom: 5,
    //  color: 'black',
  },
  highlighted: {
    color: 'gray',
  },
  avaliacoesContainer: {
    textAlign: 'center',
    marginBottom: 15,
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
    _id: PropTypes.string,
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
    avaliacoesHighlighted: PropTypes.bool,
    style: PropTypes.object,
    onAvaliacoesClick: PropTypes.func,
    onSeguidoresClick: PropTypes.func,
    onSeguindoClick: PropTypes.func,
  }

  render() {
    const {
      _id,
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
      avaliacoesHighlighted,
      onAvaliacoesClick,
      onSeguindoClick,
      onSeguidoresClick,
      funcao,
      style,
      ...props,
    } = this.props


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
              <div
                style={Object.assign({},
                  styles.avaliacoesContainer,
                  avaliacoesHighlighted && styles.highlighted,
                )}
              >
                <RatingStars
                  rating={mediaAvaliacoes}
                  style={{ marginBottom: 5 }}
                  color={avaliacoesHighlighted ? 'gray' : 'black'}
                />
                <FlatButton
                  onTouchTap={() => onAvaliacoesClick(_id)}
                  label={`${numeroAvaliacoes} AVALIAÇÕES`}
                />
              </div>
              : null
          }
          {
            mostrarSeguidores ?
              <div style={styles.seguindoRow}>
                <div
                  style={Object.assign({},
                  styles.seguindoContainer,
                  seguindoHighlighted ? styles.highlighted : {})}
                >
                  <FlatButton
                    onTouchTap={() => onSeguindoClick(_id)}
                    label={`${numeroSeguindo || 0}`}
                  />
                  <span style={styles.seguindoText}>
                    seguindo
                  </span>
                </div>
                <span
                  style={Object.assign({},
                  styles.seguindoContainer,
                  seguidoresHighlighted ? styles.highlighted : {})}
                >
                  <FlatButton
                    onTouchTap={() => onSeguidoresClick(_id)}
                    label={`${numeroSeguidores || 0}`}
                  />
                  <span style={styles.seguindoText}>
                    seguidores
                  </span>
                </span>
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
