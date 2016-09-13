import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const styles = {
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 50,
  },
}
class CadastroCTA extends React.Component {
  static propTypes = {
    onClickCadastroPessoal: PropTypes.func,
    onClickCadastroEmpresarial: PropTypes.func,
  }
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleOpen(open) {
    this.setState({
      open,
    })
  }

  render() {
    const {
      onClickCadastroPessoal,
      onClickCadastroEmpresarial,
    } = this.props

    return (
      <div style={styles.container}>
        <h3>AINDA NÃO É MEMBRO?</h3>
        <RaisedButton
          style={{ width: 300, marginBottom: 10 }}
          onClick={() => this.handleOpen(true)}
          label="CADASTRE-SE AGORA"
          primary
        />

        <Dialog
          modal={false}
          onRequestClose={(open) => this.handleOpen(open)}
          open={this.state.open}
        >
          <div style={styles.buttonRow}>
            <RaisedButton
              style={{ marginBottom: 50 }}
              onClick={onClickCadastroPessoal}
              label="CADASTRO PESSOAL"
              primary
            />
            <RaisedButton
              onClick={onClickCadastroEmpresarial}
              label="CADASTRO EMPRESARIAL"
              primary
            />
          </div>
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClickCadastroPessoal() {
    dispatch(push('/cadastro/pessoal'))
  },
  onClickCadastroEmpresarial() {
    dispatch(push('/cadastro/empresarial'))
  },
})

export default connect(
  null,
  mapDispatchToProps
)(CadastroCTA)
