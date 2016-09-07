import React from 'react';
import { connect } from 'react-redux'
import CadastroEmpresarialForm from '@components/CadastroEmpresarialForm'
import { call, getMethodState } from '@ducks/methods'
import _ from 'lodash'

import { atualizarCadastro } from '@stubs/empresas'
import { cadastroRapido } from '@stubs/users'

const CADASTRO_RAPIDO_METHOD_NAME = 'Users.methods.cadastroRapido'
const CADASTRO_EMPRESARIAL_METHOD_NAME = 'Empresas.methods.cadastro'


const mapStateToProps = (state) => ({
  values: state.form.cadastroEmpresarial && state.form.cadastroEmpresarial.values,
  cadastroRapidoLoading: getMethodState(state, CADASTRO_RAPIDO_METHOD_NAME).loading,
  cadastroRapidoSuccess: getMethodState(state, CADASTRO_RAPIDO_METHOD_NAME).success,
  cadastroRapidoError: getMethodState(state, CADASTRO_RAPIDO_METHOD_NAME).error,
  cadastroEmpresarialLoading: getMethodState(state, CADASTRO_EMPRESARIAL_METHOD_NAME).loading,
  cadastroEmpresarialSuccess: getMethodState(state, CADASTRO_EMPRESARIAL_METHOD_NAME).success,
  cadastroEmpresarialError: getMethodState(state, CADASTRO_EMPRESARIAL_METHOD_NAME).error,
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit(values) {
    console.log(values)
    const usuarioDoc = _.pick(values, [
      'username',
      'password',
      'email',
      'profile',
    ])

    const empresaDoc = _.pick(values, [
      'tipoEmpresa',
      'areaAtuacao',
      'site',
      'endereco',
      'cnpj',
      'bio',
      'funcoes',
      'pagamentoPreferencial',
      'usuarios',
    ])
    // console.log(typeof usuarioDoc.profile.dataNascimento)
    // usuarioDoc.profile.dataNascimento = moment(usuarioDoc.profile.dataNascimento).toDate()
    // console.log(typeof usuarioDoc.profile.dataNascimento)

    // Primeiro, criar o usuário
    dispatch(call(CADASTRO_RAPIDO_METHOD_NAME, usuarioDoc))
    .then(adminId => {
      console.log(adminId)
      // Usuário criado com sucesso, criar empresa associando adminId
      dispatch(call(CADASTRO_EMPRESARIAL_METHOD_NAME, { ...empresaDoc, adminId }))
      .then(empresaId => {
        //  Empresa criada com sucesso
        console.log(empresaId)
      })
      .catch(err => {
        //  Erro ao criar empresa
        console.log(err)
      })
    })
    .catch(err => {
      //  Erro ao cadastrar usuário
      console.log(err)
    })
  },
})

const CadastroEmpresarial = connect(
  mapStateToProps,
  mapDispatchToProps
)(CadastroEmpresarialForm)

export default CadastroEmpresarial
