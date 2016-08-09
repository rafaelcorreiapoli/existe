import React, { PropTypes } from 'react'
import moment from 'moment';
import { reduxForm } from 'redux-form';
import Joi from 'joi-browser';
import objectPath from 'object-path';

import {
  TextField,
  RaisedButton,
  Paper,
  DatePicker,
  Divider,
  SelectField,
  MenuItem,
  Checkbox
} from 'material-ui'

import PaperSelect from '../PaperSelect'
import InputWrapper from '../InputWrapper';
import TextFieldArray from '../TextFieldArray';
import MaskedTextField from '../MaskedTextField';

import styles from './styles';

const validate = values => {
  const schema = Joi.object().keys({
    usuario: Joi.string().alphanum().min(3).max(30).required(),
    senha: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    nomeCompleto: Joi.string().required(),
    dataNascimento: Joi.object().required(),
    sitePessoal: Joi.string().required(),
    email: Joi.string().email().required(),
    telefone: Joi.string().required(),
    celular: Joi.string().required(),
    facebook: Joi.string().required(),
    twitter: Joi.string().required(),
    instagram: Joi.string().required(),
    cpf: Joi.string().required(),
    bio: Joi.string().required(),
    portfolio: Joi.array().items(Joi.string()).min(2),
    curriculo: Joi.string(),
    profissao: Joi.string(),
    empregador: Joi.string(),
    funcoesExerce: Joi.array().items(Joi.string()),
    funcoesToparia: Joi.array().items(Joi.string()),
    fotos: Joi.array().items(Joi.string()),
    videos: Joi.array().items(Joi.string()),
    sitesReferencia: Joi.array().items(Joi.string()),
    profissionalReferencia: Joi.string(),
    aprendendoNoMomento: Joi.string(),
    tecnicaArtistica: Joi.string(),
    pagamentoPreferencial: Joi.string(),
    altura: Joi.number(),
    numeracaoBlusa: Joi.number().integer(),
    numeracaoCalca: Joi.number().integer(),
    numeracaoSapato: Joi.number().integer(),
    corOlhos: Joi.string(),
    corCabelo: Joi.string(),
  });

  const result = Joi.validate(values, schema, {abortEarly: false});  // err === null
  const formErrors = {}
  if (result.error) {
    const { details } = result.error;

    details.forEach(detail => {
      objectPath.set(formErrors, detail.path, detail.message);
    })
    //console.log(o);
    //console.log(formErrors);
  } else {
    console.log('check OK!');
  }
  return formErrors;
}


/**
 * HOC
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
/**
 * HOC
 */
const TextInput = ({
  label,
  touched,
  error,
  ...props
}) => (
  <TextField
    errorText={touched && error}
    fullWidth={true}
    floatingLabelText={label}
    floatingLabelFixed={true}
    {...props}
    />
)



class CadastroPessoalForm extends React.Component {
  render () {
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
            <TextInput
              {...usuario}
              label="Usuário" />
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
            <TextFieldArray {...fotos} />
            <h5>3 Links de vídeos</h5>
            <TextFieldArray {...videos} />
          </InputWrapper>

          <InputWrapper>
            <span>Cite pelo menos 3 sites em que você busca referências quando precisa.</span>
            <TextFieldArray
              {...sitesReferencia}
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
  ],
  validate
})(CadastroPessoalForm);

export default CadastroPessoalForm;
