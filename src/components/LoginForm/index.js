import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import styles from './styles';
const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};

const LoginForm = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onLogin,
  error,
  success,
  isLoggingIn
}) => {
  return (
    <div>
      <Paper
        style={styles.container}>
        <form autoComplete='off' autoFill='off'>
          {error &&
            <Paper style={styles.error}>
              <span>Error</span>
            </Paper>
          }
          {isLoggingIn &&
            <Paper style={styles.loading}>
              <span>Loading...</span>
            </Paper>
          }
          {success &&
            <Paper style={styles.success}>
              <span>Success!</span>
            </Paper>
          }
          <TextField
            name="email"
            id="email"
            value={email}
            onChange={(e, email) => onChangeEmail(email)}
            hintText="Email"
            floatingLabelText="Email"
            inputStyle={hideAutoFillColorStyle}
          /> <br />
          <TextField
            name="password"
            id="password"
            value={password}
            onChange={(e, password) => onChangePassword(password)}
            hintText="Senha"
            floatingLabelText="Senha"
            inputStyle={hideAutoFillColorStyle}
            type="password"
          /> <br />
          <RaisedButton
            onClick={() => onLogin(email, password)}
            label="LOGIN"
            primary={true} />
        </form>
      </Paper>
    </div>
  )
}

export default LoginForm
