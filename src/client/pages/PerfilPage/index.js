import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

import PerfilInfoContainer from '@containers/PerfilInfoContainer'
import PerfilMenu from '@components/PerfilMenu'

class Perfil extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    nome: PropTypes.string,
    area: PropTypes.string,
    image: PropTypes.string,
    textoCount: PropTypes.number,
    imagemCount: PropTypes.number,
    audioCount: PropTypes.number,
    cenaCount: PropTypes.number,
    producaoCount: PropTypes.number,
    routes: PropTypes.array,
  }

  render() {
    const {
      children,
      routes,
    } = this.props

    return (
      <Grid>
        <Row style={{ borderTop: '2px solid black' }}>
          <Col xs={12} md={4} style={{ padding: 0, borderRight: '2px solid black' }}>
            <div style={{ borderBottom: '2px solid black' }}>
              <PerfilInfoContainer
                style={{ marginBottom: -2, marginTop: -2 }}
              />
            </div>
            <div>
              <PerfilMenu
                active={routes[3].path}
              />
            </div>
          </Col>
          <Col xs={12} md={8} style={{ padding: 0 }}>
            {children}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Perfil
