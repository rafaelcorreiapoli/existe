import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import Popover from 'material-ui/Popover'
import ListaUsuarios from '@components/ListaUsuarios'
import { Meteor } from 'meteor/meteor'


class BuscaUsuarioInput extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    texto: PropTypes.string,
    error: PropTypes.bool,
    value: PropTypes.object,
  }
  constructor(props) {
    super(props)

    this.handleSelecionarUsuario = this.handleSelecionarUsuario.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.novaBusca = this.novaBusca.bind(this)

    this.state = {
      showList: true,
      usuarios: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value.nomeCompleto !== this.props.value.nomeCompleto) {
      this.novaBusca(nextProps.value.nomeCompleto)
    }
  }
  novaBusca(texto) {
    Meteor.call('Users.search', { texto }, (err, res) => {
      if (err) {
        this.setState({
          error: err.toString(),
        })
      } else {
        const usuarios = res.slice(0, 10).map(usuario => ({
          _id: usuario._id,
          email: usuario.profile.email,
          nomeCompleto: usuario.profile.nomeCompleto,
        }))
        this.setState({
          usuarios,
        })
      }
    })
  }
  handleSelecionarUsuario(usuarioSelecionado) {
    const {
      onChange,
    } = this.props

    this.setState({
      showList: false,
    })
    onChange(usuarioSelecionado)
    //  setTexto(chosenRequest.nomeCompleto)
  }

  handleChange(e) {
    e.preventDefault()

    const {
      value,
      onChange,
    } = this.props

    this.setState({
      anchorEl: e.currentTarget,
      showList: true,
    })

    onChange({
      ...value,
      nomeCompleto: e.target.value,
    })
  }

  handleFocus(e) {
    this.setState({
      anchorEl: e.currentTarget,
      showList: true,
    })
  }


  render() {
    const {
      value,
    } = this.props

    const {
      usuarios,
    } = this.state
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
          onNewRequest={this.handleSelecionarUsuario}
          filter={f => f}
        /> */}
        <TextField
          name="busca"
          value={value.nomeCompleto || ''}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          ref={(a) => { this.anchorEl = a && a.getInputNode() }}
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
                onClick={this.handleSelecionarUsuario}
              />
            </Popover>
        }
      </div>
    )
  }
}

export default BuscaUsuarioInput;
