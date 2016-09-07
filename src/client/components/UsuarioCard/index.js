import React, { PropTypes } from 'react'
import styles from './styles'
import { Paper } from 'material-ui';
import { Usuarios } from '../../resources/icons';
import CircleNumber from '../CircleNumber';
import RatingStars from '../RatingStars';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import UsuarioAvatar from '../UsuarioAvatar'

const Subtitle = ({
  numeroProjetos,
  cidade,
  estado,
  cargo
}) => (
  <div styles={styles.row}>
    <CircleNumber
      style={{marginRight: 10}}
      number={numeroProjetos} />
    <span style={styles.cargo}>{cargo}</span>
    <span style={{marginLeft: 10, marginRight: 10}}>{'|'}</span>
    <span style={styles.cidade}>
      {cidade}, {estado}
    </span>
  </div>
)
const UsuarioCard = ({
  foto,
  nome,
  area,
  projetosFeitos,
  cidade,
  estado,
  seguindo,
  mediaAvaliacao,
  numeroProjetos,
  numeroAvaliacoes,
  numeroSeguidores,
  mostrarAvaliacoes,
  mostrarSeguidores,
  cargo,
  style,
  ...props
}) => {
  return (
    <Card style={Object.assign({},{ width: '100%' }, style)} zDepth={0} {...props}>
      <CardMedia>
        <UsuarioAvatar
          image={foto}
          area={area}
        />
      </CardMedia>

      <CardTitle
        title={nome}
        style={{paddingTop: 10, paddingLeft: 0, paddingRight: 0, paddingBottom: 0}}
        titleStyle={styles.title}
        subtitle={
          <Subtitle
            cidade={cidade}
            estado={estado}
            numeroProjetos={numeroProjetos}
            cargo={cargo}/>
        } />
        <CardActions style={{}}>
        {
          mostrarAvaliacoes ?
          <div style={{textAlign: 'center', marginBottom: 15}}>
            <RatingStars rating={mediaAvaliacao} style={{marginBottom: 5}}/>
            <span>{numeroAvaliacoes} AVALIAÇÕES</span>
          </div>
          : null
        }
        {
          mostrarSeguidores ?
          <div style={styles.row}>
            <span>{numeroSeguidores}</span>
            <Usuarios style={{marginLeft: 20, marginRight: 20}}/>
            <span>Seguidores</span>
          </div>
          : null
        }
      </CardActions>
    </Card>
  )
}

export default UsuarioCard
