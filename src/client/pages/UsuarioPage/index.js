import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import RaisedButton from 'material-ui/RaisedButton'
import { Adicionar } from '@resources/icons'
import { composeWithTracker } from 'react-komposer'

import UsuarioMenu from '@components/UsuarioMenu'
import UsuarioCard from '@components/UsuarioCard'

import UsuarioInfoContainer from '@containers/UsuarioInfoContainer'

const styles = {
  container: {
    marginTop: 120,
  },
  leftContainer: {
    borderRightWidth: 2,
    borderRightStyle: 'solid',
    borderRightColor: '#eee',
    paddingRight: 0,
  },
  mainContainer: {
    padding: 50,
  },
}

class UsuarioPage extends React.Component {
  static propTypes = {
    routes: PropTypes.array,
    params: PropTypes.object,
    children: PropTypes.node,
  }

  render() {
    const {
      routes,
      params,
      children,
    } = this.props

    return (
      <Grid style={styles.container}>
        <Row>
          <Col xs={3} style={styles.leftContainer}>
            <UsuarioInfoContainer
              mostrarAvaliacoes
              mostrarSeguidores
              userId={params.userId}
              style={{ paddingRight: 40 }}
            />

            <UsuarioMenu
              userId={params.userId}
              active={routes[3].path}
            />
            <RaisedButton
              label="SEGUIR"
              icon={<Adicionar />}
              primary
              fullWidth
              style={{ float: 'right' }}
            />
          </Col>
          <Col xs={9} style={{ paddingLeft: 40 }}>
            {
              React.cloneElement(children, {
                userId: params.userId,
              })
            }
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default UsuarioPage
