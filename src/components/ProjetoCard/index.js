import React, { PropTypes } from 'react'
import IconButton from '../IconButton'
import NumberIcon from '../NumberIcon';
import Radium from 'radium';
import { Icon } from 'react-fa';
import styles from './styles';
import { Image } from 'react-bootstrap';


const CRIACAO = 0;
const DESENVOLVIMENTO = 1;
const PRODUCAO = 2;
const POS_PRODUCAO = 3;

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
      <div style={styles.iconsContainer}>
        <IconButton
          containerStyle={{borderBottomWidth: 0}}
          icon='circle'
          backgroundColor='white'
          iconColor={temVagas? '#e36a55' : 'black'} />
        <IconButton
          containerStyle={{borderBottomWidth: 0}}
          icon='info-circle'
          backgroundColor='black'
          iconColor='white' />
        <IconButton
          containerStyle={{borderColor: 'black'}}
          icon='home'
          backgroundColor='white'
          iconColor='black' />
        {
          trending && <IconButton
          containerStyle={{borderBottomWidth: 0,borderColor: 'white'}}
          icon='line-chart'
          backgroundColor='#e36a55'
          iconColor='white' />
        }
        {
          colaborando && <IconButton
          containerStyle={{borderBottomWidth: 0,borderColor: 'white'}}
          icon='refresh'
          backgroundColor='#d3d3d3'
          iconColor='white' />
        }
        {
          seguindo && <IconButton
          containerStyle={{borderBottomWidth: 0,borderColor: 'white'}}
          icon='users'
          backgroundColor='#d3d3d3'
          iconColor='white' />
        }
        {
          favoritou && <IconButton
          containerStyle={{borderBottomWidth: 0,borderColor: 'white'}}
          icon='star'
          backgroundColor='#d3d3d3'
          iconColor='white' />
        }
        {
          salvou && <IconButton
          containerStyle={{borderBottomWidth: 0,borderColor: 'white'}}
          icon='flag'
          backgroundColor='#d3d3d3'
          iconColor='white' />
        }
        {
          marcado && <IconButton
            containerStyle={{borderBottomWidth: 0,borderColor: 'white'}}
            icon='tag'
            backgroundColor='#d3d3d3'
            iconColor={marcadoNovo ? '#e36a55' : 'white'} />
        }
        {
          convidado && <IconButton
            containerStyle={{borderColor: 'white'}}
            icon='comment'
            backgroundColor='#d3d3d3'
            iconColor={convidadoNovo ? '#e36a55' : 'white'} />
        }

      </div>
      <div style={styles.mainContainer}>
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
      </div>

    </div>
  )
}

export default Radium(ProjetoCard)
