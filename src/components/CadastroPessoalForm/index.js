import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker'
import Divider from 'material-ui/Divider';
import PaperSelect from '../PaperSelect'
import InputWrapper from '../InputWrapper';
import TextFieldArray from '../TextFieldArray';
import {
  SelectField,
  MenuItem,
  Checkbox
} from 'material-ui'

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
  state = {
    portfolio: [],
    videos: [],
    fotos: [],
    referencias: []
  }

  constructor(props) {
    super(props)
    this.handleChangePortfolio = this.handleChangePortfolio.bind(this);
    this.handleChangeVideos = this.handleChangeVideos.bind(this);
    this.handleChangeFotos = this.handleChangeFotos.bind(this);
    this.handleChangeReferencias = this.handleChangeReferencias.bind(this)
  }
  handleChangePortfolio(portfolio) {
    this.setState({
      portfolio
    })
  }
  handleChangeVideos(videos) {
    this.setState({
      videos
    })
  }
  handleChangeFotos(fotos) {
    this.setState({
      fotos
    })
  }
  handleChangeReferencias(referencias) {
    this.setState({
      referencias
    })
  }
  render () {
    const {
      portfolio,
      fotos,
      videos,
      referencias
    } = this.state
    return (
      <Paper style={{margin: 100, padding: 20}}>
        <h2 style={{textAlign: 'center'}}>Cadastro Pessoal</h2>
        <InputWrapper>
          <TextField
            fullWidth={true}
            floatingLabelText="Usuário"
            floatingLabelFixed={true}
            />
          <TextField
            fullWidth={true}
            floatingLabelText="Senha"
            floatingLabelFixed={true}
            password={true}
            />
        </InputWrapper>


        {/*nome completo
          email
          data de nascimento
          telefone para contato
          celular para contato (com operadora)
          */}

          <InputWrapper>
            <TextInput label="Nome Completo" />
            <DateInput label="Data de Nascimento" />
            <TextInput label="Site Pessoal" />
            <TextInput label="Email" />
            <TextInput label="Telefone" />
            <TextInput label="Celular" />
            <TextInput label="Facebook" />
            <TextInput label="Twitter" />
            <TextInput label="Instagram" />
          </InputWrapper>

          <InputWrapper>
            <TextInput label="CPF" />
          </InputWrapper>

          <InputWrapper>
            <TextInput label="BIO" rows={4} />
          </InputWrapper>

          <InputWrapper>
            <h5>Portfólio</h5>
            <TextFieldArray
              onChange={this.handleChangePortfolio}
              value={portfolio}
              />
          </InputWrapper>

          <InputWrapper>
            <TextInput label="Currículo"/>
          </InputWrapper>

          <InputWrapper>
            <TextInput label="Profissão"/>
            <TextInput label="Empregador"/>
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
            <TextInput label="BIO" rows={4} />
            <h5>3 Links de fotos</h5>
            <TextFieldArray
              onChange={this.handleChangeFotos}
              value={fotos}
              />
            <h5>3 Links de vídeos</h5>
            <TextFieldArray
              onChange={this.handleChangeVideos}
              value={videos}
              />
          </InputWrapper>

          <InputWrapper>
            <span>Cite pelo menos 3 sites em que você busca referências quando precisa.</span>
            <TextFieldArray
              onChange={this.handleChangeReferencias}
              value={referencias}
              disableAdd={true}
              maxItems={3}
            />
            <TextInput label="Quem é sua maior referência em sua área de atuação profissional?" />
            <TextInput label="O que você está aprendendo no momento?" />
            <SelectField
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
            <TextInput label="Altura" />
            <TextInput label="Numeração Blusa" />
            <TextInput label="Numeração Calça" />
            <TextInput label="Numeração Sapato" />
            <TextInput label="Cor dos olhos" />
            <TextInput label="Cor do cabelo" />
          </InputWrapper>
        </Paper>
      )
    }
  }

  export default CadastroPessoalForm;
