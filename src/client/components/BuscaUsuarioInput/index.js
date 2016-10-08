import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete'
import { List, ListItem } from 'material-ui/List'
import ListaUsuarios from '@components/ListaUsuarios'


class BuscaUsuarioInput extends React.Component {
  static propTypes = {
    usuarios: PropTypes.array,
    onChange: PropTypes.func,
    texto: PropTypes.string,
    error: PropTypes.bool,
    setTexto: PropTypes.func,
    value: PropTypes.object,
  }
  constructor(props) {
    super(props)

    this.handleNewRequest = this.handleNewRequest.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)

    this.state = {
      showList: true,
    }
  }

  handleNewRequest(chosenRequest) {
    const {
      onChange,
      setTexto,
    } = this.props

    this.setState({
      showList: false,
    })
    onChange(chosenRequest)
    setTexto(chosenRequest.nomeCompleto)
  }

  handleChange(e) {
    e.preventDefault()

    const {
      setTexto,
      value,
      onChange,
    } = this.props

    this.setState({
      anchorEl: e.currentTarget,
      showList: true,
    })

    setTexto(e.target.value)
    onChange({
      ...value,
      nomeCompleto: e.target.value,
    })
  }

  handleFocus(e) {
    const {
      value,
      setTexto,
    } = this.props
    this.setState({
      anchorEl: e.currentTarget,
      showList: true
    })
    setTexto(value.nomeCompleto)
  }

  componentDidMount() {
    //  console.log(this.anchorEl)
    // this.setState({
    //   anchorEl: this.anchorEl
    // })
  }

  render() {
    const {
      usuarios = [],
      texto,
      error,
      value,
    } = this.props

    const controlledTexto = texto || ''
    return (
      <div>
        {/* <AutoComplete
          searchText={texto}
          errorText={error}
          onUpdateInput={novoTexto => setTexto(novoTexto)}
          hintText="Procurar usuários"
          dataSource={usuarios}
          value={'123'}
          dataSourceConfig={{ text: 'nomeCompleto', value: '_id' }}
          onNewRequest={this.handleNewRequest}
          filter={f => f}
        /> */}
        <TextField
          name="busca"
          value={value.nomeCompleto ? value.nomeCompleto : controlledTexto}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          ref={a => this.anchorEl = a && a.getInputNode()}
          //  onBlur={() => setTimeout(this.setState({showList: false}), 1000)}
        />
        {
          (this.state.anchorEl) &&
            <Popover
              open={this.state.showList}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              onRequestClose={() => this.setState({ showList: false })}
            >
              <ListaUsuarios
                usuarios={usuarios}
                onClick={this.handleNewRequest}
              />
            </Popover>
        }
      </div>
    )
  }
}

export default BuscaUsuarioInput;
