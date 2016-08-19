import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form' // imported Field
import Joi from 'joi-browser';
import { RaisedButton } from 'material-ui'
import InputWrapper from '../InputWrapper';
import TextInput from '../TextInput';
import DateInput from '../DateInput';
import { deserializeFormErrors } from '../../utils/form_errors';
import moment from 'moment';
import language from '../../lib/joi/language'
import { telefone, celular, cpf } from '../../utils/patterns'
import SectionHeader from '../SectionHeader'


const schema = Joi.object().keys({
  usuario: Joi.string().alphanum().min(3).max(30).required().label('Usuário'),
  senha: Joi.string().min(6).required().label('Senha'),
  repetirSenha: Joi.string().min(6).required().label('Repetir Senha'),
  nomeCompleto: Joi.string().required().label('Nome completo'),
  email: Joi.string().email().required().label('E-mail'),
});

const validate = values => {
  const result = Joi.validate(values, schema, {abortEarly: false, language});
  return deserializeFormErrors(result)
}


const CadastroRapidoForm = ({
  handleSubmit,
  onSubmit,
  invalid
}) => {
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
        primary={true}
        type='submit'
      />
    </form>
  )
}

CadastroRapidoForm.propTypes = {
  //fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'cadastroRapido',
  destroyOnUnmount: false,
  validate
})(CadastroRapidoForm)
