import React from 'react';
import { connect } from 'react-redux'
import CadastroRapidoForm from '@components/CadastroRapidoForm'


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

const CadastroRapido = connect()(CadastroRapidoForm)

export default CadastroRapido
