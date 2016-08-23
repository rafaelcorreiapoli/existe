import React from 'react';
import { connect } from 'react-redux'
import CadastroEmpresarialForm from '../../components/CadastroEmpresarialForm'


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(values) {

    }
  }
}

const CadastroEmpresarial = connect(
  mapStateToProps,
  mapDispatchToProps
)(CadastroEmpresarialForm)

export default CadastroEmpresarial
