import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import GridUsuariosPortrait from '@components/GridUsuariosPortrait'
import PerfilTabs from '@components/PerfilTabs'

const styles = {
  seguidoresCount: {
    // color: '#',
    display: 'block',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
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
      <PerfilTabs
        tabs={[]}
        title={'Seguidores'}
        // activeTab={'seguidores'}
        customElement={
          <span style={styles.seguidoresCount}>
            {seguidoresCount}
          </span>
        }
      >
        <div>
          <GridUsuariosPortrait
            usuarios={seguidores}
          />
        </div>
      </PerfilTabs>
    )
  }
}


const composer = (props, onData) => {
  onData(null, {
    seguidoresCount: 120,
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

export default composeWithTracker(composer)(Seguidores);
