import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker'
import Divider from 'material-ui/Divider';
import PaperSelect from '../PaperSelect'
import InputWrapper from '../InputWrapper';
import TextFieldArray from '../TextFieldArray';
import moment from 'moment';
import MaskedTextField from '../MaskedTextField';
import { reducer } from 'redux-form';

import {
  SelectField,
  MenuItem,
  Checkbox
} from 'material-ui'
import { reduxForm } from 'redux-form';

import styles from './styles';
/**
nome completo
data de nascimento
site pessoal
email
telefone para contato
endereço de trabalho
redes sociais
*/

/*
cpf
*/

/*
username
senha
*/

/*
bio
*/

/*
portfolio -> até 5 links
*/

/*
curriculo (PDF)
*/

/*
profissao e empregador
-> deve procurar no existe a empresa para se associar
*/

/*
funcoes que exerce
(lista de funcoes)
funcoes que toparia exercer
(lista de funcoes)
*/

/*
referencias técnicas e artisticas
-texto de até 1000 caracteres
-questionário existe
- Cite pelo menos 3 sites em que você busca referências quando precisa.
- Quem é sua maior referência em sua área de atuação profissional?
- O que você está aprendendo no momento?
- Com qual expressão ou técnica artística seu trabalho mais se parece?
(minimalismo, realismo, expressionismo, surrealismo, pontilhismo, abstracionismo, cubismo, outro (especifique))
-3 links de fotos (com legenda de 150 caracteres)
-3 links de videos (com legenda de 150 caracteres)
*/

/*
sistema de pgmto preferencial
*/

/*
se for ator/atriz
- altura
- numercao (blusa, calça, sapato)
- cor dos olhos
- cor do cabelo
*/
const DateInput = ({
  label,
  ...props
}) => (
  <DatePicker
    fullWidth={true}
    floatingLabelText={label}
    floatingLabelFixed={true}
    {...props}
    />
)
const TextInput = ({
  label,
  ...props
}) => (
  <TextField
    fullWidth={true}
    floatingLabelText={label}
    floatingLabelFixed={true}
    {...props}
    />
)
class CadastroPessoalForm extends React.Component {

