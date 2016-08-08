import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import styles from './styles';
import PaperSelect from '../PaperSelect'
import DatePicker from 'material-ui/DatePicker'
import InputWrapper from '../InputWrapper';
import TextFieldArray from '../TextFieldArray';
import { OPCOES_OBJETIVOS, OPCOES_CATEGORIA, OPCOES_SUBCATEGORIA, OPCOES_LINGUAGEM_VISUAL, OPCOES_PROCURA, OPCOES_TEMPO_DE_DURACAO } from './opcoes';

const VerticalDivider = () => (
  <div style={{
    width: 1,
    alignSelf: 'stretch',
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: '#E8E8E8'}}
  />
)

const Column = ({
  children
}) => (
  <div style={{paddingLeft: 30, paddingRight: 30, width: '33%'}}>
    {children}
  </div>
)
class ProjetoForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeArquivos = this.handleChangeArquivos.bind(this);
    this.handleChangeLinks = this.handleChangeLinks.bind(this);

    this.state = {
      nome: '',
      objetivo: null,
      categoria: null,
      subcategoria: null,
      links: [],
      arquivos: []
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

  handleChangeArquivos(arquivos) {
    this.setState({
      arquivos
    })
  }

  handleChangeLinks(links) {
    this.setState({
      links
    })
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
      tempoDeDuracao,
      arquivos,
      links
    } = this.state

    return (
      <Paper style={{margin: 100, textAlign: 'center', flexDirection: 'row', display: 'flex'}}>

        <Column>
          <InputWrapper>
            <h4 style={styles.header}>OBJETIVO DO VIDEO</h4>
            <PaperSelect
              onChange={(value) => this.setState({objetivo: value})}
              options={OPCOES_OBJETIVOS}
              value={objetivo}
              />
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>CATEGORIA</h4>
            <PaperSelect
              onChange={(value) => this.setState({categoria: value})}
              options={OPCOES_CATEGORIA}
              value={categoria}
              />
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>NOME DO CLIENTE</h4>
            <TextField hintText="Nome do Cliente" style={styles.input} />
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>SEGMENTO DE ATUAÇÃO</h4>
            <TextField hintText="Segmento de Atuação" style={styles.input} />
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>SUBCATEGORIA</h4>
            <PaperSelect
              onChange={(value) => this.setState({subcategoria: value})}
              options={OPCOES_SUBCATEGORIA}
              value={subcategoria}
              />
          </InputWrapper>
        </Column>

        <VerticalDivider />

        <Column>
          <InputWrapper>
            <h4 style={styles.header}>LINGUAGEM VISUAL</h4>
            <PaperSelect
              onChange={(value) => this.setState({linguagemVisual: value})}
              options={OPCOES_LINGUAGEM_VISUAL}
              value={linguagemVisual}
              />
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>PROCURA</h4>
            <PaperSelect
              onChange={(value) => this.setState({procura: value})}
              options={OPCOES_PROCURA}
              value={procura}
              />
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>PÚBLICO</h4>
            <TextField hintText="Público"  style={styles.input} />
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>MEIOS DE VEICULAÇÃO</h4>
            <TextField hintText="Meios de veiculação" style={styles.input}  />
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>PRAZO DE ENTREGA</h4>
            <DatePicker hintText="Prazo de entrega" textFieldStyle={styles.input} />
          </InputWrapper>
        </Column>

        <VerticalDivider />

        <Column>
          <InputWrapper>
            <h4 style={styles.header}>QUANTO VOCÊ ESPERA GASTAR?</h4>
            <TextField hintText="R$ " style={styles.input}  />
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>CAPA DO PROJETO</h4>
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>NOME DO PROJETO</h4>
            <TextField hintText="Nome do Projeto" style={styles.input}  />
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>DESCRIÇÃO DO PROJETO</h4>
            <TextField
              multiLine={true}
              rowsMax={2}
              style={styles.input}
              />
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>REFERÊNCIAS</h4>
            <h5>LINKS</h5>
            <TextFieldArray
              onChange={this.handleChangeLinks}
              value={links}/>

            <h5>ARQUIVOS</h5>
            <TextFieldArray
              onChange={this.handleChangeArquivos}
              value={arquivos}/>
          </InputWrapper>

          <InputWrapper>
            <h4 style={styles.header}>TEMPO DE DURAÇÃO DO VIDEO</h4>
            <PaperSelect
              onChange={(value) => this.setState({tempoDeDuracao: value})}
              options={OPCOES_TEMPO_DE_DURACAO}
              value={tempoDeDuracao}
              />
          </InputWrapper>

          <InputWrapper>
            <RaisedButton primary={true} label="SALVAR" />
          </InputWrapper>
        </Column>
      </Paper>
    )
  }
}

export default ProjetoForm;
