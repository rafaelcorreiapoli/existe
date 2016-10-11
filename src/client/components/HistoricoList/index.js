import React, { PropTypes } from 'react'
import HistoricoItem from '@components/HistoricoItem'
import Divider from 'material-ui/Divider'

class HistoricoList extends React.Component {
  static propTypes = {
    historicos: PropTypes.array,
    historicoExiste: PropTypes.bool,
  }

  render() {
    const {
      historicos,
      historicoExiste,
    } = this.props

    return (
      <div>
        {
          historicos &&
          historicos.map((historico, i) =>
            <div key={i}>
              <HistoricoItem
                {...historico}
                historicoExiste={historicoExiste}
                style={{ marginBottom: 30 }}
              />
              <Divider style={{ marginBottom: 20 }} />
            </div>
          )
        }
      </div>
    )
  }

}

export default HistoricoList;