  constructor(props) {
    super(props)
    // this.handleChangePortfolio = this.handleChangePortfolio.bind(this);
    // this.handleChangeVideos = this.handleChangeVideos.bind(this);
    // this.handleChangeFotos = this.handleChangeFotos.bind(this);
    // this.handleChangeReferencias = this.handleChangeReferencias.bind(this)

    // this.state = {
    //   portfolio: [],
    //   videos: [],
    //   fotos: [],
    //   referencias: []
    // }
  }
  // handleChangePortfolio(portfolio) {
  //   this.setState({
  //     portfolio
  //   })
  // }
  // handleChangeVideos(videos) {
  //   this.setState({
  //     videos
  //   })
  // }
  // handleChangeFotos(fotos) {
  //   this.setState({
  //     fotos
  //   })
  // }
  // handleChangeReferencias(referencias) {
  //   this.setState({
  //     referencias
  //   })
  // }
  render () {
    // const {
    //   portfolio,
    //   fotos,
    //   videos,
    //   referencias
    // } = this.state

    const {fields: {
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
      pagamentoPreferencial,
      altura,
      numeracaoBlusa,
      numeracaoCalca,
      numeracaoSapato,
      corOlhos,
      corCabelo
    }, handleSubmit} = this.props;

    return (
      <Paper style={{margin: 100, padding: 20}}>
        <form onSubmit={handleSubmit}>
          <h2 style={{textAlign: 'center'}}>Cadastro Pessoal</h2>
          <InputWrapper>
            <TextInput {...usuario} label="Usuário" />
            <TextInput {...senha} label="Senha" type="password" />
          </InputWrapper>
          <InputWrapper>
            <TextInput {...nomeCompleto} label="Nome Completo" />
            <DateInput {...dataNascimento}
              value={dataNascimento.value ? moment(dataNascimento.value).toDate() : null }
              onChange={(e,d) => dataNascimento.onChange(d) }
              label="Data de Nascimento" />
            <TextInput {...sitePessoal} label="Site Pessoal" />
            <TextInput {...email} label="Email" />
            <TextInput mask="(99) 9999-9999" {...telefone} label="Telefone" />
            <TextInput mask="(99) 9999-9999" {...celular} label="Celular" />
            <TextInput {...facebook} label="Facebook" />
            <TextInput {...twitter} label="Twitter" />
            <TextInput {...instagram} label="Instagram" />
          </InputWrapper>

          <InputWrapper>
            <TextInput mask="999.999.999-99" {...cpf} label="CPF" />
          </InputWrapper>

          <InputWrapper>
            <TextInput {...bio} label="BIO" rows={4} />
          </InputWrapper>

          <InputWrapper>
            <h5>Portfólio</h5>
            <TextFieldArray {...portfolio}
              //onChange={this.handleChangePortfolio}
              //value={portfolio}
              />
          </InputWrapper>

          <InputWrapper>
            <TextInput {...curriculo} label="Currículo"/>
          </InputWrapper>

          <InputWrapper>
            <TextInput {...profissao} label="Profissão"/>
            <TextInput {...empregador} label="Empregador"/>
          </InputWrapper>

          <InputWrapper>
            <span>Funções que <b>exerce</b></span>
            <Checkbox label="Função 1" />
            <Checkbox label="Função 2" />
            <Checkbox label="Função 3" />
            <Checkbox label="Função 4" />
          </InputWrapper>

          <InputWrapper>
            <span>Funções que <b>toparia exercer</b></span>
            <Checkbox label="Função 1" />
            <Checkbox label="Função 2" />
            <Checkbox label="Função 3" />
            <Checkbox label="Função 4" />
          </InputWrapper>

          <InputWrapper>
            <TextInput {...bio} label="BIO" rows={4} />
            <h5>3 Links de fotos</h5>
            <TextFieldArray
              {...fotos}
              //onChange={this.handleChangeFotos}
              //value={fotos}
              />
            <h5>3 Links de vídeos</h5>
            <TextFieldArray
              {...videos}
              //onChange={this.handleChangeVideos}
              //value={videos}
              />
          </InputWrapper>

          <InputWrapper>
            <span>Cite pelo menos 3 sites em que você busca referências quando precisa.</span>
            <TextFieldArray
              {...sitesReferencia}
              //onChange={this.handleChangeReferencias}
              //value={referencias}
              disableAdd={true}
              maxItems={3}
              />
            <TextInput {...profissionalReferencia} label="Quem é sua maior referência em sua área de atuação profissional?" />
            <TextInput {...aprendendoNoMomento} label="O que você está aprendendo no momento?" />
            <SelectField
              {...tecnicaArtistica}
              fullWidth={true}
              floatingLabelText="Com qual expressão ou técnica artística seu trabalho mais se parece?"
              floatingLabelFixed={true} >
              <MenuItem value={'minimalismo'} primaryText="Minimalismo" />
              <MenuItem value={'realismo'} primaryText="Realismo" />
              <MenuItem value={'expressionismo'} primaryText="Expressionismo" />
              <MenuItem value={'surrealismo'} primaryText="Surrealismo" />
              <MenuItem value={'pontilhismo'} primaryText="Pontilhismo" />
              <MenuItem value={'abstracionismo'} primaryText="Abstracionismo" />
              <MenuItem value={'cubismo'} primaryText="Cubismo" />
              <MenuItem value={'outro'} primaryText="Outro" />
            </SelectField>
          </InputWrapper>

          <InputWrapper>
            <SelectField
              {...pagamentoPreferencial}
              fullWidth={true}
              floatingLabelText="Sistema de pagamento preferencial"
              floatingLabelFixed={true} >
              <MenuItem value={'produtora'} primaryText="Produtora" />
              <MenuItem value={'agencia'} primaryText="Agência" />
              <MenuItem value={'e-commerce'} primaryText="E-Commerce" />
              <MenuItem value={'startup'} primaryText="Startup" />
              <MenuItem value={'hotel'} primaryText="Hotel" />
              <MenuItem value={'restaurante'} primaryText="Restaurante" />
              <MenuItem value={'fabrica'} primaryText="Fábrica" />
              <MenuItem value={'consultorio'} primaryText="Consultório" />
              <MenuItem value={'coletivo'} primaryText="Coletivo" />
              <MenuItem value={'outro'} primaryText="Outro" />
            </SelectField>
          </InputWrapper>


          <InputWrapper>
            <h5>Se você é ator ou atriz...</h5>
            <TextInput {...altura} label="Altura" />
            <TextInput {...numeracaoBlusa} label="Numeração Blusa" />
            <TextInput {...numeracaoCalca} label="Numeração Calça" />
            <TextInput {...numeracaoSapato} label="Numeração Sapato" />
            <TextInput {...corOlhos} label="Cor dos olhos" />
            <TextInput {...corCabelo} label="Cor do cabelo" />
          </InputWrapper>

          <RaisedButton type="submit" label="Cadastrar" />
        </form>
      </Paper>
    )
  }
}


CadastroPessoalForm = reduxForm({
  form: 'cadastroPessoal',
  fields: [
  'usuario',
  'senha',
  'nomeCompleto',
  'dataNascimento',
  'sitePessoal',
  'email',
  'telefone',
  'celular',
  'facebook',
  'twitter',
  'instagram',
  'cpf',
  'bio',
  'portfolio',
  'curriculo',
  'profissao',
  'empregador',
  'funcoesExerce',
  'funcoesToparia',
  'fotos',
  'videos',
  'sitesReferencia',
  'profissionalReferencia',
  'aprendendoNoMomento',
  'tecnicaArtistica',
  'pagamentoPreferencial',
  'altura',
  'numeracaoBlusa',
  'numeracaoCalca',
  'numeracaoSapato',
  'corOlhos',
  'corCabelo'
  ]
})(CadastroPessoalForm);

export default CadastroPessoalForm;
