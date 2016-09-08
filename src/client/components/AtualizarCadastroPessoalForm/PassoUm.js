import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form' // imported Field
import Joi from 'joi-browser';
import { RaisedButton } from 'material-ui'
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import TextInput from '@components/ReduxFormWidgets/TextInput';
import DateInput from '@components/ReduxFormWidgets/DateInput';
import { deserializeFormErrors } from '@utils/form_errors';
import language from '@config/joi'
import { telefone, celular, cpf } from '@utils/patterns'
import _ from 'lodash'
import SectionHeader from '@components/ReduxFormWidgets/SectionHeader'
import {
  urlRegex,
  telefoneRegex,
  celularRegex,
  cpfRegex,
} from '@utils/regex';


const schema = Joi.object().keys({
  // usuario: Joi.string()
  // .alphanum()
  // .min(3)
  // .max(30)
  // .required()
  // .label('Usuário'),
  // senha: Joi.string()
  // .min(6)
  // .required()
  // .label('Senha'),
  profile: Joi.object({
    nomeCompleto: Joi.string()
    .required()
    .label('Nome completo'),
    dataNascimento: Joi.object()
    .required()
    .label('Data de Nascimento'),
    sitePessoal: Joi.string()
    .regex(urlRegex)
    .required()
    .label('Site pessoal'),
    email: Joi.string()
    .email()
    .required()
    .label('E-mail'),
    celular: Joi.string()
    .required()
    .regex(celularRegex)
    .label('Celular'),
    telefone: Joi.string()
    .required()
    .regex(telefoneRegex)
    .label('Telefone'),
    cpf: Joi.string()
    .regex(cpfRegex)
    .required()
    .label('CPF'),
    bio: Joi
    .string()
    .required()
    .label('Bio'),
    social: Joi.object({
      facebook: Joi.string()
      .required()
      .regex(urlRegex)
      .label('Facebook'),
      twitter: Joi.string()
      .required()
      .regex(urlRegex)
      .label('Twitter'),
      instagram: Joi.string()
      .required()
      .regex(urlRegex)
      .label('Instagram'),
    }),
  }),
});

const validate = values => {
  const interestingValues = _.pick(values, [
    'profile',
  ])

  const result = Joi.validate(interestingValues, schema, { abortEarly: false, language });
  return deserializeFormErrors(result)
}


const PassoUm = ({
  handleSubmit,
  onSubmit,
  invalid,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoFill="false">
      <InputWrapper>
        <SectionHeader text={'Perfil'} />
        <Field
          label="Nome Completo"
          component={TextInput}
          name="profile.nomeCompleto"
        />
        <Field
          label="Data de Nascimento"
          component={DateInput}
          name="profile.dataNascimento"
        />
        <Field
          label="CPF"
          normalize={cpf}
          component={TextInput}
          name="profile.cpf"
        />
        <Field
          label="Biografia"
          component={TextInput}
          name="profile.bio"
          rows={3}
          rowsMax={3}
          multiLine
        />
      </InputWrapper>
      <InputWrapper>
        <SectionHeader text={'Contato'} />
        <Field
          label="Site Pessoal"
          component={TextInput}
          name="profile.sitePessoal"
        />
        <Field
          label="E-mail"
          component={TextInput}
          name="profile.email"
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
      <InputWrapper>
        <SectionHeader text={'Redes Sociais'} />
        <Field
          label="Facebook"
          component={TextInput}
          name="profile.social.facebook"
        />
        <Field
          label="Twitter"
          component={TextInput}
          name="profile.social.twitter"
        />
        <Field
          label="Instagram"
          component={TextInput}
          name="profile.social.instagram"
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

PassoUm.propTypes = {
  // fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'cadastroPessoal',
  destroyOnUnmount: false,
  validate,
})(PassoUm)
