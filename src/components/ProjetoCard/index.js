import React, { PropTypes } from 'react'
import IconButton from '../IconButton'
import NumberIcon from '../NumberIcon';
import Radium from 'radium';
import { Icon } from 'react-fa';
import styles from './styles';
import { Image } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/content/add-circle-outline';

const CRIACAO = 0;
const DESENVOLVIMENTO = 1;
const PRODUCAO = 2;
const POS_PRODUCAO = 3;

import { Likes, Usuarios, Trending, ExisteOficial, ComVagas, Colaborando, Seguindo, Favorito, Salvo, Marcacao, Convite, Comentarios } from '../../resources/icons';

const ProjetoCard = ({
  temVagas,
  numeroColaboradores,
  nome,
  nomeUsuario,
  data,
  numeroUsers,
  numeroComentarios,
  numeroLikes,
  trending,
  colaborando,
  seguindo,
  favoritou,
  salvou,
  marcado,
  marcadoNovo,
  convidado,
  convidadoNovo,
  status,
  image
}) => {
  let iconStatus;
  switch(status) {
    case CRIACAO: iconStatus = 'spinner'; break;
    case DESENVOLVIMENTO: iconStatus = 'check-circle-o'; break;
    case PRODUCAO: iconStatus = 'play-circle-o'; break;
    case POS_PRODUCAO: default: iconStatus = 'clock-o'; break;
  }

  return (
    <div style={[styles.container]}>
      <div style={[styles.iconsContainer, {marginRight: 2}]}>
        <IconButton
          containerStyle={{borderBottomWidth: 0}}
          icon={<ComVagas />}
          backgroundColor='white'
          iconColor={temVagas? '#e36a55' : 'black'} />
        <IconButton
          containerStyle={{borderBottomWidth: 0}}
          icon={<ExisteOficial />}
          backgroundColor='black'
          iconColor='white' />
        <IconButton
          containerStyle={{borderColor: 'black'}}
          icon={<ExisteOficial />}
          backgroundColor='white'
          iconColor='black' />
        {
          trending && <IconButton
          icon={<Trending />}
          backgroundColor='#e36a55'
          iconColor='white' />
        }
        {
          colaborando && <IconButton
          icon={ <Colaborando /> }
          backgroundColor='#b4baba'
          iconColor='white' />
        }
        {
          seguindo && <IconButton
          icon={ <Seguindo /> }
          backgroundColor='#b4baba'
          iconColor='white' />
        }
        {
          favoritou && <IconButton
          icon={ <Favorito /> }
          backgroundColor='#b4baba'
          iconColor='white' />
        }
        {
          salvou && <IconButton
          icon={ <Salvo /> }
          backgroundColor='#b4baba'
          iconColor='white' />
        }
        {
          marcado && <IconButton
            icon={ <Marcacao /> }
            backgroundColor='#f5f5f5'
            iconColor={marcadoNovo ? '#e36a55' : '#b3baba'} />
        }
        {
          convidado && <IconButton
            icon={ <Convite /> }
            backgroundColor='#f5f5f5'
            iconColor={convidadoNovo ? '#e36a55' : '#b3baba'} />
        }

      </div>
      {/*<div style={styles.mainContainer}>
        <Image src={image} style={styles.image}/>
        <div style={styles.topAreaContainer}>
          <Icon name={iconStatus} />
          <span style={styles.colaboradores.numero}>{numeroColaboradores}</span>
          <span style={styles.colaboradores.texto}>Colaboradores</span>
        </div>
        <div style={styles.bottomAreaContainer}>
          <span style={styles.projeto.nome}>{nome}</span>
          <span style={styles.projeto.row}>
            <span style={styles.projeto.usuario}>{nomeUsuario}</span>{' '}
            <span style={styles.projeto.data}>{data}</span>
          </span>
          <div style={styles.footerAreaContainer}>
            <NumberIcon
              icon="users"
              number={numeroUsers}
            />
            <NumberIcon
              icon="comment"
              number={numeroComentarios}
            />
            <NumberIcon
              icon="heart"
              iconColor='#e36a55'
              number={numeroLikes}
            />
          </div>
        </div>
      </div>*/}
      <Card style={{minWidth: 0, backgroundColor: '#fafafa'}}>
        <CardMedia
          overlay={
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20}}>
              <CardTitle
                titleStyle={{color: 'white'}}
                subtitleStyle={{color: 'white'}}
                title={numeroColaboradores}
                subtitle="Colaboradores" />
              <ActionAndroid style={{color: 'white'}}/>
            </div>
          }
        >
          <img src={image} />
        </CardMedia>
        <CardTitle
          title={nome}
          titleStyle={{width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
          subtitle={
            <span>
              <span style={{color: '#e36a55'}}>{nomeUsuario}</span>

              <span> - {data}</span>
            </span>} />
        <CardActions style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <NumberIcon
            icon={ <Usuarios /> }
            iconColor='#b4baba'
            number={numeroUsers}
          />
          <NumberIcon
            icon={ <Comentarios /> }
            iconColor='#b4baba'
            number={numeroComentarios}
          />
          <NumberIcon
            icon={ <Likes /> }
            iconColor='#e36a55'
            number={numeroLikes}
          />
        </CardActions>
      </Card>
    </div>
  )
}

export default Radium(ProjetoCard)
