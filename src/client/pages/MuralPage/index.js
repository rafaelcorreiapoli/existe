import React, { PropTypes } from 'react'
import FiltroFuncao from '@containers/FiltroFuncao';
import FiltroCategoria from '@containers/FiltroCategoria';
import FiltroOrdem from '@containers/FiltroOrdem';
import FiltroStatus from '@containers/FiltroStatus';
import MuralProjetos from '@containers/MuralProjetos';
import BotaoNovoProjeto from '@components/BotaoNovoProjeto';
import SelecionarAreaHint from '@components/SelecionarAreaHint';
import FiltroSubCategoria from '@containers/FiltroSubCategoria'
import PageTitle from '@components/PageTitle'
import BuscaInput from '@components/BuscaInput'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

const styles = {
  filtroCategoriaContainer: {
    textAlign: 'center',
    marginBottom: 20,
  },
}

class MuralPage extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <PageTitle
              title="Mural"
            />
            <FiltroCategoria />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <BuscaInput />
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={{ display: 'flex' }}>
            <SelecionarAreaHint />
            <FiltroFuncao />
            <FiltroStatus />
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={{ display: 'flex', marginTop: 30, justifyContent: 'flex-end' }}>
            <BotaoNovoProjeto style={{ marginRight: 20 }} />
            <FiltroSubCategoria style={{ marginRight: 20 }} />
            <FiltroOrdem />
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={{ marginTop: 30 }}>
            <MuralProjetos />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default MuralPage
