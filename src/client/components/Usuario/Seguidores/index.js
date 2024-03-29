import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import GridUsuariosPortrait from '@components/GridUsuariosPortrait'
import { Seguindo } from '@resources/icons'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
  },
}
class Seguidores extends React.Component {
  static propTypes = {
    seguidores: PropTypes.array,
    seguidoresCount: PropTypes.number,
  }

  render() {
    const {
      seguidores,
      seguidoresCount,
    } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.titleRow}>
          <span style={styles.text}>{seguidoresCount}</span>
          <Seguindo style={styles.icon} />
          <span style={styles.text}>SEGUIDORES</span>
        </div>
        <GridUsuariosPortrait
          usuarios={seguidores}
          hideUserInfo
        />
      </div>
    )
  }
}


const composer = (props, onData) => {
  onData(null, {
    seguidoresCount: 100,
    seguidores: [
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
      {
        nome: 'RAFAEL',
        funcao: 'ENGENHEIRO',
        imagem: 'http://placehold.it/300x300',
      },
    ],
  })
}
export default composeWithTracker(composer)(Seguidores)
