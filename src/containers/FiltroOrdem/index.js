import { connect } from 'react-redux'
import { setFiltroOrdem } from '../../actions'
import SelecionarOrdem from '../../components/SelecionarOrdem'

const mapStateToProps = (state) => {
  return {
    value: state.mural.filtros.ordem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(ordem) {
      dispatch(setFiltroOrdem(ordem));
    }
  }
}

const FiltroOrdem = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelecionarOrdem)

export default FiltroOrdem
