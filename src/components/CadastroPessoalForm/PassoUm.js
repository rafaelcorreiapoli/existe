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
  nomeCompleto: Joi.string().required().label('Nome completo'),
  dataNascimento: Joi.object().required().label('Data de Nascimento'),
  sitePessoal: Joi.string().regex(urlRegex).required().label('Site pessoal'),
  email: Joi.string().email().required().label('E-mail'),
  celular: Joi.string().required().regex(celularRegex).label('Celular'),
  telefone: Joi.string().required().regex(telefoneRegex).label('Telefone'),
  facebook: Joi.string().required().regex(urlRegex).label('Facebook'),
  twitter: Joi.string().required().regex(urlRegex).label('Twitter'),
  instagram: Joi.string().required().regex(urlRegex).label('Instagram'),
  cpf: Joi.string().regex(cpfRegex).required().label('CPF'),
  bio: Joi.string().required().label('Bio'),
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
        <SectionHeader text={'Perfil'} />
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
          label="Data de Nascimento"
          component={DateInput}
          name="dataNascimento"
        />
        <Field
          label="CPF"
          normalize={cpf}
          component={TextInput}
          name="cpf"
        />
        <Field
          label="Biografia"
          component={TextInput}
          name="bio"
          rows={3}
          rowsMax={3}
          multiLine={true}
        />
      </InputWrapper>
      <InputWrapper>
        <SectionHeader text={'Contato'} />
        <Field
          label="Site Pessoal"
          component={TextInput}
          name="sitePessoal"
        />
        <Field
          label="E-mail"
          component={TextInput}
          name="email"
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
      <InputWrapper>
        <SectionHeader text={'Redes Sociais'} />
        <Field
          label="Facebook"
          component={TextInput}
          name="facebook"
        />
        <Field
          label="Twitter"
          component={TextInput}
          name="twitter"
        />
        <Field
          label="Instagram"
          component={TextInput}
          name="instagram"
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
  form: 'cadastroPessoal',
  destroyOnUnmount: false,
  validate
})(PassoUm)
