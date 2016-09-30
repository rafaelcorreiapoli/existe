import { connect } from 'react-redux'
import { composeWithTracker } from 'react-komposer'
import Comunidade from '@components/Comunidade'
import {
  setCategoria,
  getCategoria,
} from '@ducks/busca'

const mapStateToProps = (state) => ({
  categoria: getCategoria(state),
})

const mapDispatchToProps = (dispatch) => ({
  setCategoria(filter, value) {
    dispatch(setCategoria(filter, value))
  },
})

const composer = (props, onData) => {
  onData(null, {
    usuariosPorArea: {
      texto: [
        {
          nome: 'RAFAEL',
          projetosCount: 10,
          funcao: 'ENGENHEIRO',
          imagem: 'http://placehold.it/300x300',
        },
        {
          nome: 'RAFAEL',
          projetosCount: 10,
          funcao: 'ENGENHEIRO',
          imagem: 'http://placehold.it/300x300',
        },
        {
          nome: 'RAFAEL',
          projetosCount: 10,
          funcao: 'ENGENHEIRO',
          imagem: 'http://placehold.it/300x300',
        },
        {
          nome: 'RAFAEL',
          projetosCount: 10,
          funcao: 'ENGENHEIRO',
          imagem: 'http://placehold.it/300x300',
        },
      ],
      imagem: [
        {
          nome: 'RAFAEL',
          projetosCount: 10,
          funcao: 'ENGENHEIRO',
          imagem: 'http://placehold.it/300x300',
        },
        {
          nome: 'RAFAEL',
          projetosCount: 10,
          funcao: 'ENGENHEIRO',
          imagem: 'http://placehold.it/300x300',
        },
        {
          nome: 'RAFAEL',
          projetosCount: 10,
          funcao: 'ENGENHEIRO',
          imagem: 'http://placehold.it/300x300',
        },
        {
          nome: 'RAFAEL',
          projetosCount: 10,
          funcao: 'ENGENHEIRO',
          imagem: 'http://placehold.it/300x300',
        },
      ],
      audio: [],
      cena: [],
      producao: [],
    }
  })
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composeWithTracker(composer)(Comunidade))
