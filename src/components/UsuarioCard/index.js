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
      style={{marginRight: 20}}
      number={numeroProjetos} />
    <span>{cargo}</span>
    <span style={{marginLeft: 20, marginRight: 20}}>{'|'}</span>
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
  cargo
}) => {
  return (
    <Card style={{minWidth: 0, width: 300, backgroundColor: '#fafafa'}}>
      <CardMedia>
        <UsuarioAvatar
          image={foto}
          area={area}
        />
      </CardMedia>

      <CardTitle
        title={nome}
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
          <div style={{textAlign: 'center', marginBottom: 20}}>
            <RatingStars
              rating={mediaAvaliacao}
              />
            <span>{numeroAvaliacoes} Avaliações</span>
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
