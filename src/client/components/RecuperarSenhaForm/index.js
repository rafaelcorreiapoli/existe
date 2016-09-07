import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles'

const RecuperarSenhaForm = ({
  email,
  onChangeEmail,
  onRecuperarSenha,
  onClickLogin
}) => {
  return (
    <div style={styles.container}>
      <h1 style={{fontWeight: 200}}>Recuperar Senha</h1>
      <form autoComplete='off' autoFill='off' style={styles.form}>
        <TextField
          fullWidth
          name="email"
          id="email"
          value={email}
          onChange={(e, email) => onChangeEmail(email)}
          hintText="Email"
          floatingLabelText="Email"
        />

        <RaisedButton
          style={{width: 300, marginBottom: 10}}
          onClick={() => onRecuperarSenha(email)}
          label="RECUPERAR SENHA"
          primary={true} />

        <FlatButton
          style={{width: 300}}
          onClick={onClickLogin}
          label="FAZER LOGIN"
        />
      </form>
    </div>
  )
}

export default RecuperarSenhaForm
