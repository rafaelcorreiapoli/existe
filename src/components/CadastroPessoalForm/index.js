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
import Concluir from './Concluir'
import { Usuarios } from '../../resources/icons'

const CadastroPessoalForm = ({
  handleSubmit,
  stepIndex,
  handleNext,
  handlePrev,
  finished
}) => (
  <Paper style={{margin: 100}}>
    <div style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Usuarios style={{height: 60, width: 60, marginBottom: 10}} color="#d3d3d3"/>
      <h1 style={{margin: 0}}>Cadastro Pessoal</h1>
    </div>
    <Divider />
    <div style={{padding: 20}}>
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
        {stepIndex === 0 && <PassoUm onSubmit={handleNext}/>}
        {stepIndex === 1 && <PassoDois onSubmit={handleNext} onPrevious={handlePrev}/>}
        {stepIndex === 2 && <PassoTres onSubmit={handleNext} onPrevious={handlePrev}/>}
        {stepIndex === 3 && <Concluir onSubmit={() => console.log('finish!')} onPrevious={handlePrev}/>}
      </div>
    </div>
  </Paper>
)

export default StepperEnchancer(CadastroPessoalForm);
