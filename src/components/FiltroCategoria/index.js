import React, { PropTypes } from 'react'
//import Dropdown from '../Dropdown';
import { Dropdown, MenuItem } from 'react-bootstrap';
import Button from '../Button';
import styles from './styles'
class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('aqui')
    this.props.onClick(e);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        text
      </Button>

    );
  }
}

class CustomMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = e => this.setState({ value: e.target.value });

    this.state = { value: '' };
  }

  focusNext() {
    const input = ReactDOM.findDOMNode(this.input);

    if (input) {
      input.focus();
    }
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;

    return (
      <div className="dropdown-menu" style={styles.menu}>
        <ul className="list-unstyled">
          {children}
        </ul>
      </div>
    );
  }
}

const FiltroCategoria = (props) => {
  return (
    // <Dropdown options={[{
    //     icon: 'users',
    //     text: 'EXISTE TODOS'
    //   }]} />
    <Dropdown id="dropdown-custom-menu">
      <CustomToggle bsRole="toggle">
        Custom toggle
      </CustomToggle>

      <CustomMenu bsRole="menu">
        <MenuItem eventKey="1">Red</MenuItem>
        <MenuItem eventKey="2">Blue</MenuItem>
        <MenuItem eventKey="3" active>Orange</MenuItem>
        <MenuItem eventKey="1">Red-Orange</MenuItem>
      </CustomMenu>
    </Dropdown>
  )
}

export default FiltroCategoria
