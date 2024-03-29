import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form';
import Joi from 'joi-browser';
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import SelectInput from '@components/ReduxFormWidgets/SelectInput'
import { PAGAMENTO_PREFERENCIAL } from '@resources/options'
import validator from '@utils/validator'

import {
  RaisedButton,
  FlatButton,
} from 'material-ui'

const schema = Joi.object().keys({
  pagamentoPreferencial: Joi.string().required(),
});

const validate = values => validator(values, schema)


class PassoTres extends React.Component {
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
          <h3>Pagamento</h3>
          <Field
            label="Sistema de pagamento preferencial"
            name="pagamentoPreferencial"
            options={PAGAMENTO_PREFERENCIAL}
            component={SelectInput}
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
  form: 'cadastroPessoal',
  destroyOnUnmount: false,
  validate,
})(PassoTres)
