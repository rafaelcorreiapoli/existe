import React, { PropTypes } from 'react'
import ItemExpansivo from '@components/ItemExpansivo'
import { composeWithTracker } from 'react-komposer'
import MiniFeedItem from '@components/MiniFeedItem'
import { Audio } from '@resources/icons'

class Pessoas extends React.Component {
  static propTypes = {
    pessoas: PropTypes.array,
  }

  render() {
    const {
      pessoas,
    } = this.props
    return (
      <div>
        {pessoas.map((pessoa, i) => (
          <ItemExpansivo
            key={i}
            badgeCount={pessoa.feeds.length}
            nome={pessoa.nome}
            nomeUsuario={pessoa.nomeUsuario}
            imagem={pessoa.imagem}
            seguidoresCount={pessoa.seguidoresCount}
            data={pessoa.data}
          >
            {pessoa.feeds.map((feed, j) => (
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
    pessoas: [{
      nome: 'RAFAEL RIBEIRO CORREIA',
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
      nome: 'JOHN DOE',
      seguidoresCount: 100,
      nomeUsuario: 'johndoe',
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
export default composeWithTracker(composer)(Pessoas);
