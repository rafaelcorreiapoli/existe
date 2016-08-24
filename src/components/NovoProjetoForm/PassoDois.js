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


const schema = Joi.object().keys({
  linguagemVisual: Joi.string().required().label('Linguagem Visual'),
  procura: Joi.string().required().label('Procura'),
  publico: Joi.string().required().label('Público'),
  meiosVeiculacao: Joi.string().required().label('Meios de Veiculação'),
  tempoDuracao: Joi.string().required().label('Tempo de Duração'),
  prazoEntrega: Joi.object().required().label('Prazo de Entrega'),
});

const validate = values => {
  const result = Joi.validate(values, schema, {abortEarly: false, language});
  return deserializeFormErrors(result)
}



const PassoDois = ({
  handleSubmit,
  onSubmit,
  invalid,
  onPrevious
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoFill="false">
      <InputWrapper>
        <Field
          label="Linguagem Visual"
          component={PaperSelect}
          name="linguagemVisual"
          options={OPCOES_LINGUAGEM_VISUAL}
        />
        <Field
          label="Procura"
          component={PaperSelect}
          name="procura"
          options={OPCOES_PROCURA}
        />
        <Field
          label="Público"
          component={TextInput}
          name="publico"
        />
        <Field
          label="Meios de veiculação"
          component={PaperSelect}
          name="meiosVeiculacao"
          options={OPCOES_MEIOS_VEICULACAO}
        />
        <Field
          label="Tempo de duração do vídeo"
          component={PaperSelect}
          name="tempoDuracao"
          options={OPCOES_TEMPO_DE_DURACAO}
        />
        <Field
          label="Prazo de Entrega"
          component={DateInput}
          name="prazoEntrega"
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



PassoDois.propTypes = {
  //fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

const PassoDoisRedux = reduxForm({
  form: 'novoProjeto',
  destroyOnUnmount: false,
  validate
})(PassoDois)


export default connect(
  state => ({ ...state.form.novoProjeto.values })
)(PassoDoisRedux)
