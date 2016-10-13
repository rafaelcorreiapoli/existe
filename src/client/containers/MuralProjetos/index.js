import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import GridProjetos from '@components/GridProjetos'
import { composeWithTracker } from 'react-komposer'
import { Meteor } from 'meteor/meteor'
import { Projetos } from '@collections'

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

// const projeto = {
//   temVagas: true,
//   numeroColaboradores: 10,
//   nome: 'PROJETO 01',
//   nomeUsuario: 'USUARIO',
//   data: new Date(),
//   numeroUsers: 10,
//   numeroComentarios: 20,
//   numeroLikes: 30,
//   trending: true,
//   colaborando: true,
//   seguindo: true,
//   favoritou: false,
//   salvou: true,
//   marcado: true,
//   marcadoNovo: true,
//   convidado: true,
//   convidadoNovo: true,
//   status: 0,
//   image: 'http://placehold.it/400x400',
// }

const mapStateToProps = state => ({
  categoria: state.mural.categoria,
  ordem: state.mural.ordem,
  status: state.mural.status,
  funcao: state.mural.funcao,
})

const composer = (props, onData) => {
  const {
    categoria,
    status,
    funcao,
    ordem,
  } = props

  let sort
  switch (ordem) {
    case 'recentes':
      sort = { createdAt: 1 }
      break;
    default:
      sort = { createdAt: 1 }
  }

  const handler = Meteor.subscribe('Projetos.mural', {
    categoria,
    status,
    funcao,
    sort,
  })

  if (handler.ready()) {
    const query = Object.assign({},
      categoria ? { categoria } : null,
      status ? { status } : null,
      funcao ? {
        vagas: {
          $elemMatch: {
            funcao,
            livres: {
              $gt: 0,
            },
          },
        },
      } : null
    )


    const projetos = Projetos.find(query, {
      sort,
    }).fetch().map(projeto => ({
      nome: projeto.nome,
      status: projeto.status,
      categoria: projeto.categoria,
      subcategoria: projeto.subcategoria,
      imagem: 'http://placehold.it/400x400',
      criadorUsuario: projeto.criadorUsuario,
      criadorId: projeto.criadorId,
      data: projeto.createdAt || new Date(),
      countColaboradores: projeto.count && projeto.count.colaboradores,
      countSeguidores: projeto.count && projeto.count.seguidores,
      countComentarios: projeto.count && projeto.count.comentarios,
      countLikes: projeto.count && projeto.count.likes,
      temVagas: true,
      trending: true,
      colaborando: true,
      seguindo: true,
      favoritou: false,
      salvou: true,
      marcado: true,
      marcadoNovo: true,
      convidado: true,
      convidadoNovo: true,

    }))

    onData(null, {
      projetos,
    })
  }
}
export default connect(
  mapStateToProps,
)(composeWithTracker(composer)(MuralProjetos))
