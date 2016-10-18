import React, { PropTypes } from 'react'
import Divider from 'material-ui/Divider'
import UsuariosPorArea from '@containers/UsuariosPorArea'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import AreaTitle from '@components/AreaTitle'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import FiltroComunidade from '@containers/FiltroComunidade'
import BuscaInput from '@components/BuscaInput'
import PageTitle from '@components/PageTitle'

import {
  getExpandedForArea,
  setExpandedArea,
} from '@ducks/comunidade'

const styles = {
  areasContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

class ConjuntoUsuariosPorArea extends React.Component {
  static propTypes = {
    area: PropTypes.string,
    expanded: PropTypes.bool,
    onToggle: PropTypes.func,
  }
  render() {
    const {
      area,
      expanded,
      onToggle,
    } = this.props
    return (
      <div>
        <AreaTitle
          expanded={expanded}
          area={area}
          onToggle={onToggle}
        />
        <UsuariosPorArea
          area={area}
          pageSize={expanded ? 12 : 4}
          viewMode={expanded ? 'grid' : 'carousel'}
        />
      </div>
    )
  }
}
class ComunidadePage extends React.Component {
  static propTypes = {
    onClickTitle: PropTypes.func,
    expandedTexto: PropTypes.bool,
    expandedImagem: PropTypes.bool,
    expandedAudio: PropTypes.bool,
    expandedCena: PropTypes.bool,
    expandedProducao: PropTypes.bool,
  }
  render() {
    const {
      onClickTitle,
      expandedTexto,
      expandedImagem,
      expandedAudio,
      expandedCena,
      expandedProducao,
      setExpandedArea
    } = this.props
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <PageTitle
              title="Comunidade"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <BuscaInput />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <h2>Filtros</h2>
            <FiltroComunidade />
          </Col>
          <Col xs={9}>
            <div style={styles.areasContainer}>
              <ConjuntoUsuariosPorArea
                area={'texto'}
                expanded={expandedTexto}
                onToggle={expanded => setExpandedArea('texto', expanded)}
              />
              <Divider />
              <ConjuntoUsuariosPorArea
                area={'imagem'}
                expanded={expandedImagem}
                onToggle={expanded => setExpandedArea('imagem', expanded)}
              />
              <Divider />
              <ConjuntoUsuariosPorArea
                area={'audio'}
                expanded={expandedAudio}
                onToggle={expanded => setExpandedArea('audio', expanded)}
              />
              <Divider />
              <ConjuntoUsuariosPorArea
                area={'cena'}
                expanded={expandedCena}
                onToggle={expanded => setExpandedArea('cena', expanded)}
              />
              <Divider />
              <ConjuntoUsuariosPorArea
                area={'producao'}
                expanded={expandedProducao}
                onToggle={expanded => setExpandedArea('producao', expanded)}
              />
              <Divider />
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  expandedTexto: getExpandedForArea(state, 'texto'),
  expandedImagem: getExpandedForArea(state, 'imagem'),
  expandedAudio: getExpandedForArea(state, 'audio'),
  expandedCena: getExpandedForArea(state, 'cena'),
  expandedProducao: getExpandedForArea(state, 'producao'),
})

const mapDispatchToProps = dispatch => ({
  onClickTitle(area) {
    dispatch(push(`/comunidade/${area}`))
  },
  setExpandedArea(area, expanded) {
    dispatch(setExpandedArea(area, expanded))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ComunidadePage);
