import { connect } from 'react-redux'
import { setFiltroStatus } from '../../actions'
import SelecionarStatus from '../../components/SelecionarStatus'

const mapStateToProps = (state) => {
  return {
    value: state.mural.filtros.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(status) {
      dispatch(setFiltroStatus(status));
    }
  }
}

const FiltroStatus = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelecionarStatus)

export default FiltroStatus
