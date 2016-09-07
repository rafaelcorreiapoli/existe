import React, { PropTypes } from 'react'
import MDSpinner from 'react-md-spinner';
import RaisedButton from 'material-ui/RaisedButton'


class Concluir extends React.Component {
  static propTypes = {
    cadastroRapidoError: PropTypes.bool,
    cadastroRapidoSuccess: PropTypes.bool,
    cadastroRapidoLoading: PropTypes.bool,
    cadastroEmpresarialError: PropTypes.bool,
    cadastroEmpresarialSuccess: PropTypes.bool,
    cadastroEmpresarialLoading: PropTypes.bool,
    onSubmit: PropTypes.func,
    values: PropTypes.object,
  }
  render() {
    const { values } = this.props
    const {
      username,
      password,
      email,
      profile: {
        nomeCompleto,
        dataNascimento,
        telefone,
        celular,
      } = {},
      tipoEmpresa,
      areaAtuacao,
      site,
      endereco,
      cnpj,
      bio,
      funcoes,
      pagamentoPreferencial,
      usuarios,
    } = values

    const {
      cadastroRapidoError,
      cadastroRapidoSuccess,
      cadastroRapidoLoading,
      cadastroEmpresarialError,
      cadastroEmpresarialSuccess,
      cadastroEmpresarialLoading,
      onSubmit,
    } = this.props

    return (
      <div>
        <h5> Obrigado pelo cadastro. Confira abaixo se seus dados estão corretos: </h5>
        {
          values &&
            <div>
              <p><b>username</b> {username}</p>
              <p><b>password</b> {password}</p>
              <p><b>email</b> {email}</p>
              <p><b>nomeCompleto</b> {nomeCompleto}</p>
              <p><b>dataNascimento</b> {dataNascimento.toString()}</p>
              <p><b>telefone</b> {telefone}</p>
              <p><b>celular</b> {celular}</p>
              <p><b>tipoEmpresa</b> {tipoEmpresa}</p>
              <p><b>areaAtuacao</b> {areaAtuacao}</p>
              <p><b>site</b> {site}</p>
              <p><b>endereco</b> {endereco}</p>
              <p><b>cnpj</b> {cnpj}</p>
              <p><b>bio</b> {bio}</p>
              <p><b>funcoes</b> {funcoes.toString()}</p>
              <p><b>pagamentoPreferencial</b> {pagamentoPreferencial}</p>
              <p><b>usuarios</b> {usuarios}</p>
            </div>
        }
        <h3>Cadastro do usuário</h3>
        {cadastroRapidoLoading && <MDSpinner />}
        {cadastroRapidoSuccess && <div>Success!</div>}
        {cadastroRapidoError && <div>Error!</div>}
        <h3>Cadastro da empresa</h3>
        {cadastroEmpresarialLoading && <MDSpinner />}
        {cadastroEmpresarialSuccess && <div>Success!</div>}
        {cadastroEmpresarialError && <div>Error!</div>}
        <RaisedButton
          primary
          label="SALVAR"
          onClick={onSubmit}
        />
      </div>
    )
  }
}

export default Concluir
