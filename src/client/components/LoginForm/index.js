import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MDSpinner from 'react-md-spinner';
import styles from './styles';
import { Facebook, Linkedin } from '@resources/icons'
import OrSeparator from '../OrSeparator'
import Radium from 'radium'

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset',
};

const BUTTON_WIDTH = 250
const BUTTON_FONT_SIZE = '11pt'
const ELEMENT_MARGIN = 22;
const LOGIN_FONT_SIZE = '16pt'
const OR_SEPARATOR_FONT_SIZE = '12pt'

class LoginForm extends React.Component {
  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    error: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onClickRecuperarSenha: PropTypes.func.isRequired,
    onLoginWithPassword: PropTypes.func,
    onLoginWithFacebook: PropTypes.func,
    onLoginWithLinkedin: PropTypes.func,
    style: PropTypes.object,
  }

  render() {
    const {
      email,
      password,
      onChangeEmail,
      onChangePassword,
      onLoginWithPassword,
      error,
      success,
      loading,
      style,
      onClickRecuperarSenha,
      onLoginWithFacebook,
      onLoginWithLinkedin,
      redirect,
    } = this.props

    return (
      <div style={[style, styles.container]}>
        <h1 style={{ marginBottom: ELEMENT_MARGIN, fontSize: LOGIN_FONT_SIZE }}>Login</h1>

        <RaisedButton
          style={{ marginBottom: ELEMENT_MARGIN, minWidth: BUTTON_WIDTH, width: '50%' }}
          labelPosition="after"
          onClick={onLoginWithFacebook}
          label="LOGIN COM FACEBOOK"
          icon={<Facebook size={16} />}
          labelStyle={{ fontSize: BUTTON_FONT_SIZE }}
          backgroundColor="#3b5998"
          labelColor="white"
        />

        {onLoginWithLinkedin &&
          <RaisedButton
            style={{ minWidth: BUTTON_WIDTH, width: '50%' }}
            labelPosition="after"
            onClick={onLoginWithLinkedin}
            label="LOGIN COM LINKEDIN"
            icon={<Linkedin size={16} style={{ marginBottom: 4 }} />}
            labelStyle={{ fontSize: BUTTON_FONT_SIZE }}
            backgroundColor="#007bb5"
            labelColor="white"
          />
        }
        {onLoginWithPassword &&
          <div style={{width: '100%'}}>
            <OrSeparator style={{ marginTop: ELEMENT_MARGIN, marginBottom: ELEMENT_MARGIN, alignSelf: 'stretch', fontSize: OR_SEPARATOR_FONT_SIZE }} />
            <form autoComplete="off" style={styles.form}>
              {error &&
                <span style={styles.error}>
                  {(error.error === 403 && error.reason === 'User not found')
                    && 'Usuário não encontrado'}
                  {(error.error === 403 && error.reason === 'Incorrect password')
                    && 'Senha incorreta'}
                </span>
              }
              {loading &&
                <MDSpinner />
              }
              {success &&
                <span style={styles.success}>
                  Logado com sucesso!
                </span>
              }
              <TextField
                fullWidth
                name="email"
                id="email"
                value={email}
                onChange={(e, email) => onChangeEmail(email)}
                hintText="Email"
                floatingLabelText="Email ou usuário"
                inputStyle={hideAutoFillColorStyle}
              />
              <TextField
                fullWidth
                name="password"
                id="password"
                value={password}
                onChange={(e, password) => onChangePassword(password)}
                hintText="Senha"
                floatingLabelText="Senha"
                inputStyle={hideAutoFillColorStyle}
                type="password"
              />


              <RaisedButton
                style={{ minWidth: BUTTON_WIDTH, width: '50%', marginTop: ELEMENT_MARGIN, marginBottom: ELEMENT_MARGIN }}
                onClick={() => onLoginWithPassword(email, password)}
                label="LOGIN"
                labelPosition="after"
                labelColor="white"
                primary
              />

              <FlatButton
                style={{ minWidth: BUTTON_WIDTH, width: '50%' }}
                label="Esqueceu a senha?"
                labelStyle={{fontSize: '11pt'}}
                onClick={onClickRecuperarSenha}
              />
            </form>
          </div>
        }
      </div>
    )
  }
}

export default Radium(LoginForm)
