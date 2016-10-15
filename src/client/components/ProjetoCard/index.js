import React, { PropTypes } from 'react'
import IconButton from '@components/IconButton'
import NumberIcon from '@components/NumberIcon';
import Radium from 'radium';
import moment from 'moment'
import { getIconParaCategoria } from '@utils/get_icon'
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
} from 'material-ui/Card';
import {
  Likes,
  Usuarios,
  Trending,
  ExisteOficial,
  ComVagas,
  Colaborando,
  Seguindo,
  Favorito,
  Salvo,
  Marcacao,
  Convite,
  Comentarios,
  EmCriacao,
  EmDesenvolvimento,
  EmProducao,
  EmPosProducao,
} from '@resources/icons';

import styles from './styles';


class ProjetoCard extends React.Component {
  static propTypes = {
    temVagas: PropTypes.bool,
    nome: PropTypes.string,
    criadorUsuario: PropTypes.string,
    data: PropTypes.object,
    countColaboradores: PropTypes.number,
    countSeguidores: PropTypes.number,
    countComentarios: PropTypes.number,
    countLikes: PropTypes.number,
    trending: PropTypes.bool,
    colaborando: PropTypes.bool,
    seguindo: PropTypes.bool,
    favoritou: PropTypes.bool,
    salvou: PropTypes.bool,
    marcado: PropTypes.bool,
    marcadoNovo: PropTypes.bool,
    convidado: PropTypes.bool,
    convidadoNovo: PropTypes.bool,
    status: PropTypes.string,
    capa: PropTypes.string,
    categoria: PropTypes.string,
  }

  static defaultProps = {
    countColaboradores: 0,
    countSeguidores: 0,
    countComentarios: 0,
    countLikes: 0,
  }
  render() {
    const {
      temVagas,
      nome,
      criadorUsuario,
      data,
      countColaboradores,
      countSeguidores,
      countComentarios,
      countLikes,
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
      capa,
      categoria,
    } = this.props

    // let iconStatus;
    // switch (status) {
    //   case CRIACAO: iconStatus = 'spinner'; break;
    //   case DESENVOLVIMENTO: iconStatus = 'check-circle-o'; break;
    //   case PRODUCAO: iconStatus = 'play-circle-o'; break;
    //   case POS_PRODUCAO: default: iconStatus = 'clock-o'; break;
    // }

    return (
      <div style={[styles.container]}>
        <div style={[styles.iconsContainer, { marginRight: 2 }]}>
          <IconButton
            containerStyle={{ borderBottomWidth: 0 }}
            icon={<ComVagas />}
            backgroundColor="white"
            iconColor={temVagas ? '#e36a55' : 'black'}
          />
          <IconButton
            containerStyle={{ borderBottomWidth: 0 }}
            icon={getIconParaCategoria(categoria)}
            backgroundColor="black"
            iconColor="white"
          />
          {/* <IconButton
            containerStyle={{ borderColor: 'black' }}
            icon={<ExisteOficial />}
            backgroundColor="white"
            iconColor="black"
          /> */}
          {
            trending &&
              <IconButton
                icon={<Trending />}
                backgroundColor="#e36a55"
                iconColor="white"
              />
          }
          {
            colaborando &&
              <IconButton
                icon={<Colaborando />}
                backgroundColor="#b4baba"
                iconColor="white"
              />
          }
          {
            seguindo &&
              <IconButton
                icon={<Seguindo />}
                backgroundColor="#b4baba"
                iconColor="white"
              />
          }
          {
            favoritou &&
              <IconButton
                icon={<Favorito />}
                backgroundColor="#b4baba"
                iconColor="white"
              />
          }
          {
            salvou &&
              <IconButton
                icon={<Salvo />}
                backgroundColor="#b4baba"
                iconColor="white"
              />
          }
          {
            marcado &&
              <IconButton
                icon={<Marcacao />}
                backgroundColor="#f5f5f5"
                iconColor={marcadoNovo ? '#e36a55' : '#b3baba'}
              />
          }
          {
            convidado &&
              <IconButton
                icon={<Convite />}
                backgroundColor="#f5f5f5"
                iconColor={convidadoNovo ? '#e36a55' : '#b3baba'}
              />
          }

        </div>
        {/* <div style={styles.mainContainer}>
          <Image src={capa} style={styles.capa}/>
          <div style={styles.topAreaContainer}>
          <Icon name={iconStatus} />
          <span style={styles.colaboradores.numero}>{countColaboradores}</span>
          <span style={styles.colaboradores.texto}>Colaboradores</span>
          </div>
          <div style={styles.bottomAreaContainer}>
          <span style={styles.projeto.nome}>{nome}</span>
          <span style={styles.projeto.row}>
          <span style={styles.projeto.usuario}>{criadorUsuario}</span>{' '}
          <span style={styles.projeto.data}>{data}</span>
          </span>
          <div style={styles.footerAreaContainer}>
          <NumberIcon
          icon="users"
          number={countSeguidores}
          />
          <NumberIcon
          icon="comment"
          number={countComentarios}
          />
          <NumberIcon
          icon="heart"
          iconColor='#e36a55'
          number={countLikes}
          />
          </div>
          </div>
        </div>*/}
        <Card style={{ minWidth: 0, backgroundColor: '#fafafa' }}>
          <CardMedia
            overlay={
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
                <CardTitle
                  titleStyle={{ color: 'white' }}
                  subtitleStyle={{ color: 'white' }}
                  title={countColaboradores}
                  subtitle="Colaboradores"
                />
                {status === 'criacao' && <EmCriacao color="white" />}
                {status === 'desenvolvimento' && <EmDesenvolvimento color="white" />}
                {status === 'producao' && <EmProducao color="white" />}
                {status === 'pos-producao' && <EmPosProducao color="white" />}
              </div>
            }
          >
            <img src={capa} alt={nome} style={styles.capa} />
          </CardMedia>
          <CardTitle
            title={nome}
            titleStyle={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            subtitle={
              <span>
                <span style={{ color: '#e36a55' }}>{criadorUsuario}</span>

                <span> - {moment(data).format('DD/MM/YYYY')}</span>
              </span>}
          />
          <CardActions style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <NumberIcon
              icon={<Usuarios />}
              iconColor="#b4baba"
              number={countSeguidores}
            />
            <NumberIcon
              icon={<Comentarios />}
              iconColor="#b4baba"
              number={countComentarios}
            />
            <NumberIcon
              icon={<Likes />}
              iconColor="#e36a55"
              number={countLikes}
            />
          </CardActions>
        </Card>
      </div>
)
}
}

export default Radium(ProjetoCard)
