import { connect } from 'react-redux'
import { setFiltroCategoria } from '@ducks/mural'
import SelecionarCategoria from '@components/SelecionarCategoria'

const mapStateToProps = (state) => {
  return {
    value: state.mural.categoria,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(categoria) {
      dispatch(setFiltroCategoria(categoria));
    },
  }
}

const FiltroCategoria = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelecionarCategoria)

export default FiltroCategoria
