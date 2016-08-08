// import React from 'react';
// import {
//   Step,
//   Stepper,
//   StepLabel,
// } from 'material-ui/Stepper';
// import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
// import Paper from 'material-ui/Paper';
//
// /**
//  * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
//  * Avoid using long step names in horizontal steppers.
//  *
//  * Linear steppers require users to complete one step in order to move on to the next.
//  */
// class CriarProjetoStepper extends React.Component {
//   state = {
//     finished: false,
//     stepIndex: 0,
//   };
//
//   handleNext = () => {
//     const {stepIndex} = this.state;
//     this.setState({
//       stepIndex: stepIndex + 1,
//       finished: stepIndex >= 2,
//     });
//   };
//
//   handlePrev = () => {
//     const {stepIndex} = this.state;
//     if (stepIndex > 0) {
//       this.setState({stepIndex: stepIndex - 1});
//     }
//   };
//
//   getStepContent(stepIndex) {
//     switch (stepIndex) {
//       case 0:
//         return 'Passo 1';
//       case 1:
//         return 'Passo 2';
//       case 2:
//         return 'Passo 3';
//       default:
//         return 'You\'re a long way from home sonny jim!';
//     }
//   }
//
//   render() {
//     const {finished, stepIndex} = this.state;
//     const contentStyle = {margin: '0 16px'};
//
//     return (
//       <Paper style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
//         <Stepper activeStep={stepIndex}>
//           <Step>
//             <StepLabel>Passo 1</StepLabel>
//           </Step>
//           <Step>
//             <StepLabel>Passo 2</StepLabel>
//           </Step>
//           <Step>
//             <StepLabel>Passo 3</StepLabel>
//           </Step>
//         </Stepper>
//         <div style={contentStyle}>
//           {finished ? (
//             <p>
//               <a
//                 href="#"
//                 onClick={(event) => {
//                   event.preventDefault();
//                   this.setState({stepIndex: 0, finished: false});
//                 }}
//               >
//                 Click here
//               </a> to reset the example.
//             </p>
//           ) : (
//             <div>
//               <p>{this.getStepContent(stepIndex)}</p>
//               <div style={{marginTop: 12}}>
//                 <FlatButton
//                   label="Back"
//                   disabled={stepIndex === 0}
//                   onTouchTap={this.handlePrev}
//                   style={{marginRight: 12}}
//                 />
//                 <RaisedButton
//                   label={stepIndex === 2 ? 'Finish' : 'Next'}
//                   primary={true}
//                   onTouchTap={this.handleNext}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </Paper>
//     );
//   }
// }
//
// export default CriarProjetoStepper;


import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import styles from './styles';
import PaperSelect from '../PaperSelect'

class ProjetoForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      objetivo: null,
      categoria: null,
      subcategoria: null
    }
  }
  handleSubmit(e) {
    console.log('oi');
    console.log(e);
    e.preventDefault();
    const {
      onSubmit
    } = this.props

    const {
      nome
    } = this.state;

    onSubmit({
      nome
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  getOptions() {
    return [
      {
        label: 'Comunicação Interna',
        value: 'rafa'
      }, {
        label: 'Posicionamento de Marca',
        value: 'teste'
      }, {
        label: 'Aumento das Vendas',
        value: 'aumento'
      }, {
        label: 'Divulgação',
        value: 'divulgação'
      }, {
        label: 'Outro',
        value: 'outro'
      }
    ]
  }
  getOptionsCategoria() {
    return [
      {
        label: 'Independente',
        value: 'rafa'
      }, {
        label: 'Empresarial',
        value: 'teste'
      }, {
        label: 'Troca',
        value: 'aumento'
      }
    ]
  }

  getOptionsSubcategoria() {
    return [
      {
        label: 'Longa',
        value: 'longa'
      },
      {
        label: 'Curta',
        value: 'curta'
      },
      {
        label: 'Documentário',
        value: 'documentario'
      },
      {
        label: 'Série',
        value: 'serie'
      },
      {
        label: 'Websérie',
        value: 'webserie'
      },
      {
        label: 'Mini-doc',
        value: 'mini-doc'
      },
      {
        label: 'Institucional',
        value: 'institucional'
      },
      {
        label: 'Comercial',
        value: 'comercial'
      },
      {
        label: 'Trailer',
        value: 'trailer'
      },
      {
        label: 'Teaser',
        value: 'teaser'
      },
      {
        label: 'Clipe',
        value: 'clipe'
      },
      {
        label: 'Entrevista',
        value: 'entrevista'
      },
      {
        label: 'Making of',
        value: 'making-of'
      },
      {
        label: 'Outro',
        value: 'outro'
      }
    ]
  }

  getOptionsLinguagemVisual() {
    return [
      {
        label: 'REAL',
        value: 'real'
      },
      {
        label: 'ANIMAÇÃO 2D',
        value: 'animacao-2d'
      },
      {
        label: 'ANIMAÇÃO 3D',
        value: 'animacao-3d'
      },
      {
        label: 'STOPMOTION',
        value: 'stopmotion'
      },
      {
        label: 'MOTION DESIGN',
        value: 'motion-design'
      },
      {
        label: '3D REAL',
        value: '3d-real'
      },
    ]
  }

  getOptionsProcura() {
    return [
      {
        label: 'MONTAR UM TIME',
        value: 'montar-um-time'
      },
      {
        label: 'PROFISSIONAL DE FUNÇÃO ESPECÍFICA',
        value: 'profissional-de-funcao-especifica'
      },
    ]
  }

  getOptionsTempoDeDuracao() {
    return [
      {
        label: 'Até 1 MIN',
        value: '0,1'
      },
      {
        label: '1-3 MIN',
        value: '1,3'
      },
      {
        label: '1-3 MIN',
        value: '3,5'
      },
      {
        label: '5-10 MIN',
        value: '5,10'
      },
      {
        label: '10-15 MIN',
        value: '10,15'
      },
      {
        label: '15-20 MIN',
        value: '15,20'
      },
      {
        label: '20+',
        value: '20,999'
      },
    ]
  }
  render () {
    const {
      loading,
      success,
      error,
    } = this.props

    const {
      objetivo,
      categoria,
      subcategoria,
      linguagemVisual,
      procura,
      tempoDeDuracao
    } = this.state

    return (
      <Paper style={{margin: 100}}>
        <h5 style={styles.header}>OBJETIVO DO VIDEO</h5>
        <PaperSelect
          onChange={(value) => this.setState({objetivo: value})}
          options={this.getOptions()}
          value={objetivo}
          />

        <h5 style={styles.header}>CATEGORIA</h5>
        <PaperSelect
          onChange={(value) => this.setState({categoria: value})}
          options={this.getOptionsCategoria()}
          value={categoria}
          />

        <h5 style={styles.header}>SUBCATEGORIA</h5>
        <PaperSelect
          onChange={(value) => this.setState({subcategoria: value})}
          options={this.getOptionsSubcategoria()}
          value={subcategoria}
          />

        <h5 style={styles.header}>SUBCATEGORIA</h5>
        <PaperSelect
          onChange={(value) => this.setState({linguagemVisual: value})}
          options={this.getOptionsLinguagemVisual()}
          value={linguagemVisual}
          />

        <h5 style={styles.header}>PROCURA</h5>
        <PaperSelect
          onChange={(value) => this.setState({procura: value})}
          options={this.getOptionsProcura()}
          value={procura}
          />

        <h5 style={styles.header}>TEMPO DE DURAÇÃO DO VIDEO</h5>
        <PaperSelect
          onChange={(value) => this.setState({tempoDeDuracao: value})}
          options={this.getOptionsTempoDeDuracao()}
          value={tempoDeDuracao}
          />
        {/*{
          error &&
          <Paper>
            <span>{error}</span>
          </Paper>
        }
        {
          success &&
          <Paper>
            <span>Sucesso!</span>
          </Paper>
        }
        {
          loading &&
          <Paper>
            <span>Loading...</span>
          </Paper>
        }
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <SelectField
            value={ objetivo ? objetivo : null}
            floatingLabelText="Objetivo do video"
            style={styles.input}
            value={this.state.value}
            onChange={this.handleChange}
            underlineShow={false} >
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
          <Divider />
          <TextField
            style={styles.input}
            underlineShow={false}
            name="nome"
            hintText="Nome"
            />
          <Divider />
          <div style={{padding: 20}}>
            <RaisedButton
              type="submit"
              label="CRIAR PROJETO"
              primary={true} />
          </div>
        </form>*/}
      </Paper>
    )
  }
}

export default ProjetoForm;
