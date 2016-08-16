import React, { PropTypes } from 'react'

import { reduxForm } from 'redux-form';


import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import {
  TextField,
  RaisedButton,
  FlatButton,
  Paper,
  DatePicker,
  Divider,
  SelectField,
  MenuItem,
  Checkbox,
  IconButton
} from 'material-ui'



import PaperSelect from '../PaperSelect'
import InputWrapper from '../InputWrapper';

import styles from './styles';

import PassoUm from './PassoUm'
import PassoDois from './PassoDois'
import PassoTres from './PassoTres'
import Concluir from './Concluir'

// const validate = values => {
//   const schema = Joi.object().keys({
//     usuario: Joi.string().alphanum().min(3).max(30).required(),
//     senha: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
//     nomeCompleto: Joi.string().required(),
//     dataNascimento: Joi.object().required(),
//     sitePessoal: Joi.string().regex(urlRegex()).required(),
//     email: Joi.string().email().required(),
//     telefone: Joi.string().regex(/\([0-9]{2}\) ([0-9]{4})-[0-9]{4}/).required(),
//     celular: Joi.string().regex(/\([0-9]{2}\) ([0-9]{4,5})-[0-9]{4}/).required(),
//     facebook: Joi.string().regex(urlRegex()),
//     twitter: Joi.string().regex(urlRegex()),
//     instagram: Joi.string().regex(urlRegex()),
//     cpf: Joi.string().regex(/[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/).required(),
//     bio: Joi.string().required(),
//     portfolio: Joi.array().items(Joi.string()).min(2),
//     curriculo: Joi.string(),
//     profissao: Joi.string(),
//     empregador: Joi.string(),
//     funcoesExerce: Joi.array().items(Joi.string()),
//     funcoesToparia: Joi.array().items(Joi.string()),
//     fotos: Joi.array().items(Joi.string()),
//     videos: Joi.array().items(Joi.string()),
//     sitesReferencia: Joi.array().items(Joi.string()),
//     profissionalReferencia: Joi.string(),
//     aprendendoNoMomento: Joi.string(),
//     tecnicaArtistica: Joi.string(),
//     pagamentoPreferencial: Joi.string(),
//     altura: Joi.number(),
//     numeracaoBlusa: Joi.number().integer(),
//     numeracaoCalca: Joi.number().integer(),
//     numeracaoSapato: Joi.number().integer(),
//     corOlhos: Joi.string(),
//     corCabelo: Joi.string(),
//   });
//
//   const result = Joi.validate(values, schema, {abortEarly: false});  // err === null
//   const formErrors = {}
//   if (result.error) {
//     const { details } = result.error;
//
//     details.forEach(detail => {
//       objectPath.set(formErrors, detail.path, detail.message);
//     })
//     //console.log(o);
//     //console.log(formErrors);
//   } else {
//     console.log('check OK!');
//   }
//   return formErrors;
// }


const errorsInFields = (array, fields) => {
  return !!fields.find(field => array[field].error)
}

class CadastroPessoalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      finished: false,
      stepIndex: 0,
    };
  }
  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1
      });
    }
  };


  // checkForErrors(step) {
  //   const { fields } = this.props
  //
  //   switch (step) {
  //     case 0:
  //     return errorsInFields(fields, [
  //       'usuario',
  //       'senha',
  //       'nomeCompleto',
  //       'dataNascimento',
  //       'sitePessoal',
  //       'email',
  //       'telefone',
  //       'celular',
  //       'facebook',
  //       'twitter',
  //       'instagram',
  //       'cpf',
  //       'bio'
  //     ])
  //     case 1:
  //     return errorsInFields(fields, [
  //       'portfolio',
  //       'curriculo',
  //       'profissao',
  //       'empregador',
  //       'funcoesExerce',
  //       'funcoesToparia',
  //       'fotos',
  //       'videos',
  //       'sitesReferencia',
  //       'profissionalReferencia',
  //       'aprendendoNoMomento',
  //       'tecnicaArtistica',
  //       'pagamentoPreferencial',
  //       'altura',
  //       'numeracaoBlusa',
  //       'numeracaoCalca',
  //       'numeracaoSapato',
  //       'corOlhos',
  //       'corCabelo'
  //     ])
  //     case 2:
  //     return errorsInFields(fields, [
  //       'pagamentoPreferencial'
  //     ])
  //   }
  //   return false
  // }

  render () {
    const { handleSubmit} = this.props;
    const { stepIndex, finished} = this.state;
    return (
      <Paper style={{margin: 100, padding: 20}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Informações Pessoais</StepLabel>
          </Step>
          <Step>
            <StepLabel>Informações Profissionais</StepLabel>
          </Step>
          <Step>
            <StepLabel>Pagamento</StepLabel>
          </Step>
        </Stepper>
        <div>
          {
            <div>
              <div>
                {stepIndex === 0 && <PassoUm onSubmit={() => this.handleNext()}/>}
                {stepIndex === 1 && <PassoDois onSubmit={this.handleNext} onPrevious={this.handlePrev}/>}
                {stepIndex === 2 && <PassoTres onSubmit={this.handleNext} onPrevious={this.handlePrev}/>}
                {stepIndex === 3 && <Concluir onSubmit={() => console.log('finish!')} onPrevious={this.handlePrev}/>}
              </div>
              <FlatButton
                label="Voltar"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />
              <RaisedButton
                label={stepIndex === 2 ? 'Concluir' : 'Próximo'}
                //disabled={this.checkForErrors(stepIndex)}
                disabled={false}
                primary={true}
                onTouchTap={this.handleNext}
              />
            </div>
          }
        </div>
      </Paper>
    )
  }
}


// CadastroPessoalForm = reduxForm({
//   form: 'cadastroPessoal',
//   fields: [
//   'usuario',
//   'senha',
//   'nomeCompleto',
//   'dataNascimento',
//   'sitePessoal',
//   'email',
//   'telefone',
//   'celular',
//   'facebook',
//   'twitter',
//   'instagram',
//   'cpf',
//   'bio',
//   'portfolio[]',
//   'curriculo',
//   'profissao',
//   'empregador',
//   'funcoesExerce',
//   'funcoesToparia',
//   'fotos[]',
//   'videos[]',
//   'sitesReferencia[]',
//   'profissionalReferencia',
//   'aprendendoNoMomento',
//   'tecnicaArtistica',
//   'pagamentoPreferencial',
//   'altura',
//   'numeracaoBlusa',
//   'numeracaoCalca',
//   'numeracaoSapato',
//   'corOlhos',
//   'corCabelo'
//   ],
//   validate
// },
// state => {
//   return {
//     initialValues: {
//       fotos: ['', '', ''],
//       videos: ['', '', ''],
//       sitesReferencia: ['', '', '']
//     }
//   }
//
// })(CadastroPessoalForm);


export default CadastroPessoalForm;
