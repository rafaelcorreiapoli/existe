import React, { PropTypes } from 'react'

import { ACCENT } from '@resources/colors'
import UsuarioCard from '../../components/UsuarioCard'
import UsuarioAvatar from '../../components/UsuarioAvatar'
import CircleNumber from '../../components/CircleNumber'
import PerfilInfo from '../../components/PerfilInfo'
import PerfilMenu from '../../components/PerfilMenu'
import FeedList from '../../components/FeedList'
import { getColorForArea } from '@utils/get_color'
import { Texto } from '@resources/icons'


const PerfilPage = ({
  feedCount = 0,
  projetosCount = 0 ,
  pessoasCount = 0,
  routes
}) => {
  return (
    <div>
      <PerfilInfo
        nome='Marcelo Fernandez'
        area='imagem'
        image='http://placehold.it/300x300'
        textoCount={3}
        imagemCount={3}
        audioCount={3}
        cenaCount={3}
        producaoCount={3}
      />
    <div style={{width: 300}}>
      <PerfilMenu
        active='seguindo'
      />
    </div>
    <div style={{margin: 100}}>
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
      <Tabs>
        <Tab label={<div>Feed <span style={{color: ACCENT}}>({feedCount})</span></div>} >
          <div>
            oi
          </div>
        </Tab>
        <Tab label={<div>Projetos <span style={{color: ACCENT}}>({feedCount})</span></div>} >
          <div>
            oi2
          </div>
        </Tab>
        <Tab label={<div>Pessoas <span style={{color: ACCENT}}>({feedCount})</span></div>} >
          <div>
            oi3
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default PerfilPage
