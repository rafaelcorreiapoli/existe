import React, { PropTypes } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
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


const schema = Joi.object().keys({
  objetivo: Joi.string().required().label('Objetivo'),
  categoria: Joi.string().required().label('Categoria'),
  nomeCliente: Joi.string().required().label('Nome do Cliente'),
  segmentoAtuacao: Joi.string().required().label('Segmento de atuação'),
  subcategoria: Joi.string().required().label('Subcategoria'),
});

const validate = values => {
  const result = Joi.validate(values, schema, {abortEarly: false, language});
  return deserializeFormErrors(result)
}

const PassoUm = ({
  handleSubmit,
  onSubmit,
  invalid
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoFill="false">
      <InputWrapper>
        <Field
          label="Nome do Cliente"
          component={TextInput}
          name="nomeCliente"
        />
        <Field
          label="Segmento de atuação"
          component={TextInput}
          name="segmentoAtuacao"
        />
        <Field
          label="Objetivo"
          component={PaperSelect}
          name="objetivo"
          options={OPCOES_OBJETIVOS}
        />
        <Field
          label="Categoria"
          component={PaperSelect}
          name="categoria"
          options={OPCOES_CATEGORIA}
        />
        <Field
          label="Subcategoria"
          component={PaperSelect}
          name="subcategoria"
          options={OPCOES_SUBCATEGORIA}
        />
      </InputWrapper>
      <InputWrapper>
        {/* <FlatButton
          label="Visualizar Projeto"
          onTouchTap={() => console.log('visualizarProjeto')}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label={'Salvar'}
          disabled={invalid}
          primary={true}
          type='submit'
        /> */}
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



PassoUm.propTypes = {
  //fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'novoProjeto',
  destroyOnUnmount: false,
  validate
})(PassoUm)
