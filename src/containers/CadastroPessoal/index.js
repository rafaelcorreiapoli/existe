import React from 'react';
import { connect } from 'react-redux'
import CadastroPessoalForm from '../../components/CadastroPessoalForm'


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

const CadastroPessoal = connect(
  mapStateToProps,
  mapDispatchToProps
)(CadastroPessoalForm)

export default CadastroPessoal
