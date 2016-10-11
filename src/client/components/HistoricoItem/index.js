import React, { PropTypes } from 'react'
import VerticalDivider from '@components/VerticalDivider'
import moment from 'moment'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  tituloContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  nomeEmpresa: {
    fontSize: 20,
  },
  tituloDivider: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  nomeProjeto: {
    fontSize: 20,
  },
  funcao: {
    marginBottom: 10,
  },
  detalhesContainer: {
    display: 'flex',
    flexDirection: 'row',
    color: 'gray',
    marginBottom: 10,
  },
  detalhesDivider: {
    marginLeft: 10,
    marginRight: 10,
  },
  periodo: {

  },
  local: {

  },
  descricao: {

  },
}
class HistoricoItem extends React.Component {
  static propTypes = {
    nomeProjeto: PropTypes.string,
    nomeEmpresa: PropTypes.string,
    funcao: PropTypes.string,
    dataInicio: PropTypes.object,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    dataFim: PropTypes.object,
    descricao: PropTypes.string,
    style: PropTypes.object,
    historicoExiste: PropTypes.bool,
  }

  render() {
    const {
      nomeProjeto,
      nomeEmpresa,
      funcao,
      dataInicio,
      dataFim,
      cidade,
      estado,
      descricao,
      style,
      historicoExiste,
    } = this.props

    return (
      <div style={Object.assign({}, styles.container, style)}>
        {/* Titulo */}
        <div style={styles.tituloContainer}>
          <span style={styles.nomeEmpresa}>
            {nomeEmpresa}
          </span>
          {
            historicoExiste &&
              <div style={{ display: 'inherit' }}>
                <VerticalDivider style={styles.tituloDivider} />
                <span style={styles.nomeProjeto}>
                  {nomeProjeto}
                </span>
              </div>
          }
        </div>
        {/* Função */}
        <span style={styles.funcao}>
          {funcao}
        </span>
        {/* Detalhes */}
        <div style={styles.detalhesContainer}>
          <span style={styles.periodo}>
            {moment(dataInicio).format('DD/MM/YYYY')} -
            {moment(dataFim).format('DD/MM/YYYY')}
          </span>
          <VerticalDivider style={styles.detalhesDivider} />
          <span style={styles.local}>
            {cidade}, {estado}
          </span>,
        </div>
        {/* Descrição (opcional) */}
        {
          descricao &&
            <span style={styles.descricao}>
              {descricao}
            </span>
        }
      </div>
    )
  }
}

export default HistoricoItem;
