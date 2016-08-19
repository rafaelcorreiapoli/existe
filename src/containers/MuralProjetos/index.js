import { connect } from 'react-redux'
import { setFiltroStatus } from '../../actions'
import GridProjetos from '../../components/GridProjetos'



const mapStateToProps = (state) => {
  return {
    projetos: []
  }
}

const MuralProjetos = connect(
  mapStateToProps,
)(GridProjetos)

export default MuralProjetos
