import React, { PropTypes } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
import { connect } from 'react-redux'
import Joi from 'joi-browser';
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import TextInput from '@components/ReduxFormWidgets/TextInput';
import TextInputArray from '@components/ReduxFormWidgets/TextInputArray';
import { RaisedButton, FlatButton } from 'material-ui';
import validator from '@utils/validator'

const langFactory = (str) => {
  return { language: { any: { required: str } } }
}


const schema = Joi.object({
  esperaGastar: Joi.number().required().label('Espera Gastar'),
  capa: Joi.string().required().label('Capa'),
  nome: Joi.string().required().label('Nome'),
  descricao: Joi.string().required().label('Descrição'),
  links: Joi.array().items(
    Joi.string().required().options(langFactory('!!Coloque um link de referência'))
  ).required().label('Links').sparse(),
  arquivos: Joi.array().items(
    Joi.string().required().options(langFactory('!!Coloque um arquivo'))
  ).required().label('Arquivos').sparse(),
});

const validate = values => validator(values, schema)
const PassoTres = ({
  handleSubmit,
  onSubmit,
  invalid,
  onPrevious,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoFill="false">
      <InputWrapper>
        <Field
          label="Quanto você espera gastar?"
          component={TextInput}
          type="number"
          step="any"
          name="esperaGastar"
        />
        <Field
          label="Capa do Projeto"
          component={TextInput}
          name="capa"
        />
        <Field
          label="Nome do Projeto"
          component={TextInput}
          name="nome"
        />
        <Field
          label="Descrição do Projeto"
          component={TextInput}
          name="descricao"
        />
        <FieldArray
          label="Links"
          itemLabel="Link"
          component={TextInputArray}
          name="links"
        />
        <FieldArray
          label="Arquivos"
          itemLabel="Arquivo"
          component={TextInputArray}
          name="arquivos"
        />
      </InputWrapper>
      <InputWrapper>
        <FlatButton
          label="Voltar"
          onTouchTap={onPrevious}
          style={{ marginRight: 12 }}
        />
        <RaisedButton
          label={'Próximo'}
          disabled={invalid}
          primary
          type="submit"
        />
      </InputWrapper>
    </form>
  )
}


PassoTres.propTypes = {
  // fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const PassoTresRedux = reduxForm({
  form: 'novoProjeto',
  destroyOnUnmount: false,
  validate,
})(PassoTres)


export default connect(
  state => ({ ...state.form.novoProjeto.values })
)(PassoTresRedux)
