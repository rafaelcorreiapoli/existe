import React, { PropTypes } from 'react'
import HistoricoList from '@components/HistoricoList'
import { composeWithTracker } from 'react-komposer'
import { ACCENT } from '@resources/colors'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  historicoExiste: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    textTransform: 'uppercase',
  },
  existe: {
    color: ACCENT,
  },
}

class Historico extends React.Component {
  static propTypes = {
    historicoPessoal: PropTypes.array,
    historicoExiste: PropTypes.array,
  }

  render() {
    const {
      historicoPessoal,
      historicoExiste,
    } = this.props

    return (
      <div style={styles.container}>
        <HistoricoList
          historicos={historicoPessoal}
        />
        <div style={styles.historicoExiste}>
          Histórico <span style={styles.existe}>EXISTE</span>
        </div>
        <HistoricoList
          historicoExiste
          historicos={historicoExiste}
        />
      </div>
    )
  }
}

const composer = (props, onData) => {
  onData(null, {
    historicoPessoal: [
      {
        nomeEmpresa: 'AES Eletropaulo',
        funcao: 'Engenheiro',
        cidade: 'São Paulo',
        estado: 'SP',
        dataInicio: new Date(),
        dataFim: new Date(),
        descricao: 'Este tem descrição',
      },
      {
        nomeEmpresa: 'AES Eletropaulo',
        funcao: 'Engenheiro',
        cidade: 'São Paulo',
        estado: 'SP',
        dataInicio: new Date(),
        dataFim: new Date(),
        descricao: '',
      },
    ],
    historicoExiste: [
      {
        nomeProjeto: 'Nome da empresa',
        nomeEmpresa: 'AES Eletropaulo',
        funcao: 'Engenheiro',
        cidade: 'São Paulo',
        estado: 'SP',
        dataInicio: new Date(),
        dataFim: new Date(),
        descricao: 'Este tem descrição',
      },
      {
        nomeProjeto: 'Nome da empresa',
        nomeEmpresa: 'AES Eletropaulo',
        funcao: 'Engenheiro',
        cidade: 'São Paulo',
        estado: 'SP',
        dataInicio: new Date(),
        dataFim: new Date(),
        descricao: 'Este tem descrição',
      },
    ],
  })
}
export default composeWithTracker(composer)(Historico);
