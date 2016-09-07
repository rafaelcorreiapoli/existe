import React, { PropTypes } from 'react'
import Joi from 'joi-browser';
import { reduxForm, Field } from 'redux-form'
import { RaisedButton } from 'material-ui'
import _ from 'lodash'

import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import TextInput from '@components/ReduxFormWidgets/TextInput';
import DateInput from '@components/ReduxFormWidgets/DateInput';
import SectionHeader from '@components/ReduxFormWidgets/SectionHeader'
import { deserializeFormErrors } from '@utils/form_errors';
import { telefone, celular, cpf } from '@utils/patterns'
import language from '@config/joi'
import {
  urlRegex,
  passwordRegex,
  telefoneRegex,
  celularRegex,
  cpfRegex,
} from '@utils/regex';


const schema = Joi.object().keys({
  email: Joi.string()
  .email()
  .required()
  .label('E-mail'),
  username: Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required()
  .label('Usuário'),
  password: Joi.string()
  .min(6)
  .required()
  .label('Senha'),
  profile: Joi.object({
    nomeCompleto: Joi.string()
    .required()
    .label('Nome completo'),
    dataNascimento: Joi.object()
    .required()
    .label('Data de Nascimento'),
    telefone: Joi.string()
    .required()
    .regex(telefoneRegex)
    .label('Telefone'),
    celular: Joi.string()
    .required()
    .regex(celularRegex)
    .label('Celular'),
  })
  .required(),
});

const validate = values => {
  const interestingValues = _.pick(values, [
    'email',
    'username',
    'password',
    'profile',
  ])
  interestingValues.profile = interestingValues.profile || {}
  const result = Joi.validate(interestingValues, schema, { abortEarly: false, language });
  return deserializeFormErrors(result)
}

class PassoUm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    invalid: PropTypes.bool,
  }

  render() {
    const {
      handleSubmit,
      onSubmit,
      invalid,
    } = this.props

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Field
            label="E-mail"
            component={TextInput}
            name="email"
          />
          <Field
            label="Usuário"
            component={TextInput}
            name="username"
          />
          <Field
            label="Senha"
            component={TextInput}
            name="password"
            type="password"
          />
          <Field
            label="Nome completo"
            component={TextInput}
            name="profile.nomeCompleto"
          />
          <Field
            label="Data de Nascimento"
            component={DateInput}
            name="profile.dataNascimento"
          />
          <Field
            label="Celular"
            component={TextInput}
            normalize={celular}
            name="profile.celular"
          />
          <Field
            label="Telefone"
            component={TextInput}
            normalize={telefone}
            name="profile.telefone"
          />
        </InputWrapper>
        <RaisedButton
          label={'Próximo'}
          disabled={invalid}
          primary
          type="submit"
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'cadastroEmpresarial',
  destroyOnUnmount: false,
  validate,
})(PassoUm)
