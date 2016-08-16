import React, { PropTypes } from 'react'

const Concluir = ({
  usuario,
  senha,
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
  portfolio,
  curriculo,
  profissao,
  empregador,
  funcoesExerce,
  funcoesToparia,
  fotos,
  videos,
  sitesReferencia,
  profissionalReferencia,
  aprendendoNoMomento,
  tecnicaArtistica,
  altura,
  numeracaoBlusa,
  numeracaoCalca,
  numeracaoSapato,
  corOlhos,
  corCabelo,
  pagamentoPreferencial
}) => {
  return (
    <div>
      <h5> Obrigado pelo cadastro. Confira abaixo se seus dados estão corretos: </h5>
      <p><b>Nome completo: </b> {nomeCompleto}</p>
      <p><b>Data de Nascimento: </b> {dataNascimento}</p>
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
      <p><b>Funções que exerce: </b> {funcoesExerce}</p>
      <p><b>Funções que toparia exercer: </b> {funcoesToparia}</p>
      <p><b>Fotos: </b> {fotos}</p>
      <p><b>Vídeos: </b> {videos}</p>
      <p><b>Sites referência: </b> {sitesReferencia}</p>
      <p><b>Profissional de referência: </b> {profissionalReferencia}</p>
      <p><b>Aprendendo no momento: </b> {aprendendoNoMomento}</p>
      <p><b>Técnica artística: </b> {tecnicaArtistica}</p>
      <p><b>Altura: </b> {altura}</p>
      <p><b>Numeração: </b> Blusa: {numeracaoBlusa}, Calça: {numeracaoCalca}, Sapato: {numeracaoSapato}</p>
      <p><b>Cor dos olhos: </b> {corOlhos}</p>
      <p><b>Cor dos cabelos: </b> {corCabelo}</p>
      <p><b>Sistema de pagamento preferencial: </b> {pagamentoPreferencial}</p>
    </div>
  )
}

export default Concluir
