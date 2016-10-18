import React, {
  Component,
  PropTypes,
} from 'react';
import ButtonPopover from '@components/ButtonPopover';


export default class SelecionarSubCategoria extends Component {

  static defaultProps = {}

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object,
    options: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      value,
      onChange,
      style,
      options,
      ...props,
    } = this.props

    return (
      <ButtonPopover
        style={style}
        onChange={onChange}
        defaultText={'SUBCATEGORIAS'}
        value={value}
        options={options}
        {...props}
      />
    )
  }

}
