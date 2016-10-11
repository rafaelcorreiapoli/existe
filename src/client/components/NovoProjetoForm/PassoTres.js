import React, { PropTypes } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form'
import { connect } from 'react-redux'
import Joi from 'joi-browser';
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import TextInput from '@components/ReduxFormWidgets/TextInput';
import TextInputArray from '@components/ReduxFormWidgets/TextInputArray';
import { RaisedButton, FlatButton } from 'material-ui';
import validator from '@utils/validator'
import FileDropzone from '@components/FileDropzone'
import AutoUpload from '@components/AutoUpload'


const langFactory = (str) => {
  return { language: { any: { required: str } } }
}


const schema = Joi.object({
  esperaGastar: Joi.number().required().label('Espera Gastar'),
  capa: Joi.object().required().label('Capa'),
  nome: Joi.string().required().label('Nome'),
  descricao: Joi.string().required().label('Descrição'),
  links: Joi.array().items(
    Joi.string().required().options(langFactory('!!Coloque um link de referência'))
  ).required().label('Links')
  .sparse(),
  arquivos: Joi.array().items(
    Joi.object().required()
  ).required().sparse(),
});

const validate = values => {
  const errors = validator(values, schema, ['arquivos'])
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
            component={capa => (
              <div>
                <div style={{ marginTop: 10, marginBottom: 10 }}>
                  <span>Capa do Projeto</span>
                </div>
                {
                  !capa.input.value &&
                    <FileDropzone
                      onDrop={(files) => {
                        capa.input.onChange({
                          preview: files[0].preview,
                          status: 5,
                          progress: 0,
                          file: files[0],
                        })
                      }}
                      multiple={false}
                    />
                }
                {
                  capa.input.value &&
                    <AutoUpload
                      {...capa}
                      onRemove={() => capa.input.onChange(null)}
                    />
                }
              </div>

            )}
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
            component={arquivos => (
              <div>
                <div style={{ marginTop: 10, marginBottom: 10 }}>
                  <span>Arquivos</span>
                </div>
                {
                  <FileDropzone
                    onDrop={(files) => {
                      files.forEach(file => arquivos.fields.push({
                        preview: file.preview,
                        status: 5,
                        progress: 0,
                        file,
                      }))
                    }}
                  />
                }
                <div
                  style={{ display: 'flex', flexWrap: 'wrap' }}
                >
                  {
                    arquivos.fields.map((ark, i) => (
                      <Field
                        key={i}
                        name={`${ark}`}
                        component={AutoUpload}
                        onRemove={() => arquivos.fields.remove(i)}
                        style={{ display: 'inline-flex' }}
                      />
                    ))
                  }
                </div>
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
