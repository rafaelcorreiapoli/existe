import React from 'react';
import { connect } from 'react-redux'
import { setFiltroStatus } from '../../actions'
import subscriber from '../../components/Subscriber'
import GridProjetos from '../../components/GridProjetos'
import { getProjetosMural } from '../../selectors/projetos'



const mapStateToProps = (state) => {
  return {
    projetos: getProjetosMural(state)
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
