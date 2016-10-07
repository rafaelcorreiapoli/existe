import React, { PropTypes } from 'react'
import BuscarUsuario from '@containers/BuscarUsuario'

export default class extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func,
      value: PropTypes.object,
    }),
  }
  render() {
    const {
      input,
      ...props,
    } = this.props

    return (
      <BuscarUsuario
        {...props}
        onChange={input.onChange}
        value={input.value}
      />
    )
  }
}
