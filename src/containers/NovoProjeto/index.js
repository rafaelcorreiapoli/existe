import React from 'react';
import { connect } from 'react-redux'
import NovoProjetoForm from '../../components/NovoProjetoForm'


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(values)  {
      console.log(values)
    }
  }
}

const NovoProjeto = connect(
  mapStateToProps,
  mapDispatchToProps
)(NovoProjetoForm)

export default NovoProjeto
