import React, { PropTypes } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
import { connect } from 'react-redux'
import Joi from 'joi-browser';
import InputWrapper from '../InputWrapper';
import TextInput from '../TextInput';
import TextInputArray from '../TextInputArray';
import DateInput from '../DateInput';
import PaperSelect from '../PaperSelect'
import { RaisedButton, FlatButton, Paper } from 'material-ui';
import language from '../../lib/joi/language'
import { deserializeFormErrors } from '../../utils/form_errors';
import styles from './styles';


import {
  OPCOES_OBJETIVOS,
  OPCOES_CATEGORIA,
  OPCOES_SUBCATEGORIA,
  OPCOES_LINGUAGEM_VISUAL,
  OPCOES_MEIOS_VEICULACAO,
  OPCOES_PROCURA,
  OPCOES_TEMPO_DE_DURACAO
} from './opcoes';

const langFactory = (str) => {
  return { language: { any: { required: str }}}
}


const schema = Joi.object().keys({
  esperaGastar: Joi.string().required().label('Espera Gastar'),
  capa: Joi.string().required().label('Capa'),
  nome: Joi.string().required().label('Nome'),
  descricao: Joi.string().required().label('Descrição'),
  links: Joi.array().items(
    Joi.string().required().options(langFactory('!!Coloque um link de referência'))
  ).required().label('Links').sparse(),
  arquivos: Joi.array().items(
    Joi.string().required().options(langFactory('!!Coloque um arquivo'))
  ).required().label('Arquivos').sparse(),
});

const validate = values => {
  const result = Joi.validate(values, schema, {abortEarly: false, language});
  return deserializeFormErrors(result, ['links', 'arquivos'])
}

const PassoTres = ({
  handleSubmit,
  onSubmit,
  invalid,
  onPrevious
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoFill="false">
      <InputWrapper>
        <Field
          label="Quanto você espera gastar?"
          component={TextInput}
          name="esperaGastar"
        />
        <Field
          label="Capa do Projeto"
          component={TextInput}
          name="capa"
        />
        <Field
          label="Nome do Projeto"
          component={TextInput}
          name="nome"
        />
        <Field
          label="Descrição do Projeto"
          component={TextInput}
          name="descricao"
        />
        <FieldArray
          label="Links"
          itemLabel='Link'
          component={TextInputArray}
          name="links"
        />
        <FieldArray
          label="Arquivos"
          itemLabel='Arquivo'
          component={TextInputArray}
          name="arquivos"
        />
      </InputWrapper>
      <InputWrapper>
        <FlatButton
          label="Voltar"
          onTouchTap={onPrevious}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label={'Próximo'}
          disabled={invalid}
          primary={true}
          type='submit'
        />
      </InputWrapper>
    </form>
  )
}



PassoTres.propTypes = {
  //fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

const PassoTresRedux = reduxForm({
  form: 'novoProjeto',
  destroyOnUnmount: false,
  validate
})(PassoTres)


export default connect(
  state => ({ ...state.form.novoProjeto.values })
)(PassoTresRedux)
