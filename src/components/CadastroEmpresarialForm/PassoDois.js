import React, { PropTypes } from 'react'
import Joi from 'joi-browser';
import moment from 'moment';
import { reduxForm, Field } from 'redux-form'
import { RaisedButton } from 'material-ui'
import InputWrapper from '../InputWrapper';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import FuncoesCheckTable from '../FuncoesCheckTable';
import SectionHeader from '../SectionHeader'
import { deserializeFormErrors } from '../../utils/form_errors';
import { cnpjNormalizer } from '../../utils/patterns'
import language from '../../lib/joi/language'

import { TIPOS_EMPRESA, AREAS_E_FUNCOES } from '../../resources/options'

import {
  urlRegex,
  cnpjRegex
} from '../../utils/regex';


const schema = Joi.object().keys({
  tipoEmpresa: Joi.string().required().label('Tipo de empresa'),
  areaAtuacao: Joi.string().required().label('Área de atuação'),
  site: Joi.string().regex(urlRegex).required().label('Site'),
  endereco: Joi.string().required().label('Endereço'),
  cnpj: Joi.string().required().regex(cnpjRegex).label('CNPJ'),
  bio: Joi.string().required().label('Bio'),
  funcoes: Joi.object().required(),
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
          label="Tipo de empresa"
          name="tipoEmpresa"
          options={TIPOS_EMPRESA}
          component={SelectInput}
        />
        <Field
          label="Área de atuação"
          name="areaAtuacao"
          component={TextInput}
        />
        <Field
          label="Site"
          name="site"
          component={TextInput}
        />
        <Field
          label="Endereço"
          name="endereco"
          component={TextInput}
        />
        <Field
          label="CNPJ"
          name="cnpj"
          component={TextInput}
          normalize={cnpjNormalizer}
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
        <SectionHeader text={'Funções'} />
        <Field
          options={AREAS_E_FUNCOES}
          component={FuncoesCheckTable}
          name="funcoes"
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
