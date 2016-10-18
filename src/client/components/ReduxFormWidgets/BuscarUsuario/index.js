import React, { PropTypes } from 'react'
import BuscaUsuarioInput from '@components/BuscaUsuarioInput'

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
      <BuscaUsuarioInput
        {...props}
        onChange={input.onChange}
        value={input.value}
      />
    )
  }
}
