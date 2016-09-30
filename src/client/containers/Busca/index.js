import { connect } from 'react-redux'
import Busca from '@components/Busca'
import {
  buscar,
  setTexto,
  setCategoria,
  setSubcategoria,
  setTimes,
  setEntidade,
  getTexto,
  getCategoria,
  getSubcategoria,
  getTimes,
  getEntidade,
} from '@ducks/busca'

const mapStateToProps = (state) => ({
  texto: getTexto(state),
  categoria: getCategoria(state),
  subcategoria: getSubcategoria(state),
  times: getTimes(state),
  entidade: getEntidade(state),
})

const mapDispatchToProps = (dispatch) => ({
  setTexto(texto) {
    dispatch(setTexto(texto))
    dispatch(buscar())
  },
  setCategoria(filter, value) {
    dispatch(setCategoria(filter, value))
    dispatch(buscar())
  },
  setSubcategoria(filter, value) {
    dispatch(setSubcategoria(filter, value))
    dispatch(buscar())
  },
  setTimes(filter, value) {
    dispatch(setTimes(filter, value))
    dispatch(buscar())
  },
  setEntidade(entidade) {
    dispatch(setEntidade(entidade))
    dispatch(buscar())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Busca)
