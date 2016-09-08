import React, { PropTypes } from 'react'
import FeedList from '@components/FeedList'
import { Texto } from '@resources/icons'

const Feed = (props) => {
  return (
    <div style={{width: '100%'}}>
      <FeedList feeds={[
          {
            image: 'http://placehold.it/100x100',
            iconElement: <Texto />,
            title: 'NOME DO USUÁRIO',
            subtitle: 'Começou a colaborar no NOME DO PROJETO',
            date: new Date()
          },
          {
            image: 'http://placehold.it/100x100',
            iconElement: <Texto />,
            title: 'NOME DO USUÁRIO',
            subtitle: 'Começou a colaborar no NOME DO PROJETO',
            date: new Date()
          }
        ]}
      />
    </div>
  )
}

export default Feed
