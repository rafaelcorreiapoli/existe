import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form';
import Joi from 'joi-browser';
import InputWrapper from '../InputWrapper';
import TextInput from '../TextInput'
import { deserializeFormErrors } from '../../utils/form_errors';
import {
  RaisedButton,
  FlatButton
} from 'material-ui'
import { PAGAMENTO_PREFERENCIAL } from '../../resources/options'

const schema = Joi.object().keys({
  usuarios: Joi.string(),
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
        <Field
          label="Usuários"
          name="usuarios"
          component={TextInput}
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
  form: 'cadastroEmpresarial',
  destroyOnUnmount: false,
  validate
})(PassoTres)
