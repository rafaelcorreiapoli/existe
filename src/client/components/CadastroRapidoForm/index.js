import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form' // imported Field
import Joi from 'joi-browser';
import { RaisedButton } from 'material-ui'
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import TextInput from '@components/ReduxFormWidgets/TextInput';
import DateInput from '@components/ReduxFormWidgets/DateInput';
import SectionHeader from '@components/ReduxFormWidgets/SectionHeader'
import { deserializeFormErrors } from '@utils/form_errors';
import language from '@config/joi'
import { telefone, celular, cpf } from '@utils/patterns'


const schema = Joi.object().keys({
  usuario: Joi
  .string()
  .alphanum()
  .min(3)
  .max(30)
  .required()
  .label('Usuário'),
  senha: Joi.string()
  .min(6)
  .required()
  .label('Senha'),
  repetirSenha: Joi.string()
  .min(6)
  .required()
  .label('Repetir Senha'),
  nomeCompleto: Joi.string()
  .required()
  .label('Nome completo'),
  email: Joi
  .string()
  .email()
  .required()
  .label('E-mail'),
});

const validate = values => {
  const result = Joi.validate(values, schema, { abortEarly: false, language });
  return deserializeFormErrors(result)
}

class CadastroRapidoForm extends React.Component {
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
          <SectionHeader text={'Cadastro'} />
          <Field
            label="E-mail"
            component={TextInput}
            name="email"
          />
          <Field
            label="Usuário"
            component={TextInput}
            name="usuario"
          />
          <Field
            label="Senha"
            component={TextInput}
            name="senha"
            type="password"
          />
          <Field
            label="Repetir Senha"
            component={TextInput}
            name="repetirSenha"
            type="password"
          />
          <Field
            label="Nome Completo"
            component={TextInput}
            name="nomeCompleto"
          />
        </InputWrapper>

        <RaisedButton
          label={'Cadastrar-se!'}
          disabled={invalid}
          primary
          type="submit"
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'cadastroRapido',
  destroyOnUnmount: false,
  validate,
})(CadastroRapidoForm)
