import React, { PropTypes } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
import Joi from 'joi-browser';
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import TextInput from '@components/ReduxFormWidgets/TextInput';
import TextInputArray from '@components/ReduxFormWidgets/TextInputArray';
import { RaisedButton, FlatButton } from 'material-ui';
import validator from '@utils/validator'
import FileUploadArray from '@components/ReduxFormWidgets/FileUploadArray'
import FileUpload from '@components/ReduxFormWidgets/FileUpload'

const langFactory = (str) => {
  return { language: { any: { required: str } } }
}


const schema = Joi.object({
  esperaGastar: Joi.number().required().label('Espera Gastar'),
  capa: Joi.object().required().label('Capa'),
  nome: Joi.string().required().label('Nome'),
  descricao: Joi.string().required().label('Descrição'),
  links: Joi.array().items(
    Joi.string().required()
  ).required().label('Links'),
  arquivos: Joi.array().items(
    Joi.object().required()
  ).required(),
});

const validate = values => {
  const errors = validator(values, schema, ['arquivos', 'links'])
  // console.log(errors)
  return errors
}

class PassoTres extends React.Component {
  render() {
    const {
      handleSubmit,
      onSubmit,
      invalid,
      onPrevious,
      array: {
        push,
      },
    } = this.props

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
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
            name="capa"
            component={FileUpload}
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
            name="arquivos"
            component={FileUploadArray}
            label="Arquivos"
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


PassoTres.propTypes = {
  // fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const PassoTresRedux = reduxForm({
  form: 'novoProjeto',
  destroyOnUnmount: false,
  validate,
})(PassoTres)

export default PassoTresRedux
// export default connect(
//   state => ({ ...state.form.novoProjeto.values })
// )(PassoTresRedux)
