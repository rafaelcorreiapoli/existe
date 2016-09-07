import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form';
import Joi from 'joi-browser';
import _ from 'lodash'
import {
  RaisedButton,
  FlatButton,
} from 'material-ui'
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import SelectInput from '@components/ReduxFormWidgets/SelectInput'
import { deserializeFormErrors } from '@utils/form_errors';
import { PAGAMENTO_PREFERENCIAL } from '@resources/options'


const schema = Joi.object().keys({
  pagamentoPreferencial: Joi.string(),
});

const validate = values => {
  const interestingValues = _.pick(values, [
    'pagamentoPreferencial',
  ])

  const result = Joi.validate(interestingValues, schema, { abortEarly: false });
  return deserializeFormErrors(result)
}

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
            label={'Próximo'}
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
})(PassoTres)
