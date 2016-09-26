import React, { PropTypes } from 'react'
// import MiniFeedItem from '@components/MiniFeedItem'
// import ItemExpansivo from '@components/ItemExpansivo'
// import GridUsuariosPortrait from '@components/GridUsuariosPortrait'
import FeedItem from '@components/FeedItem'

import { Audio } from '@resources/icons'
import { composeWithTracker } from 'react-komposer'

const usuarios = [
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
]

class Marcacoes extends React.Component {
  static propTypes = {
    feeds: PropTypes.array,
  }

  render() {
    const {
      feeds,
    } = this.props

    return (
      <div>
        {
          feeds.map((feed, i) => (
            <FeedItem
              key={i}
              imagem={feed.imagem}
              iconElement={feed.iconElement}
              titulo={feed.titulo}
              subtitulo={feed.subtitulo}
              data={feed.data}
              style={{ marginBottom: 20 }}
            />
          ))
        }
      </div>
    )
  }
}

const composer = (props, onData) => {
  onData(null, {
    feeds: [{
      imagem: 'http://placehold.it/400x400',
      iconElement: <Audio />,
      titulo: 'projeto 01',
      subtitulo: 'projeto 01 subtitulo',
      data: new Date(),
    }, {
      imagem: 'http://placehold.it/400x400',
      iconElement: <Audio />,
      titulo: 'projeto 01',
      subtitulo: 'projeto 01 subtitulo',
      data: new Date(),
    }, {
      imagem: 'http://placehold.it/400x400',
      iconElement: <Audio />,
      titulo: 'projeto 01',
      subtitulo: 'projeto 01 subtitulo',
      data: new Date(),
    }],
  })
}
export default composeWithTracker(composer)(Marcacoes);
