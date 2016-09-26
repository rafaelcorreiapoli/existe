import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import GridUsuariosPortrait from '@components/GridUsuariosPortrait'
import PerfilTabs from '@components/PerfilTabs'


class Seguidores extends React.Component {
  static propTypes = {
    seguidores: PropTypes.array,
  }

  render() {
    const {
      seguidores,
    } = this.props
    return (
      <PerfilTabs
        tabs={[{
          label: '',
          value: 'seguidores',
          count: seguidores.length,
          onClick: () => {},
        }]}
        title={'Seguidores'}
        activeTab={'seguidores'}
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
