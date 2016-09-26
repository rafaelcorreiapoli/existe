import React, { PropTypes } from 'react'
import FeedList from '@components/FeedList'
import { Texto } from '@resources/icons'

const feeds = [{
  imagem: 'http://placehold.it/100x100',
  iconElement: <Texto />,
  titulo: 'NOME DO USUÁRIO',
  subtitulo: 'Começou a colaborar no NOME DO PROJETO',
  data: new Date(),
}, {
  imagem: 'http://placehold.it/100x100',
  iconElement: <Texto />,
  titulo: 'NOME DO USUÁRIO',
  subtitulo: 'Começou a colaborar no NOME DO PROJETO',
  data: new Date(),
}]


class Feed extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <FeedList feeds={feeds} />
      </div>
    )
  }
}


export default Feed
