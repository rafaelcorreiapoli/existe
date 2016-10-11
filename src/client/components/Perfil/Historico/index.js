import React, { PropTypes } from 'react'
import HistoricoList from '@components/HistoricoPerfilList'
import { Texto } from '@resources/icons'
import { composeWithTracker } from 'react-komposer'
import PerfilTabs from '@components/PerfilTabs'
import moment from 'moment'

const styles = {
  membroDesde: {
    color: '#d3d3d3',
    display: 'block',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
  }
}
class Historico extends React.Component {
  static propTypes = {
    historicos: PropTypes.array,
    membroDesde: PropTypes.object,
  }

  render() {
    const {
      historicos,
      membroDesde
    } = this.props
    return (
      <PerfilTabs
        tabs={[]}
        title={'Histórico'}
        customElement={
          <span style={styles.membroDesde}>
            Membro desde {moment(membroDesde).format('DD/MM/YYYY')}
          </span>
        }
      >
        <div style={{ width: '100%' }}>
          <HistoricoList historicos={historicos} />
        </div>
      </PerfilTabs>
    )
  }
}

const composer = (props, onData) => {
  const historicos = [{
    iconElement: <Texto />,
    texto: 'Começou a colaborar no NOME DO PROJETO',
    data: new Date(),
  }, {
    iconElement: <Texto />,
    texto: 'Começou a colaborar no NOME DO PROJETO',
    data: new Date(),
  }]

  onData(null, {
    historicos,
    membroDesde: new Date(),
  })
}
export default composeWithTracker(composer)(Historico)
