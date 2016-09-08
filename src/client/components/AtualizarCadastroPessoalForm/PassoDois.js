import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { reduxForm, Field, FieldArray, formValueSelector } from 'redux-form';
import Joi from 'joi-browser';
import InputWrapper from '@components/ReduxFormWidgets/InputWrapper';
import TextInput from '@components/ReduxFormWidgets/TextInput';
import TextInputArray from '@components/ReduxFormWidgets/TextInputArray';
import SelectInput from '@components/ReduxFormWidgets/SelectInput';
import FuncoesCheckTable from '@components/ReduxFormWidgets/FuncoesCheckTable';
import SectionHeader from '@components/ReduxFormWidgets/SectionHeader'
import language from '@config/joi'
import { EXPRESSOES_ARTISTICAS, COR_CABELOS, COR_OLHOS, AREAS_E_FUNCOES } from '@resources/options'
import { deserializeFormErrors } from '@utils/form_errors';
import {
  RaisedButton,
  FlatButton,
} from 'material-ui'
import _ from 'lodash';

const langFactory = (str) => {
  return { language: { any: { required: str } } }
}

const isAtorOuAtriz = (funcoes) => (
  (funcoes && funcoes.exerce &&
  (funcoes.exerce.indexOf('ator') !== -1 || funcoes.exerce.indexOf('atriz') !== -1)) ||
  (funcoes && funcoes.toparia &&
  (funcoes.toparia.indexOf('ator') !== -1 || funcoes.toparia.indexOf('atriz') !== -1))
)
const validate = values => {
  const interestingValues = _.pick(values, [
    'portfolio',
    'curriculo',
    'profissao',
    'empregador',
    'funcoes',
    'referencias',
    'questionario',
    'ator',
  ])


  const atorOuAtriz = isAtorOuAtriz(values.funcoes)

  const altura = Joi.number().label('Altura').required();
  const numeracao = Joi.object({
    blusa: Joi.number().integer().label('Numeração da blusa').required(),
    calca: Joi.number().integer().label('Numeração da calça').required(),
    sapato: Joi.number().integer().label('Numeração do sapato').required(),
  }).required()
  const corOlhos = Joi.string().label('Cor dos olhos').required();
  const corCabelo = Joi.string().label('Cor do cabelo').required();

  let ator = Joi.object({
    altura,
    numeracao,
    corOlhos,
    corCabelo,
  })

  if (atorOuAtriz) {
    ator = ator.required()
  }

  const schema = Joi.object().keys({
    portfolio: Joi.array()
      .items(
        Joi.string()
        .required()
      )
      .label('Portfólio')
      .sparse(),
    curriculo: Joi
      .string()
      .required()
      .label('Currículo'),
    profissao: Joi
      .string()
      .label('Profissão'),
    empregador: Joi
      .string()
      .label('Empregador'),
    funcoes: Joi
      .object()
      .required(),

    referencias: Joi.object({
      texto: Joi.string(),
      fotos: Joi.array()
        .items(
          Joi.string()
          .required()
          .options(langFactory('!!Coloque o link para uma foto'))
        )
        .label('Fotos')
        .sparse(),
      videos: Joi.array()
        .items(
          Joi.string()
          .required()
          .options(langFactory('!!Coloque o link para um vídeo'))
        )
        .label('Vídeos')
        .sparse(),
    }),
    questionario: Joi.object({
      sitesReferencia: Joi.array()
        .items(
          Joi.string()
          .required()
          .options(langFactory('!!Coloque o link para um site de referência'))
        )
        .label('Sites de Referência')
        .sparse(),
      profissionalReferencia: Joi.string()
        .label('Profissional de Referência'),
      aprendendoNoMomento: Joi.string()
        .label('Aprendendo no momento'),
      tecnicaArtistica: Joi.string()
        .label('Técnica Artística'),
    }),
    ator,
  });

  const result = Joi.validate(interestingValues, schema, { abortEarly: false, language });

  return deserializeFormErrors(result, [
    'portfolio',
    'referencias.fotos',
    'referencias.videos',
    'questionario.sitesReferencia',
  ])
}


