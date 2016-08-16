import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form';
import Joi from 'joi-browser';
import InputWrapper from '../InputWrapper';
import SelectInput from '../SelectInput'
import { deserializeFormErrors } from '../../utils/form_errors';
import { PAGAMENTO_PREFERENCIAL } from '../../resources/options'
import {
  SelectField,
  MenuItem,
  Checkbox,
  RaisedButton,
  FlatButton
} from 'material-ui'

const schema = Joi.object().keys({
  pagamentoPreferencial: Joi.string(),
});

const validate = values => {
  const result = Joi.validate(values, schema, { abortEarly: false });
  return deserializeFormErrors(result)
}

const PassoTres = ({
  handleSubmit,
  onSubmit,
  onPrevious,
  invalid
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <h3>Pagamento</h3>
        <Field
          label="Sistema de pagamento preferencial"
          name="pagamentoPreferencial"
          options={PAGAMENTO_PREFERENCIAL}
          component={SelectInput}
        />
      </InputWrapper>
      <InputWrapper>
        <FlatButton
          label="Voltar"
          onTouchTap={onPrevious}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label={'Concluir'}
          disabled={invalid}
          primary={true}
          type='submit'
        />
      </InputWrapper>
    </form>
  )
}

PassoTres.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'cadastroPessoal',
  destroyOnUnmount: false,
  validate
})(PassoTres)
