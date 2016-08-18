import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { reduxForm, Field, FieldArray, formValueSelector } from 'redux-form';
import Joi from 'joi-browser';
import InputWrapper from '../InputWrapper';
import TextInput from '../TextInput';
import { deserializeFormErrors } from '../../utils/form_errors';
import TextInputArray from '../TextInputArray';
import SelectInput from '../SelectInput';
import FuncoesCheckTable from '../FuncoesCheckTable';
import { areas } from '../../resources/areas'
import language from '../../lib/joi/language'
import { EXPRESSOES_ARTISTICAS, COR_CABELOS, COR_OLHOS } from '../../resources/options'
import SectionHeader from '../SectionHeader'

import {
  SelectField,
  MenuItem,
  Checkbox,
  RaisedButton,
  FlatButton
} from 'material-ui'


const langFactory = (str) => {
  return { language: { any: { required: str }}}
}



const validate = values => {
  const atorOuAtriz =
    (values.funcoes && values.funcoes.exerce && (values.funcoes.exerce.indexOf('ator') !== -1 || values.funcoes.exerce.indexOf('atriz') !== -1)) ||
    (values.funcoes && values.funcoes.toparia && (values.funcoes.toparia.indexOf('ator') !== -1 || values.funcoes.toparia.indexOf('atriz') !== -1))

  let altura = Joi.number().label('Altura');
  let numeracaoBlusa = Joi.number().integer().label('Numeração da blusa');
  let numeracaoCalca = Joi.number().integer().label('Numeração da calça');
  let numeracaoSapato = Joi.number().integer().label('Numeração do sapato');
  let corOlhos = Joi.string().label('Cor dos olhos');
  let corCabelo = Joi.string().label('Cor do cabelo');

  if (atorOuAtriz) {
    altura = altura.required();
    numeracaoBlusa = numeracaoBlusa.required();
    numeracaoCalca = numeracaoCalca.required();
    numeracaoSapato = numeracaoSapato.required();
    corOlhos = corOlhos.required();
    corCabelo = corCabelo.required();
  }

  const schema = Joi.object().keys({
    portfolio: Joi.array().items(Joi.string().required()).label('Portfólio').sparse(),
    curriculo: Joi.string().required().label('Currículo'),
    profissao: Joi.string().label('Profissão'),
    empregador: Joi.string().label('Empregador'),
    funcoes: Joi.object().required(),
    fotos: Joi.array().items(Joi.string().required().options(langFactory('!!Coloque o link para uma foto'))).label('Fotos').sparse(),
    videos: Joi.array().items(Joi.string().required().options(langFactory('!!Coloque o link para um vídeo'))).label('Vídeos').sparse(),
    sitesReferencia: Joi.array().items(Joi.string().required().options(langFactory('!!Coloque o link para um site de referência'))).label('Sites de Referência').sparse(),
    profissionalReferencia: Joi.string().label('Profissional de Referência'),
    aprendendoNoMomento: Joi.string().label('Aprendendo no momento'),
    tecnicaArtistica: Joi.string().label('Técnica Artística'),
    altura,
    numeracaoBlusa,
    numeracaoCalca,
    numeracaoSapato,
    corOlhos,
    corCabelo
  });

  const result = Joi.validate(values, schema, {abortEarly: false, language});
  return deserializeFormErrors(result, ['portfolio', 'fotos', 'videos', 'sitesReferencia'])
}

const PassoDois = ({
  atorOuAtriz,
  handleSubmit,
  onSubmit,
  onPrevious,
  invalid
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <SectionHeader text={'Carreira'} />
        <FieldArray
          label='Portfolio (máximo 5 items)'
          name='portfolio'
          itemLabel='Portfolio'
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
          options={areas}
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
          name="altura"
        />
        <Field
          label="Numeração Blusa"
          component={TextInput}
          name="numeracaoBlusa"
        />
        <Field
          label="Numeração Calça"
          component={TextInput}
          name="numeracaoCalca"
        />
        <Field
          label="Numeração Sapato"
          component={TextInput}
          name="numeracaoSapato"
        />
        <Field
          label="Cor dos olhos"
          name="corOlhos"
          options={COR_OLHOS}
          component={SelectInput}
        />
        <Field
          label="Cor dos cabelos"
          name="corCabelo"
          options={COR_CABELOS}
          component={SelectInput}
        />
      </InputWrapper>
      }

      <InputWrapper>
        <SectionHeader text={'Referências'} />
        <FieldArray
          label='3 links de fotos'
          itemLabel='Foto'
          name='fotos'
          minItems={3}
          maxItems={3}
          component={TextInputArray}
        />
        <FieldArray
          label='3 links de videos'
          itemLabel='Vídeo'
          name='videos'
          minItems={3}
          maxItems={3}
          component={TextInputArray}
        />
      </InputWrapper>

      <InputWrapper>
        <SectionHeader text={'Questionário EXISTE'} />
        <FieldArray
          label='Cite pelo menos 3 sites em que você busca referências quando precisa.'
          itemLabel='Site'
          name='sitesReferencia'
          minItems={3}
          component={TextInputArray}
        />
        <Field
          label="Quem é sua maior referência em sua área de atuação profissional?"
          component={TextInput}
          name="profissionalReferencia"
        />
        <Field
          label="O que você está aprendendo no momento?"
          component={TextInput}
          name="aprendendoNoMomento"
        />
        <Field
          name="tecnicaArtistica"
          label="Com qual expressão ou técnica artística seu trabalho mais se parece?"
          options={EXPRESSOES_ARTISTICAS}
          component={SelectInput}
        />
      </InputWrapper>

      <InputWrapper>
        <FlatButton
          label="Voltar"
          onTouchTap={onPrevious}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label={'Próximo'}
          disabled={invalid}
          primary={true}
          type='submit'
        />
      </InputWrapper>
    </form>
  )
}

PassoDois.propTypes = {
  handleSubmit: PropTypes.func.isRequired
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
    const atorOuAtriz =
      (funcoes && funcoes.exerce && (funcoes.exerce.indexOf('ator') !== -1 || funcoes.exerce.indexOf('atriz') !== -1)) ||
      (funcoes && funcoes.toparia && (funcoes.toparia.indexOf('ator') !== -1 || funcoes.toparia.indexOf('atriz') !== -1))

    return {
      initialValues: {
        portfolio: ['', ''],
        fotos: ['', '', ''],
        videos: ['', '', ''],
        sitesReferencia: ['', '', ''],
        funcoesExerce: [],
        funcoesToparia: [],
        funcoes: {
          toparia: [],
          exerce: []
        },
        corCabelo: 'castanhos',
        corOlhos: 'castanhos',
        ...state.form.cadastroPessoal.values
      },
      atorOuAtriz,
    }
  }
)(PassoDoisRedux)
