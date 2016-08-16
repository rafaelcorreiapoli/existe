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

  render () {
    const { handleSubmit} = this.props;
    const { stepIndex, finished} = this.state;
    return (
      <Paper style={{margin: 100, padding: 20}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Informações Pessoaiss</StepLabel>
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
              {/*<FlatButton
                label="Voltar"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />
              <RaisedButton
                label={stepIndex === 2 ? 'Concluir' : 'Próximo'}
                disabled={false}
                primary={true}
                onTouchTap={this.handleNext}
              />*/}
            </div>
          }
        </div>
      </Paper>
    )
  }
}

export default CadastroPessoalForm;
