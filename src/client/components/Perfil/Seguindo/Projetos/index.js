import React, { PropTypes } from 'react'
import ItemExpansivo from '@components/ItemExpansivo'
import { composeWithTracker } from 'react-komposer'
import MiniFeedItem from '@components/MiniFeedItem'
import { Audio } from '@resources/icons'

class Projetos extends React.Component {
  static propTypes = {
    projetos: PropTypes.array,
  }

  render() {
    const {
      projetos,
    } = this.props
    return (
      <div>
        {projetos.map((projeto, i) => (
          <ItemExpansivo
            key={i}
            badgeCount={projeto.feeds.length}
            titulo={projeto.nome}
            subtitulo={projeto.nomeUsuario}
            imagem={projeto.imagem}
            seguidoresCount={projeto.seguidoresCount}
            data={projeto.data}
            hideColaboradores
          >
            {projeto.feeds.map((feed, j) => (
              <MiniFeedItem
                key={j}
                icon={feed.icon}
                texto={feed.texto}
                data={feed.data}
              />
            ))}
          </ItemExpansivo>
        ))}
      </div>
    )
  }
}

const composer = (props, onData) => {
  onData(null, {
    projetos: [{
      nome: 'projeto 01',
      seguidoresCount: 100,
      nomeUsuario: 'rafael',
      imagem: 'http://placehold.it/400x400',
      data: new Date(),
      feeds: [{
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }],
    }, {
      nome: 'projeto 02',
      seguidoresCount: 100,
      nomeUsuario: 'rafael',
      imagem: 'http://placehold.it/400x400',
      data: new Date(),
      feeds: [{
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }, {
        icon: <Audio />,
        texto: 'Texto do mini feed',
        data: new Date(),
      }],
    }],
  })
}
export default composeWithTracker(composer)(Projetos);
