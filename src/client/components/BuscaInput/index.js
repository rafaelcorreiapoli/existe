import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import TextField from 'material-ui/TextField'
import { Busca } from '@resources/icons'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    //  justifyContent: 'center',
  },
  input: {
    fontSize: 32,
  },
  field: {
    height: 80,
  },
}

class BuscaInput extends React.Component {
  static propTypes = {
    texto: PropTypes.string,
    onChange: PropTypes.func,
  }
  render() {
    const {
      onChange,
      texto,
    } = this.props

    return (
      <div style={styles.container}>
        <TextField
          value={texto}
          name="texto"
          fullWidth
          inputStyle={styles.input}
          style={styles.field}
          onChange={(v) => onChange(v.target.value)}
        />
        <Busca />
      </div>
    )
  }
}


export default reduxForm({
  form: 'busca',
  destroyOnUnmount: false,
})(BuscaInput)
