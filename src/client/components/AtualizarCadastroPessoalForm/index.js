import React, { PropTypes } from 'react'
import stepperEnchancer from '@components/StepperEnchancer'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import {
  Paper,
  Divider,
} from 'material-ui'

import { Usuarios } from '@resources/icons'
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

class AtualizarCadastroPessoalForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    stepIndex: PropTypes.number,
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func,
    values: PropTypes.object,
    atualizarCadastroPessoalLoading: PropTypes.bool,
    atualizarCadastroPessoalSuccess: PropTypes.bool,
    atualizarCadastroPessoalError: PropTypes.bool,
  }
  render() {

    const {
      onSubmit,
      stepIndex,
      handleNext,
      handlePrev,
      values,
      atualizarCadastroPessoalLoading,
      atualizarCadastroPessoalSuccess,
      atualizarCadastroPessoalError,
    } = this.props

    return (
      <Paper style={{ margin: 100 }}>
        <div style={styles.header}>
          <Usuarios style={{ height: 60, width: 60, marginBottom: 10 }} color="#d3d3d3" />
          <h1 style={{ margin: 0 }}>Cadastro Pessoal</h1>
        </div>
        <Divider />
        <div style={{ padding: 20 }}>
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
            {stepIndex === 0 && <PassoUm onSubmit={handleNext} />}
            {stepIndex === 1 && <PassoDois onSubmit={handleNext} onPrevious={handlePrev} />}
            {stepIndex === 2 && <PassoTres onSubmit={handleNext} onPrevious={handlePrev} />}
            {stepIndex === 3 && <Concluir
              onSubmit={() => onSubmit(values)}
              values={values}
              onPrevious={handlePrev}
              atualizarCadastroPessoalLoading={atualizarCadastroPessoalLoading}
              atualizarCadastroPessoalSuccess={atualizarCadastroPessoalSuccess}
              atualizarCadastroPessoalError={atualizarCadastroPessoalError}
            />
            }
          </div>
        </div>
      </Paper>
    )
  }
}

export default stepperEnchancer(AtualizarCadastroPessoalForm);
