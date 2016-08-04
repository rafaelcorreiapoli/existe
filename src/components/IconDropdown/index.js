import React, { PropTypes } from 'react'
import { Icon } from 'react-fa';
import styles from './styles';
import { Dropdown as BSDropdown, MenuItem } from 'react-bootstrap';
import Button from '../Button';
import Radium from 'radium';
import DropdownComposer from '../DropdownComposer';

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.onClick(e);
  }

  render() {
    return (
      <Button onClick={this.handleClick} style={styles.button}>
        <span>{this.props.children}</span>
        <Icon name="chevron-down" style={styles.caret} />
      </Button>
    );
  }
}


class CustomMenu extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ul className="dropdown-menu" style={styles.menu}>
        {children}
      </ul>
    );
  }
}


let DropdownItem = ({
  value,
  icon,
  text,
  eventKey,
  onClick
}) => (
  <li style={styles.menuItem} onClick={() => onClick(value)}>
    {
      icon !== false && <Icon name={icon} style={styles.icon} />
    }
    <span>{text}</span>
  </li>
)
DropdownItem = Radium(DropdownItem)



class IconDropdown extends React.Component {
  render() {
    const {
      value,
      options = [],
      onClick,
      open,
      handleToggle,
      selectedOption,
      handleItemClick,
      style,
      ...props
    } = this.props

    return (
      <BSDropdown id="dropdown-custom-menu" open={open} onToggle={handleToggle} style={style} {...props}>
        <CustomToggle bsRole="toggle">
          {selectedOption.icon && <Icon name={selectedOption.icon} style={styles.iconToggle} /> }
          {selectedOption.text || ' Selecione uma Opção '}
        </CustomToggle>

        <CustomMenu bsRole="menu">
          {
            options.map((option, i) => (
              <DropdownItem
                key={i}
                onClick={handleItemClick}
                eventKey={i}
                {...option}
              />
            ))
          }
        </CustomMenu>
      </BSDropdown>
    )
  }
}

export default Radium(DropdownComposer(IconDropdown));
