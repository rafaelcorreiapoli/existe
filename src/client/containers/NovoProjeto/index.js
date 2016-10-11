import React from 'react';
import { connect } from 'react-redux'
import NovoProjetoForm from '@components/NovoProjetoForm'
import { call, getMethodState } from '@ducks/methods'
import _ from 'lodash'

const NOVO_PROJETO = 'Projetos.methods.insert'


const mapStateToProps = (state) => ({
  values: state.form.novoProjeto && state.form.novoProjeto.values,
  novoProjetoLoading: getMethodState(state, NOVO_PROJETO).loading,
  novoProjetoSuccess: getMethodState(state, NOVO_PROJETO).success,
  novoProjetoError: getMethodState(state, NOVO_PROJETO).error,
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit(values) {
    // Primeiro, criar o usuário
    const novoProjeto = {
      ...values,
      capa: values.capa.fileId,
      arquivos: _.map(values.arquivos, 'fileId'),
    }

    console.log(novoProjeto)

    dispatch(call(NOVO_PROJETO, novoProjeto))
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      //  Erro ao cadastrar usuário
      console.log(err)
    })
  },
})

const AtualizarCadastroPessoal = connect(
  mapStateToProps,
  mapDispatchToProps
)(NovoProjetoForm)

export default AtualizarCadastroPessoal
