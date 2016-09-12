import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import Joi from 'joi-browser';
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import TextInput from '@components/ReduxFormWidgets/TextInput';
import PaperSelect from '@components/ReduxFormWidgets/PaperSelect'
import { RaisedButton } from 'material-ui';
import validator from '@utils/validator'

import {
  OPCOES_OBJETIVOS,
  OPCOES_CATEGORIA,
  OPCOES_SUBCATEGORIA,
} from './opcoes';


const schema = Joi.object({
  objetivo: Joi.string().required().label('Objetivo'),
  categoria: Joi.string().required().label('Categoria'),
  nomeCliente: Joi.string().required().label('Nome do Cliente'),
  segmentoAtuacao: Joi.string().required().label('Segmento de atuação'),
  subcategoria: Joi.string().required().label('Subcategoria'),
});

const validate = values => validator(values, schema)

const PassoUm = ({
  handleSubmit,
  onSubmit,
  invalid,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoFill="false">
      <InputWrapper>
        <Field
          label="Nome do Cliente"
          component={TextInput}
          name="nomeCliente"
        />
        <Field
          label="Segmento de atuação"
          component={TextInput}
          name="segmentoAtuacao"
        />
        <Field
          label="Objetivo"
          component={PaperSelect}
          name="objetivo"
          options={OPCOES_OBJETIVOS}
        />
        <Field
          label="Categoria"
          component={PaperSelect}
          name="categoria"
          options={OPCOES_CATEGORIA}
        />
        <Field
          label="Subcategoria"
          component={PaperSelect}
          name="subcategoria"
          options={OPCOES_SUBCATEGORIA}
        />
      </InputWrapper>
      <InputWrapper>
        {/* <FlatButton
          label="Visualizar Projeto"
          onTouchTap={() => console.log('visualizarProjeto')}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label={'Salvar'}
          disabled={invalid}
          primary={true}
          type='submit'
        /> */}
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


PassoUm.propTypes = {
  // fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'novoProjeto',
  destroyOnUnmount: false,
  validate,
})(PassoUm)