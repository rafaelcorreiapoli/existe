import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

import PerfilInfo from '../../components/PerfilInfo'
import PerfilMenu from '../../components/PerfilMenu'

export Avaliacoes from './Avaliacoes'
export Colaborando from './Colaborando'
export Favoritos from './Favoritos'
export Historico from './Historico'
export Notificacoes from './Notificacoes'
export Salvos from './Salvos'
export Seguidores from './Seguidores'
export Seguindo from './Seguindo'
export Editar from './Editar'

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   leftContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: 450,
//   },
//   rightContainer: {
//     display: 'flex',
//     flexGrow: 1,
//   },
// }
export default ({
  children,
  routes,
  ...props,
}) => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={4}>
          <PerfilInfo
            nome="Marcelo Fernandez"
            area="imagem"
            image="http://placehold.it/300x300"
            textoCount={3}
            imagemCount={3}
            audioCount={3}
            cenaCount={3}
            producaoCount={3}
          />
          <div>
            <PerfilMenu
              active={routes[3].path}
            />
          </div>
        </Col>
        <Col xs={12} md={8}>
          {children}
        </Col>
      </Row>
    </Grid>
  )
}
