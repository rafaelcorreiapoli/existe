import React from 'react';
import { connect } from 'react-redux'
import { setFiltroStatus } from '../../actions'
import subscriber from '../../components/Subscriber'
import GridProjetos from '../../components/GridProjetos'
import { getProjetosMural } from '../../selectors/projetos'

const projetos = [
  {
  temVagas: true,
  numeroColaboradores: 2,
  nome: 'Narcos',
  nomeUsuario: 'Rafael',
  data: new Date(),
  numeroUsers: 2,
  numeroComentarios: 2,
  numeroLikes: 2,
  trending: 2,
  colaborando: true,
  seguindo: true,
  favoritou: false,
  salvou: true,
  marcado: false,
  marcadoNovo: true,
  convidado: true,
  convidadoNovo: true,
  status: 2,
  image: 'http://entretenimento.r7.com/blogs/keila-jimenez/files/2016/05/narcos2.jpg'
},
{
temVagas: true,
numeroColaboradores: 2,
nome: 'Narcos',
nomeUsuario: 'Rafael',
data: new Date(),
numeroUsers: 2,
numeroComentarios: 2,
numeroLikes: 2,
trending: 2,
colaborando: true,
seguindo: true,
favoritou: false,
salvou: true,
marcado: false,
marcadoNovo: true,
convidado: true,
convidadoNovo: true,
status: 2,
image: 'http://entretenimento.r7.com/blogs/keila-jimenez/files/2016/05/narcos2.jpg'
},
{
temVagas: true,
numeroColaboradores: 2,
nome: 'Narcos',
nomeUsuario: 'Rafael',
data: new Date(),
numeroUsers: 2,
numeroComentarios: 2,
numeroLikes: 2,
trending: 2,
colaborando: true,
seguindo: true,
favoritou: false,
salvou: true,
marcado: false,
marcadoNovo: true,
convidado: true,
convidadoNovo: true,
status: 2,
image: 'http://entretenimento.r7.com/blogs/keila-jimenez/files/2016/05/narcos2.jpg'
},
{
temVagas: true,
numeroColaboradores: 2,
nome: 'Narcos',
nomeUsuario: 'Rafael',
data: new Date(),
numeroUsers: 2,
numeroComentarios: 2,
numeroLikes: 2,
trending: 2,
colaborando: true,
seguindo: true,
favoritou: false,
salvou: true,
marcado: false,
marcadoNovo: true,
convidado: true,
convidadoNovo: true,
status: 2,
image: 'http://entretenimento.r7.com/blogs/keila-jimenez/files/2016/05/narcos2.jpg'
}
]

const mapStateToProps = (state) => {
  return {
    projetos// : getProjetosMural(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { subscribe, unsubscribe } = ownProps

  return {
    onComponentDidMount() {
      subscribe({
        name: 'projetos',
        publication: 'projetos',
      })
    }
  }
}
class MuralProjetos extends React.Component {
  componentDidMount() {
    const { onComponentDidMount, teste } = this.props
    onComponentDidMount();
  }

  render() {
    return <GridProjetos {...this.props} />
  }
}


MuralProjetos = subscriber(connect(
  mapStateToProps,
  mapDispatchToProps
)(MuralProjetos))

export default MuralProjetos
