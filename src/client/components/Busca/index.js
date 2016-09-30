import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import BuscaInput from '@components/BuscaInput'
import BuscaFiltro from '@components/BuscaFiltro'
import BuscaTabs from '@components/BuscaTabs'

const styles = {
  inputContainer: {
    padding: 20,
  },
}

class Busca extends React.Component {
  static propTypes = {
    entidade: PropTypes.string,
    setTexto: PropTypes.func,
    setCategoria: PropTypes.func,
    setSubcategoria: PropTypes.func,
    setTimes: PropTypes.func,
    setEntidade: PropTypes.func,
    texto: PropTypes.string,
    categoria: PropTypes.object,
    subcategoria: PropTypes.object,
    times: PropTypes.object,
  }
  render() {
    const {
      entidade,
      setTexto,
      setCategoria,
      setSubcategoria,
      setTimes,
      setEntidade,
      texto,
      categoria,
      subcategoria,
      times,
    } = this.props

    return (
      <Grid fluid>
        <Row>
          <Col xs={12} style={styles.inputContainer}>
            <BuscaInput
              texto={texto}
              onChange={setTexto}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <BuscaFiltro
              categoria={categoria}
              subcategoria={subcategoria}
              times={times}
              onChangeCategoria={setCategoria}
              onChangeSubcategoria={setSubcategoria}
              onChangeTimes={setTimes}
            />
          </Col>
          <Col xs={9}>
            <BuscaTabs
              entidade={entidade}
              onChange={setEntidade}
              videosCount={1}
              comunidadeCount={2}
              projetosCount={3}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Busca;
