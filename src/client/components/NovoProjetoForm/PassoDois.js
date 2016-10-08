import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { RaisedButton, FlatButton } from 'material-ui';
import { connect } from 'react-redux'
import Joi from 'joi-browser';
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import TextInput from '@components/ReduxFormWidgets/TextInput';
import DateInput from '@components/ReduxFormWidgets/DateInput';
import PaperSelect from '@components/ReduxFormWidgets/PaperSelect'
import validator from '@utils/validator'

import {
  OPCOES_LINGUAGEM_VISUAL,
  OPCOES_MEIOS_VEICULACAO,
  OPCOES_PROCURA,
  OPCOES_TEMPO_DE_DURACAO,
} from './opcoes';


const schema = Joi.object({
  linguagemVisual: Joi.string().required().label('Linguagem Visual'),
  procura: Joi.string().required().label('Procura'),
  publico: Joi.string().required().label('Público'),
  meiosVeiculacao: Joi.string().required().label('Meios de Veiculação'),
  tempoDuracao: Joi.string().required().label('Tempo de Duração'),
  prazoEntrega: Joi.object().required().label('Prazo de Entrega'),
});

const validate = values => validator(values, schema)


const PassoDois = ({
  handleSubmit,
  onSubmit,
  invalid,
  onPrevious,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Field
          label="Público"
          component={TextInput}
          name="publico"
        />
        <Field
          label="Prazo de Entrega"
          component={DateInput}
          name="prazoEntrega"
        />
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
      </InputWrapper>
      <InputWrapper>
        <FlatButton
          label="Voltar"
          onTouchTap={onPrevious}
          style={{ marginRight: 12 }}
        />
        <RaisedButton
          label={'Próximo'}
          disabled={invalid}
          primary
          type="submit"
        />
      </InputWrapper>
    </form>
  )
}


PassoDois.propTypes = {
  // fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const PassoDoisRedux = reduxForm({
  form: 'novoProjeto',
  destroyOnUnmount: false,
  validate,
})(PassoDois)


export default connect(
  state => ({ ...state.form.novoProjeto.values })
)(PassoDoisRedux)
