import React, { PropTypes } from 'react'
import Divider from 'material-ui/Divider'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  local: {
    fontSize: 20,
    marginBottom: 10,
  },
  curso: {
    marginBottom: 10,
  },
  ano: {
    //  marginBottom: 30,
  },
}
class FormacaoItem extends React.Component {
  static propTypes = {
    local: PropTypes.string,
    curso: PropTypes.string,
    anoInicio: PropTypes.number,
    anoFim: PropTypes.number,
    style: PropTypes.object,
  }

  render() {
    const {
      local,
      curso,
      anoInicio,
      anoFim,
      style,
    } = this.props

    return (
      <div style={Object.assign({}, styles.container, style)}>
        <span style={styles.local}>
          {local}
        </span>
        <span style={styles.curso}>
          {curso}
        </span>
        <span style={styles.ano}>
          {anoInicio} até {anoFim}
        </span>
      </div>
    )
  }
}

export default FormacaoItem;
