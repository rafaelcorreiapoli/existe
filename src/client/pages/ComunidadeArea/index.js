import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import { UsuariosPorAreaGrid } from '@containers/UsuariosPorArea'
import ComunidadeUsuario from '@components/ComunidadeUsuario'
import AreaTitle from '@components/AreaTitle'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const PAGE_SIZE = 12;


class ComunidadeArea extends React.Component {
  static propTypes = {
    params: PropTypes.object,
    onClickTitle: PropTypes.func,
  }

  render() {
    const {
      params: {
        area,
      },
      onClickTitle,
    } = this.props

    return (
      <Grid fluid>
        <Row>
          <Col xs={3}>
            <h3>Filtros</h3>
          </Col>
          <Col xs={9}>
            <AreaTitle
              area={area}
              onClickTitle={onClickTitle}
            />
            <UsuariosPorAreaGrid
              area={area}
              columnWidth={200}
              pageSize={PAGE_SIZE}
              renderElement={user => (
                <ComunidadeUsuario
                  {...user}
                />
              )}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  onClickTitle() {
    dispatch(push('/comunidade'))
  },
})
export default connect(null, mapDispatchToProps)(ComunidadeArea);
