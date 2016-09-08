import React, { PropTypes } from 'react'
import MDSpinner from 'react-md-spinner';
import RaisedButton from 'material-ui/RaisedButton'


class Concluir extends React.Component {
  static propTypes = {
    novoProjetoError: PropTypes.bool,
    novoProjetoSuccess: PropTypes.bool,
    novoProjetoLoading: PropTypes.bool,
    onSubmit: PropTypes.func,
    values: PropTypes.object,
  }
  render() {
    const { values } = this.props
    const {
      objetivo,
      categoria,
      nomeCliente,
      segmentoAtuacao,
      subcategoria,
      linguagemVisual,
      procura,
      publico,
      meiosVeiculacao,
      tempoDuracao,
      prazoEntrega,
      esperaGastar,
      capa,
      nome,
      descricao,
      links,
      arquivos,
    } = values

    const {
      novoProjetoError,
      novoProjetoSuccess,
      novoProjetoLoading,
      onSubmit,
    } = this.props
    return (
      <div>
        <h5> Novo projeto criado: </h5>
        {
          values &&
            <div>
              <p><b>objetivo</b> {objetivo} </p>
              <p><b>categoria</b> {categoria} </p>
              <p><b>nomeCliente</b> {nomeCliente} </p>
              <p><b>segmentoAtuacao</b> {segmentoAtuacao} </p>
              <p><b>subcategoria</b> {subcategoria} </p>
              <p><b>linguagemVisual</b> {linguagemVisual} </p>
              <p><b>procura</b> {procura} </p>
              <p><b>publico</b> {publico} </p>
              <p><b>meiosVeiculacao</b> {meiosVeiculacao} </p>
              <p><b>tempoDuracao</b> {tempoDuracao} </p>
              <p><b>prazoEntrega</b> {prazoEntrega.toString()} </p>
              <p><b>esperaGastar</b> {esperaGastar} </p>
              <p><b>capa</b> {capa} </p>
              <p><b>nome</b> {nome} </p>
              <p><b>descricao</b> {descricao} </p>
              <p><b>links</b> {links} </p>
              <p><b>arquivos</b> {arquivos} </p>
            </div>
        }
        <h3>Cadastro do projeto</h3>
        {novoProjetoLoading && <MDSpinner />}
        {novoProjetoSuccess && <div>Success!</div>}
        {novoProjetoError && <div>Error!</div>}
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
