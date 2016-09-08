import React, { PropTypes } from 'react'
import { RaisedButton } from 'material-ui'
import MDSpinner from 'react-md-spinner';

class Concluir extends React.Component {
  static propTypes = {
    values: PropTypes.object,
    onSubmit: PropTypes.func,
    atualizarCadastroPessoalError: PropTypes.bool,
    atualizarCadastroPessoalSuccess: PropTypes.bool,
    atualizarCadastroPessoalLoading: PropTypes.bool,
  }

  render() {
    const {
      values,
      onSubmit,
      atualizarCadastroPessoalError,
      atualizarCadastroPessoalSuccess,
      atualizarCadastroPessoalLoading,
    } = this.props
    const {
      profile: {
        nomeCompleto,
        dataNascimento,
        sitePessoal,
        email,
        telefone,
        celular,
        facebook,
        twitter,
        instagram,
        cpf,
        bio,
      },
      portfolio,
      curriculo,
      profissao,
      empregador,
      funcoes: {
        exerce,
        toparia,
      },
      referencias: {
        texto,
        fotos,
        videos,
      },
      questionario: {
        sitesReferencia,
        profissionalReferencia,
        aprendendoNoMomento,
        tecnicaArtistica,
      },
      ator: {
        altura,
        numeracao: {
          blusa,
          calca,
          sapato,
        },
        corOlhos,
        corCabelo,
      },
      pagamentoPreferencial,
    } = values
    return (
      <div>
        <h5> Obrigado pelo cadastrso. Confira abaixo se seus dados estão corretos: </h5>
        <p><b>Nome completo: </b> {nomeCompleto}</p>
        <p><b>Data de Nascimento: </b> {dataNascimento.toString()}</p>
        <p><b>Site pessoal: </b> {sitePessoal}</p>
        <p><b>Email: </b> {email}</p>
        <p><b>Telefone: </b> {telefone}</p>
        <p><b>Celular: </b> {celular}</p>
        <p><b>Facebook: </b> {facebook}</p>
        <p><b>Twitter: </b> {twitter}</p>
        <p><b>Instagram: </b> {instagram}</p>
        <p><b>CPF: </b> {cpf}</p>
        <p><b>Bio: </b> {bio}</p>
        <p><b>Portfolio: </b> {portfolio}</p>
        <p><b>Currículo: </b> {curriculo}</p>
        <p><b>Profissão: </b> {profissao}</p>
        <p><b>Empregador: </b> {empregador}</p>
        <p><b>Funções que exerce: </b> {exerce}</p>
        <p><b>Funções que toparia exercer: </b> {toparia}</p>
        <p><b>Fotos: </b> {fotos}</p>
        <p><b>Vídeos: </b> {videos}</p>
        <p><b>Sites referência: </b> {sitesReferencia}</p>
        <p><b>Profissional de referência: </b> {profissionalReferencia}</p>
        <p><b>Aprendendo no momento: </b> {aprendendoNoMomento}</p>
        <p><b>Técnica artística: </b> {tecnicaArtistica}</p>
        <p><b>Altura: </b> {altura}</p>
        <p><b>Numeração: </b> Blusa: {blusa}, Calça: {calca}, Sapato: {sapato}</p>
        <p><b>Cor dos olhos: </b> {corOlhos}</p>
        <p><b>Cor dos cabelos: </b> {corCabelo}</p>
        <p><b>Sistema de pagamento preferencial: </b> {pagamentoPreferencial}</p>
        <h3>Atualizar usuário</h3>
        {atualizarCadastroPessoalLoading && <MDSpinner />}
        {atualizarCadastroPessoalSuccess && <div>Success!</div>}
        {atualizarCadastroPessoalError && <div>Error!</div>}
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
