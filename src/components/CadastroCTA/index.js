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
    alignItems: 'center'
  },
}
class CadastroCTA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpen(open) {
    this.setState({
      open
    })
  }

  render() {
    const {
      onClickCadastroPessoal,
      onClickCadastroEmpresarial
    } = this.props

    return (
      <div style={styles.container}>
        <h3>Ainda não é membro?</h3>
        <RaisedButton
          style={{width: 300, marginBottom: 10}}
          onClick={() => this.handleOpen(true)}
          label="CADASTRE-SE AGORA"
          primary={true} />

        <Dialog
          modal={false}
          onRequestClose={(open) => this.handleOpen(open)}
          open={this.state.open}
        >
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', padding: 50}}>

        <RaisedButton

          style={{marginBottom: 50}}
          onClick={onClickCadastroPessoal}
          label="CADASTRO PESSOAL"
          primary={true} />
        <RaisedButton
          onClick={onClickCadastroEmpresarial}
          label="CADASTRO EMPRESARIAL"
          primary={true} />

        </div>
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickCadastroPessoal() {
      dispatch(push('/cadastro/pessoal'))
    },
    onClickCadastroEmpresarial() {
      dispatch(push('/cadastro/empresarial'))
    }
  }
}
CadastroCTA = connect(
  null,
  mapDispatchToProps
)(CadastroCTA)

export default CadastroCTA
