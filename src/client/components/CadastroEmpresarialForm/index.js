import React, { PropTypes } from 'react'
import StepperEnchancer from '@components/StepperEnchancer'
import { Empresarial } from '@resources/icons'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import {
  RaisedButton,
  FlatButton,
  Paper,
  Divider,
} from 'material-ui'

import PassoUm from './PassoUm'
import PassoDois from './PassoDois'
import PassoTres from './PassoTres'
import PassoQuatro from './PassoQuatro'
import Concluir from './Concluir'

const styles = {
  title: {
    margin: 0,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

class CadastroEmpresarialForm extends React.Component {
  static propTypes = {
    stepIndex: PropTypes.number,
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func,
    onSubmit: PropTypes.func,
    cadastroRapidoLoading: PropTypes.bool,
    cadastroRapidoSuccess: PropTypes.bool,
    cadastroRapidoError: PropTypes.bool,
    cadastroEmpresarialLoading: PropTypes.bool,
    cadastroEmpresarialSuccess: PropTypes.bool,
    cadastroEmpresarialError: PropTypes.bool,
    values: PropTypes.object,
  }
  render() {
    const {
      stepIndex,
      handleNext,
      handlePrev,
      onSubmit,
      cadastroRapidoLoading,
      cadastroRapidoSuccess,
      cadastroRapidoError,
      cadastroEmpresarialLoading,
      cadastroEmpresarialSuccess,
      cadastroEmpresarialError,
      values,
    } = this.props
    return (
      <Paper style={{ margin: 100 }}>
        <h1 style={styles.title}>
          {/* <Empresarial color="#aaa" style={{height: 66, width: 66, marginRight: 30}} />*/}
          Cadastro Empresarial
        </h1>
        <Divider />
        <div style={{ padding: 20 }}>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Usuário Responsável</StepLabel>
            </Step>
            <Step>
              <StepLabel>Informações Profissionais</StepLabel>
            </Step>
            <Step>
              <StepLabel>Pagamento</StepLabel>
            </Step>
            <Step>
              <StepLabel>Profissionais</StepLabel>
            </Step>
          </Stepper>
          <div>
            {stepIndex === 0 && <PassoUm onSubmit={handleNext} />}
            {stepIndex === 1 && <PassoDois onSubmit={handleNext} onPrevious={handlePrev} />}
            {stepIndex === 2 && <PassoTres onSubmit={handleNext} onPrevious={handlePrev} />}
            {stepIndex === 3 && <PassoQuatro onSubmit={handleNext} onPrevious={handlePrev} />}
            {stepIndex === 4 && <Concluir
              onSubmit={() => onSubmit(values)}
              cadastroRapidoLoading={cadastroRapidoLoading}
              cadastroRapidoSuccess={cadastroRapidoSuccess}
              cadastroRapidoError={cadastroRapidoError}
              cadastroEmpresarialLoading={cadastroEmpresarialLoading}
              cadastroEmpresarialSuccess={cadastroEmpresarialSuccess}
              cadastroEmpresarialError={cadastroEmpresarialError}
              onPrevious={handlePrev}
              values={values}
            />}
          </div>
        </div>
      </Paper>
    )
  }
}

/* <FlatButton
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
/>*/

export default StepperEnchancer(CadastroEmpresarialForm);
