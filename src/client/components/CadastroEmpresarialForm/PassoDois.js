import React, { PropTypes } from 'react'
import Joi from 'joi-browser';
import { reduxForm, Field } from 'redux-form'
import { RaisedButton } from 'material-ui'
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import TextInput from '@components/ReduxFormWidgets/TextInput';
import SelectInput from '@components/ReduxFormWidgets/SelectInput';
import FuncoesCheckTable from '@components/ReduxFormWidgets/FuncoesCheckTable';
import SectionHeader from '@components/ReduxFormWidgets/SectionHeader'
import { deserializeFormErrors } from '@utils/form_errors';
import { cnpjNormalizer } from '@utils/patterns'
import language from '@config/joi'
import _ from 'lodash'
import { TIPOS_EMPRESA, AREAS_E_FUNCOES } from '@resources/options'
import {
  urlRegex,
  cnpjRegex,
} from '@utils/regex';


const schema = Joi.object({
  tipoEmpresa: Joi.string()
  .required()
  .label('Tipo de empresa'),
  areaAtuacao: Joi.string()
  .required()
  .label('Área de atuação'),
  site: Joi.string()
  .regex(urlRegex)
  .required()
  .label('Site'),
  endereco: Joi.string()
  .required()
  .label('Endereço'),
  cnpj: Joi.string()
  .required()
  .regex(cnpjRegex)
  .label('CNPJ'),
  bio: Joi.string()
  .required()
  .label('Bio'),
  funcoes: Joi
  .object()
  .required(),
});

const validate = values => {
  const interestingValues = _.pick(values, [
    'tipoEmpresa',
    'areaAtuacao',
    'site',
    'endereco',
    'cnpj',
    'bio',
    'funcoes',
  ])

  const result = Joi.validate(interestingValues, schema, { abortEarly: false, language });
  return deserializeFormErrors(result)
}


class PassoUm extends React.Component {
  propTypes = {
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
            multiLine
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
