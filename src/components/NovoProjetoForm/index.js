import React, { PropTypes } from 'react'
import StepperEnchancer from '../StepperEnchancer'

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import {
  RaisedButton,
  FlatButton,
  Paper,
  Divider
} from 'material-ui'

import PassoUm from './PassoUm'
import PassoDois from './PassoDois'
import PassoTres from './PassoTres'


const CadastroPessoalForm = ({
  handleSubmit,
  stepIndex,
  handleNext,
  handlePrev,
  finished
}) => (
  <Paper style={{margin: 100}}>
    <div style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <h1 style={{margin: 0}}>Novo Projeto</h1>
    </div>
    <Divider />
    <div style={{padding: 20}}>
      <Stepper activeStep={stepIndex}>
        <Step>
          <StepLabel>Passo 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Passo 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Passo 3</StepLabel>
        </Step>
      </Stepper>

      <div>
        {stepIndex === 0 && <PassoUm onSubmit={handleNext}/>}
        {stepIndex === 1 && <PassoDois onSubmit={handleNext} onPrevious={handlePrev}/>}
        {stepIndex === 2 && <PassoTres onSubmit={handleNext} onPrevious={handlePrev}/>}
      </div>
    </div>
  </Paper>
)

export default StepperEnchancer(CadastroPessoalForm);
