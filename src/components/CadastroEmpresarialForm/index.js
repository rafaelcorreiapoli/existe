import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker'
import Divider from 'material-ui/Divider';
import PaperSelect from '../PaperSelect'
import InputWrapper from '../InputWrapper';
import TextFieldArray from '../TextFieldArray';
import {
  SelectField,
  MenuItem,
  Checkbox
} from 'material-ui'

import styles from './styles';
/**
nome completo
email
data de nascimento
telefone para contato
celular para contato (com operadora)
*/

/**
tipo de empresa:
produtora, agencia, e-commerce, startup, hotel, restaurante,
fabrica, consultorio, coletivo ou outro (qual?)
*/

/**
area de atuacao no mercado (texto livre)
*/

/**
contato:
site, endereço, redes sociais, cn
*/

/**
bio:
até 1000 caracters
*/

/**
tipos de serviços:
lista de funções oferecidas pelo existe
*/

/**
sistema de pagamento preferencial
*/

/**
adicionar profissionais (usuários ou não usuarios)
quando usuário tem busca no sistema
quando não usuário colocar email
*/

const DateInput = ({
  label,
  ...props
}) => (
  <DatePicker
    fullWidth={true}
    floatingLabelText={label}
    floatingLabelFixed={true}
    {...props}
    />
)
const TextInput = ({
  label,
  ...props
}) => (
  <TextField
    fullWidth={true}
    floatingLabelText={label}
    floatingLabelFixed={true}
    {...props}
    />
)
class CadastroEmpresarialForm extends React.Component {
  state = {
    usuarios: []
  }

  constructor(props) {
    super(props)
    this.handleChangeUsuarios = this.handleChangeUsuarios.bind(this);
  }
  handleChangeUsuarios(usuarios) {
    this.setState({
      usuarios
    })
  }
  render () {
    const {
      usuarios
    } = this.state
    return (
      <Paper style={{margin: 100, padding: 20}}>
        <h2 style={{textAlign: 'center'}}>Cadastro Empresarial</h2>
        <InputWrapper>
          <TextField
            fullWidth={true}
            floatingLabelText="Usuário"
            floatingLabelFixed={true}
            />
          <TextField
            fullWidth={true}
            floatingLabelText="Senha"
            floatingLabelFixed={true}
            password={true}
            />
        </InputWrapper>


        {/*nome completo
          email
          data de nascimento
          telefone para contato
          celular para contato (com operadora)
          */}

          <InputWrapper>
            <TextInput label="Nome Completo" />
            <TextInput label="Email" />
            <DateInput label="Data de Nascimento" />
            <TextInput label="Telefone" />
            <TextInput label="Celular" />
          </InputWrapper>


            <InputWrapper>
              <SelectField
                fullWidth={true}
                floatingLabelText="Tipo de Empresa"
                floatingLabelFixed={true}
                >
                <MenuItem value={'produtora'} primaryText="Produtora" />
                <MenuItem value={'agencia'} primaryText="Agência" />
                <MenuItem value={'e-commerce'} primaryText="E-Commerce" />
                <MenuItem value={'startup'} primaryText="Startup" />
                <MenuItem value={'hotel'} primaryText="Hotel" />
                <MenuItem value={'restaurante'} primaryText="Restaurante" />
                <MenuItem value={'fabrica'} primaryText="Fábrica" />
                <MenuItem value={'consultorio'} primaryText="Consultório" />
                <MenuItem value={'coletivo'} primaryText="Coletivo" />
                <MenuItem value={'outro'} primaryText="Outro" />
              </SelectField>
              <TextInput label="Área de atuação no mercado" />
            </InputWrapper>

            <InputWrapper>
              <TextInput label="Site" />
              <TextInput label="Endereço" />
              <TextInput label="Facebook" />
              <TextInput label="Twitter" />
              <TextInput label="Instagram" />
              <TextInput label="CNPJ" />
            </InputWrapper>

            <InputWrapper>
              <TextInput label="BIO" rows={4} />
            </InputWrapper>

            <InputWrapper>
              <Checkbox label="Serviço 1" />
              <Checkbox label="Serviço 2" />
              <Checkbox label="Serviço 3" />
              <Checkbox label="Serviço 4" />
            </InputWrapper>

            <InputWrapper>
              <SelectField
                fullWidth={true}
                floatingLabelText="Tipo de Empresa"
                floatingLabelFixed={true} >
                <MenuItem value={'produtora'} primaryText="Produtora" />
                <MenuItem value={'agencia'} primaryText="Agência" />
                <MenuItem value={'e-commerce'} primaryText="E-Commerce" />
                <MenuItem value={'startup'} primaryText="Startup" />
                <MenuItem value={'hotel'} primaryText="Hotel" />
                <MenuItem value={'restaurante'} primaryText="Restaurante" />
                <MenuItem value={'fabrica'} primaryText="Fábrica" />
                <MenuItem value={'consultorio'} primaryText="Consultório" />
                <MenuItem value={'coletivo'} primaryText="Coletivo" />
                <MenuItem value={'outro'} primaryText="Outro" />
              </SelectField>
            </InputWrapper>

            <InputWrapper>
              <TextFieldArray
                onChange={this.handleChangeUsuarios}
                value={usuarios}
                />
            </InputWrapper>

            <InputWrapper style={{textAlign: 'right'}}>
              <RaisedButton
                label="Cadastrar"
                primary={true}
              />
            </InputWrapper>
          </Paper>
        )
      }
    }

    export default CadastroEmpresarialForm;
