import React, { PropTypes } from 'react'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import {
  Paper,
  Divider,
} from 'material-ui'

import stepperEnchancer from '@components/StepperEnchancer'
import PassoUm from './PassoUm'
import PassoDois from './PassoDois'
import PassoTres from './PassoTres'
import Concluir from './Concluir'

const styles = {
  header: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}
class CadastroPessoalForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    stepIndex: PropTypes.number,
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func,
    novoProjetoLoading: PropTypes.bool,
    novoProjetoError: PropTypes.bool,
    novoProjetoSuccess: PropTypes.bool,
    values: PropTypes.object,
  }
  render() {
    const {
      onSubmit,
      stepIndex,
      handleNext,
      handlePrev,
      novoProjetoLoading,
      novoProjetoError,
      novoProjetoSuccess,
      values,
    } = this.props

    return (
      <Paper style={{ margin: 100 }}>
        <div style={styles.header}>
          <h1 style={{ margin: 0 }}>Novo Projeto</h1>
        </div>
        <Divider />
        <div style={{ padding: 20 }}>
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
            {stepIndex === 0 && <PassoUm onSubmit={handleNext} />}
            {stepIndex === 1 && <PassoDois onSubmit={handleNext} onPrevious={handlePrev} />}
            {stepIndex === 2 && <PassoTres onSubmit={handleNext} onPrevious={handlePrev} />}
            {stepIndex === 3 && <Concluir
              onSubmit={() => onSubmit(values)}
              novoProjetoLoading={novoProjetoLoading}
              novoProjetoSuccess={novoProjetoSuccess}
              novoProjetoError={novoProjetoError}
              onPrevious={handlePrev}
              values={values}
            />}
          </div>
        </div>
      </Paper>
    )
  }
}


export default stepperEnchancer(CadastroPessoalForm);
