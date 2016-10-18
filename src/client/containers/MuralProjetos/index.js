import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import GridProjetos from '@components/GridProjetos'
import { composeWithTracker } from 'react-komposer'
import { Meteor } from 'meteor/meteor'
import { Projetos } from '@collections'
import MDSpinner from 'react-md-spinner'

class MuralProjetos extends React.Component {
  static propTypes = {
    projetos: PropTypes.array,
    loading: PropTypes.bool,
  }
  render() {
    const {
      projetos,
      loading,
    } = this.props

    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', minHeight: 814 }}>
        {
          loading ?
            <MDSpinner style={{ alignSelf: 'center' }} />
          :
            <GridProjetos
              projetos={projetos}
              loading={loading}
            />
        }
      </div>

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
  subcategoria: state.mural.subcategoria,
  ordem: state.mural.ordem,
  status: state.mural.status,
  funcao: state.mural.funcao,
})

const composer = (props, onData) => {
  const {
    categoria,
    subcategoria,
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
    subcategoria,
    categoria,
    status,
    funcao,
    sort,
  })

  if (handler.ready()) {
    const query = Object.assign({},
      subcategoria ? { subcategoria } : null,
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
      limit: 10,
    }).fetch().map(projeto => ({
      nome: projeto.nome,
      status: projeto.status,
      categoria: projeto.categoria,
      subcategoria: projeto.subcategoria,
      // imagem: 'http://placehold.it/400x400',
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
      capa: projeto.capa,
    }))

    onData(null, {
      projetos,
    })
  } else {
    onData(null, {
      loading: true,
    })
  }
}
export default connect(
  mapStateToProps,
)(composeWithTracker(composer)(MuralProjetos))
