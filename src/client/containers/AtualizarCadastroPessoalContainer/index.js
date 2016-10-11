import React from 'react';
import { connect } from 'react-redux'
import AtualizarCadastroPessoalForm from '@components/AtualizarCadastroPessoalForm'
import { call, getMethodState } from '@ducks/methods'
import { atualizarCadastro } from '@stubs/empresas'
import { cadastroRapido } from '@stubs/users'

const ATUALIZAR_CADASTRO_PESSOAL = 'Users.methods.atualizarCadastroPessoal'


const mapStateToProps = (state) => ({
  values: state.form.cadastroPessoal && state.form.cadastroPessoal.values,
  atualizarCadastroPessoalLoading: getMethodState(state, ATUALIZAR_CADASTRO_PESSOAL).loading,
  atualizarCadastroPessoalSuccess: getMethodState(state, ATUALIZAR_CADASTRO_PESSOAL).success,
  atualizarCadastroPessoalError: getMethodState(state, ATUALIZAR_CADASTRO_PESSOAL).error,
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit(values) {
    // Primeiro, criar o usuário
    const novoUsuario = {
      ...values,
      curriculo: values.curriculo.fileId,
      profile: {
        ...values.profile,
        foto: values.profile.foto.fileId,
      },
    }
    console.log(novoUsuario)
    dispatch(call(ATUALIZAR_CADASTRO_PESSOAL, novoUsuario))
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
)(AtualizarCadastroPessoalForm)

export default AtualizarCadastroPessoal
