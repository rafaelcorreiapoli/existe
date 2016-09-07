import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm, FieldArray } from 'redux-form';
import Joi from 'joi-browser';
import {
  RaisedButton,
  FlatButton,
} from 'material-ui'
import _ from 'lodash'

import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import TextInputArray from '@components/ReduxFormWidgets/TextInputArray';
import { deserializeFormErrors } from '@utils/form_errors';


import { PAGAMENTO_PREFERENCIAL } from '@resources/options'


const langFactory = (str) => {
  return { language: { any: { required: str } } }
}

const schema = Joi.object().keys({
  usuarios: Joi.array()
    .items(
        Joi.string()
        .required()
        .options(langFactory('!!Coloque o nome do usuário'))
      )
    .sparse(),
});
const validate = values => {
  const interestingValues = _.pick(values, [
    'usuarios',
  ])

  const result = Joi.validate(interestingValues, schema, { abortEarly: false });
  return deserializeFormErrors(result, ['usuarios'])
}


class PassoQuatro extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    onPrevious: PropTypes.func,
    invalid: PropTypes.bool,
  }
  render() {
    const {
      handleSubmit,
      onSubmit,
      onPrevious,
      invalid,
    } = this.props

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <FieldArray
            label="Usuários"
            name="usuarios"
            itemLabel="Usuário"
            component={TextInputArray}
          />
        </InputWrapper>
        <InputWrapper>
          <FlatButton
            label="Voltar"
            onTouchTap={onPrevious}
            style={{ marginRight: 12 }}
          />
          <RaisedButton
            label={'Concluir'}
            disabled={invalid}
            primary
            type="submit"
          />
        </InputWrapper>
      </form>
    )
  }
}

export default reduxForm({
  form: 'cadastroEmpresarial',
  destroyOnUnmount: false,
  validate,
})(PassoQuatro)