class PassoDois extends React.Component {
  static propTypes = {
    atorOuAtriz: PropTypes.bool,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    onPrevious: PropTypes.func,
    invalid: PropTypes.bool,
  }

  render() {
    const {
      atorOuAtriz,
      handleSubmit,
      onSubmit,
      onPrevious,
      invalid,
    } = this.props

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <SectionHeader text={'Carreira'} />
          <FieldArray
            label="Portfolio (máximo 5 items)"
            name="portfolio"
            itemLabel="Portfolio"
            minItems={2}
            maxItems={5}
            component={TextInputArray}
          />
          <Field
            label="Currículo"
            component={TextInput}
            name="curriculo"
          />
          <Field
            label="Profissão"
            component={TextInput}
            name="profissao"
          />
          <Field
            label="Empregador"
            component={TextInput}
            name="empregador"
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

        {
          atorOuAtriz &&
            <InputWrapper>
              <SectionHeader text={'Se é ator ou atriz'} />
              <Field
                label="Altura"
                component={TextInput}
                type="number"
                name="ator.altura"
              />
              <Field
                label="Numeração Blusa"
                component={TextInput}
                type="number"
                name="ator.numeracao.blusa"
              />
              <Field
                label="Numeração Calça"
                component={TextInput}
                type="number"
                name="ator.numeracao.calca"
              />
              <Field
                label="Numeração Sapato"
                component={TextInput}
                type="number"
                name="ator.numeracao.sapato"
              />
              <Field
                label="Cor dos olhos"
                name="ator.corOlhos"
                options={COR_OLHOS}
                component={SelectInput}
              />
              <Field
                label="Cor dos cabelos"
                name="ator.corCabelo"
                options={COR_CABELOS}
                component={SelectInput}
              />
            </InputWrapper>
        }

        <InputWrapper>
          <SectionHeader text={'Referências'} />
          <Field
            label="Texto"
            component={TextInput}
            name="referencias.texto"
          />
          <FieldArray
            label="3 links de fotos"
            itemLabel="Foto"
            name="referencias.fotos"
            minItems={3}
            maxItems={3}
            component={TextInputArray}
          />
          <FieldArray
            label="3 links de videos"
            itemLabel="Vídeo"
            name="referencias.videos"
            minItems={3}
            maxItems={3}
            component={TextInputArray}
          />
        </InputWrapper>

        <InputWrapper>
          <SectionHeader text={'Questionário EXISTE'} />
          <FieldArray
            label="Cite pelo menos 3 sites em que você busca referências quando precisa."
            itemLabel="Site"
            name="questionario.sitesReferencia"
            minItems={3}
            component={TextInputArray}
          />
          <Field
            label="Quem é sua maior referência em sua área de atuação profissional?"
            component={TextInput}
            name="questionario.profissionalReferencia"
          />
          <Field
            label="O que você está aprendendo no momento?"
            component={TextInput}
            name="questionario.aprendendoNoMomento"
          />
          <Field
            name="questionario.tecnicaArtistica"
            label="Com qual expressão ou técnica artística seu trabalho mais se parece?"
            options={EXPRESSOES_ARTISTICAS}
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
const PassoDoisRedux = reduxForm(
  {
    form: 'cadastroPessoal',
    destroyOnUnmount: false,
    validate,
  },
)(PassoDois)

const selector = formValueSelector('cadastroPessoal')
export default connect(
  state => {
    const funcoes = selector(state, 'funcoes')
    const atorOuAtriz = isAtorOuAtriz(funcoes)

    return {
      initialValues: {
        portfolio: ['', ''],
        referencias: {
          fotos: ['', '', ''],
          videos: ['', '', ''],
        },
        questionario: {
          sitesReferencia: ['', '', ''],
        },
        funcoes: {
          toparia: [],
          exerce: [],
        },
        ator: {
          corCabelo: 'castanho-claro',
          corOlhos: 'azul',
        },
        ...state.form.cadastroPessoal.values,
      },
      atorOuAtriz,
    }
  }
)(PassoDoisRedux)
