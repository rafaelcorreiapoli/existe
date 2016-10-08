import React, { PropTypes } from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  imagemContainer: {

  },
  imagem: {
    width: 100,
    height: 100,
    marginLeft: 25,
    marginRight: 25,
    display: 'block',
  },
  nome: {
    width: 150,
    marginTop: 10,
    marginBottom: 10,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textAlign: 'center',
  },
  funcao: {
    width: 150,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textAlign: 'center',
  },
}
class UserPortrait extends React.Component {
  static propTypes = {
    imagem: PropTypes.string,
    nome: PropTypes.string,
    funcao: PropTypes.string,
    hideUserInfo: PropTypes.bool,
  }
  render() {
    const {
      imagem,
      nome,
      funcao,
      hideUserInfo,
    } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.imagemContainer}>
          <img src={imagem} style={styles.imagem} alt={nome} />
        </div>
        {
          !hideUserInfo &&
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={styles.nome}>
                {nome}
              </span>
              {funcao &&
                <span style={styles.funcao}>
                  {funcao}
                </span>
              }
            </div>
        }
      </div>
    )
  }
}

export default UserPortrait;
