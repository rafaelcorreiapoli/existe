import React, { PropTypes } from 'react'
import Joi from 'joi-browser';
import moment from 'moment';
import { reduxForm, Field } from 'redux-form'
import { RaisedButton } from 'material-ui'
import InputWrapper from '../InputWrapper';
import TextInput from '../TextInput';
import DateInput from '../DateInput';
import SectionHeader from '../SectionHeader'
import { deserializeFormErrors } from '../../utils/form_errors';
import { telefone, celular, cpf } from '../../utils/patterns'
import language from '../../lib/joi/language'

import {
  urlRegex,
  passwordRegex,
  telefoneRegex,
  celularRegex,
  cpfRegex
} from '../../utils/regex';


const schema = Joi.object().keys({
  usuario: Joi.string().alphanum().min(3).max(30).required().label('Usuário'),
  senha: Joi.string().min(6).required().label('Senha'),
  email: Joi.string().email().required().label('E-mail'),
  nomeCompleto: Joi.string().required().label('Nome completo'),
  dataNascimento: Joi.object().required().label('Data de Nascimento'),
  telefone: Joi.string().required().regex(telefoneRegex).label('Telefone'),
  celular: Joi.string().required().regex(celularRegex).label('Celular'),
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
     <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        {/*<SectionHeader text={'Perfil'} />*/}
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
          label="Nome completo"
          component={TextInput}
          name="nomeCompleto"
        />
        <Field
          label="E-mail"
          component={TextInput}
          name="email"
        />
        <Field
          label="Data de Nascimento"
          component={DateInput}
          name="dataNascimento"
        />
        <Field
          label="Celular"
          component={TextInput}
          normalize={celular}
          name="celular"
        />
        <Field
          label="Telefone"
          component={TextInput}
          normalize={telefone}
          name="telefone"
        />
      </InputWrapper>
      <RaisedButton
        label={'Próximo'}
        disabled={invalid}
        primary={true}
        type='submit'
      />
    </form>
  )
}

PassoUm.propTypes = {
  //fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'cadastroEmpresarial',
  destroyOnUnmount: false,
  validate
})(PassoUm)
