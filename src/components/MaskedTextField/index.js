import VMasker from 'vanilla-masker';
import React from 'react';
import { TextField } from 'material-ui';

class MaskedTextField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: props.defaultValue}; // set initial value from default value in props
    }

    onChange(mask, e) {
        const value = VMasker.toPattern(e.target.value, mask);
        this.setState({ value });
        if (this.props.onChange)
            this.props.onChange(value, e);
    }

    render() {
        const {mask, ...other} = this.props;

        if (mask) {
          delete other.defaultValue; // remove default value from TextField input (see link below)
          other.onChange = this.onChange.bind(this, mask);
          other.value = this.state.value;
        }
        return (<TextField {...other} />);
    }
}

MaskedTextField.propTypes = {
    mask: React.PropTypes.string
};

export default MaskedTextField;
