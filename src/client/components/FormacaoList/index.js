import React, { PropTypes } from 'react'
import FormacaoItem from '@components/FormacaoItem'
import Divider from 'material-ui/Divider'

class FormacaoList extends React.Component {
  static propTypes = {
    formacoes: PropTypes.array,
  }

  render() {
    const {
      formacoes,
    } = this.props

    return (
      <div>
        {
          formacoes &&
          formacoes.map((formacao, i) =>
            <div key={i}>
              <FormacaoItem
                {...formacao}
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

export default FormacaoList;
