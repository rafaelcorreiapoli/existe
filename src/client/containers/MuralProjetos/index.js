import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import GridProjetos from '@components/GridProjetos'
import { composeWithTracker } from 'react-komposer'


class MuralProjetos extends React.Component {
  static propTypes = {
    projetos: PropTypes.array,
  }
  render() {
    const {
      projetos,
    } = this.props

    return (
      <GridProjetos
        projetos={projetos}
      />
    )
  }
}

const projeto = {
  temVagas: true,
  numeroColaboradores: 10,
  nome: 'PROJETO 01',
  nomeUsuario: 'USUARIO',
  data: new Date(),
  numeroUsers: 10,
  numeroComentarios: 20,
  numeroLikes: 30,
  trending: true,
  colaborando: true,
  seguindo: true,
  favoritou: false,
  salvou: true,
  marcado: true,
  marcadoNovo: true,
  convidado: true,
  convidadoNovo: true,
  status: 0,
  image: 'http://placehold.it/400x400',
}

const composer = (props, onData) => {
  onData(null, {
    projetos: [projeto, projeto, projeto, projeto],
  })
}
export default composeWithTracker(composer)(MuralProjetos)
