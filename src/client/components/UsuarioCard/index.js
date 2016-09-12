import React, { PropTypes } from 'react'
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import { Usuarios } from '@resources/icons';
import CircleNumber from '@components/CircleNumber';
import RatingStars from '@components/RatingStars';
import UsuarioAvatar from '@components/UsuarioAvatar'
import styles from './styles'


const Subtitle = ({
  numeroProjetos,
  cidade,
  estado,
  profissao,
}) => (
  <div styles={styles.row}>
    <CircleNumber
      style={{ marginRight: 10 }}
      number={numeroProjetos}
    />
    <span style={styles.profissao}>{profissao}</span>
    <span style={{ marginLeft: 10, marginRight: 10 }}>{'|'}</span>
    <span style={styles.cidade}>
      {cidade}, {estado}
    </span>
  </div>
)
Subtitle.propTypes = {
  numeroProjetos: PropTypes.number,
  cidade: PropTypes.string,
  estado: PropTypes.string,
  profissao: PropTypes.string,
}

class UsuarioCard extends React.Component {
  static propTypes = {
    foto: PropTypes.string,
    nome: PropTypes.string,
    area: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    profissao: PropTypes.string,
    seguindo: PropTypes.bool,
    mediaAvaliacoes: PropTypes.number,
    numeroProjetos: PropTypes.number,
    numeroAvaliacoes: PropTypes.number,
    numeroSeguidores: PropTypes.number,
    mostrarAvaliacoes: PropTypes.bool,
    mostrarSeguidores: PropTypes.bool,
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
      numeroProjetos,
      numeroAvaliacoes,
      numeroSeguidores,
      mostrarAvaliacoes,
      mostrarSeguidores,
      profissao,
      style,
      ...props,
    } = this.props

    return (
      <Card style={Object.assign({}, { width: '100%' }, style)} zDepth={0} {...props}>
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
              numeroProjetos={numeroProjetos}
              profissao={profissao}
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
              <div style={styles.row}>
                <span>{numeroSeguidores}</span>
                <Usuarios style={{ marginLeft: 20, marginRight: 20 }} />
                <span>Seguidores</span>
              </div>
              : null
          }
        </CardActions>
      </Card>
    )
  }
}


export default UsuarioCard
