import { connect } from 'react-redux'
import { setFiltroSubCategoria } from '@ducks/mural'
import SelecionarSubCategoria from '@components/SelecionarSubCategoria'
import {
  OPCOES_SUBCATEGORIA_INDEPENDENTE,
  OPCOES_SUBCATEGORIA_EMPRESARIAL,
} from '@resources/options'

const mapStateToProps = (state) => {
  return {
    value: state.mural.subcategoria,
    options: state.mural.categoria === 'empresarial'
      ? OPCOES_SUBCATEGORIA_EMPRESARIAL
      : OPCOES_SUBCATEGORIA_INDEPENDENTE,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(categoria) {
      dispatch(setFiltroSubCategoria(categoria));
    },
  }
}

const FiltroCategoria = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelecionarSubCategoria)

export default FiltroCategoria
