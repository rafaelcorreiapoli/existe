import React, { PropTypes } from 'react'
import { reduxForm, FieldArray, Field } from 'redux-form';
import Joi from 'joi-browser';
import {
  RaisedButton,
  FlatButton,
} from 'material-ui'
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import BuscarUsuario from '@components/ReduxFormWidgets/BuscarUsuario';
import Row from '@components/Row'
import RemoveButton from '@components/RemoveButton'
import validator from '@utils/validator'

const schema = Joi.object().keys({
  usuarios: Joi.array()
    .items(
        Joi.string()
        .required()
      )
    .sparse(),
});

const validate = values => validator(values, schema)

class PassoQuatro extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    onPrevious: PropTypes.func,
    invalid: PropTypes.bool,
    array: PropTypes.object,
  }
  render() {
    const {
      handleSubmit,
      onSubmit,
      onPrevious,
      invalid,
      array: {
        push,
      },
    } = this.props

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <FieldArray
            label="Usuários"
            name="usuarios"
            itemLabel="Usuário"
            component={usuarios => (
              <div>
                <RaisedButton
                  primary
                  onTouchTap={() => push('usuarios', {})}
                  label="Adicionar"
                />
                {usuarios.fields.map((usuario, i) => (
                  <Row v="center" key={i}>
                    <Field
                      name={`${usuario}`}
                      component={BuscarUsuario}
                      searchId={`busca_${i}`}
                    />
                    <RemoveButton
                      onTouchTap={() => {
                        console.log('removing ', i)
                        usuarios.fields.remove(i)
                      }}
                    />
                  </Row>

                ))}
              </div>
            )}
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
