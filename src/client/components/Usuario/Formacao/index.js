import React, { PropTypes } from 'react'
import FormacaoList from '@components/FormacaoList'
import { composeWithTracker } from 'react-komposer'

class Formacao extends React.Component {
  static propTypes = {
    formacoes: PropTypes.array,
  }

  render() {
    const {
      formacoes,
    } = this.props

    return (
      <div>
        <FormacaoList
          formacoes={formacoes}
        />
      </div>
    )
  }
}

const composer = (props, onData) => {
  onData(null, {
    formacoes: [
      {
        local: 'ESCOLA POLITÉCNICA',
        curso: 'Engenharia de Computação',
        anoInicio: 2012,
        anoFim: 2018,
      },
      {
        local: 'ESCOLA POLITÉCNICA',
        curso: 'Engenharia de Computação',
        anoInicio: 2012,
        anoFim: 2018,
      },
    ],
  })
}
export default composeWithTracker(composer)(Formacao);
