import React, { PropTypes } from 'react'
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'
import { addProjeto } from '../../actions'

const fakeProject = {
  image:'http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg',
  numeroColaboradores: 10,
  nome: 'EXTRA | GRAFITE COLETIVO asdasd asssssssda',
  nomeUsuario: 'EXISTEemSP',
  data: 'Março 31, 2016',
  numeroUsers: 12,
  numeroComentarios: 25,
  numeroLikes: 20,
  temVagas: true,
  trending: true,
  colaborando: true,
  salvou: true,
  seguindo: true,
  favoritou: true,
  marcado: true,
  marcadoNovo: true,
  convidado: true,
  convidadoNovo: false,
}

const Botao = ({
  onClick
}) => {
  return (
    <FlatButton
      onClick={() => onClick(fakeProject)}
      style={{marginRight: 40}}
      label="CRIAR NOVO PROJETO"
      secondary={true}
      icon={<AddCircleOutline />}
    />

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick(projeto) {
      dispatch(addProjeto(projeto));
    }
  }
}

const BotaoNovoProjeto = connect(
  null,
  mapDispatchToProps
)(Botao)

export default BotaoNovoProjeto
