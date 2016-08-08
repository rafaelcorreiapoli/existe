import React from 'react';
import { connect } from 'react-redux'
import { createProjeto } from '../../actions'
import ProjetoForm from '../../components/ProjetoForm'


const mapStateToProps = (state) => {
  return {
    error: state.criarProjeto.get('error'),
    success: state.criarProjeto.get('success'),
    loading: state.criarProjeto.get('loading'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(projeto) {
      console.log(projeto);
      dispatch(createProjeto(projeto));
    }
  }
}

const CriarProjeto = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjetoForm)

export default CriarProjeto
