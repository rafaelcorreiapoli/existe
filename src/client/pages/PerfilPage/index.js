import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

import PerfilInfoContainer from '@containers/PerfilInfoContainer'
import PerfilMenu from '@components/PerfilMenu'

const styles = {
  titleContainer: {
    height: 128,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: '24pt',
    fontWeight: 200,
  },
}
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

    console.log(routes)
    
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} style={styles.titleContainer}>
            <h1 style={styles.title}>PERFIL</h1>
          </Col>
        </Row>
        <Row style={{ borderTop: '1px solid #b5b5bb' }}>
          <Col xs={12} md={4} style={{ padding: 0, borderRight: '1px solid #b5b5bb' }}>
            <div style={{ borderBottom: '1px solid #e5e5e5' }}>
              <PerfilInfoContainer
                style={{ marginBottom: -1, marginTop: -1 }}
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
