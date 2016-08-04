import React, { PropTypes } from 'react'
import { Icon } from 'react-fa';
import styles from './styles';
import { Dropdown as BSDropdown, MenuItem } from 'react-bootstrap';
import Button from '../Button';
import Radium from 'radium';
import DropdownComposer from '../DropdownComposer';
import _ from 'lodash';

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(e);
  }

  render() {
    return (
      <Button onClick={this.handleClick} style={styles.button}>
        <div style={styles.leftText}>EM QUAL ÁREA VOCÊ QUER COLABORAR?</div>
        <div style={styles.mainText}>{this.props.children}</div>
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

let MenuColumns = ({
  items,
  renderRow,
  columnSize = 5
}) => {
  const columns = _.chunk(items, columnSize);
  return (
    <div style={styles.columnContainer}>
      {
        columns.map((column, i) => {
          const middleColumn = i < columns.length - 1;
          return (
            <div
              key={i}
              style={[styles.column, middleColumn && styles.middleColumn]}
            >
              {column.map(renderRow)}
            </div>
          )
        })
      }
    </div>
  )
}

MenuColumns = Radium(MenuColumns);

let DropdownItem = ({
  value,
  icon,
  text,
  onClick,
  color
}) => (
  <li style={styles.menuItem} onClick={() => onClick(value)}>
    <span style={[styles.menuItemText, {color}]}>{text}</span>
  </li>
)
DropdownItem = Radium(DropdownItem)

let DropdownItemDivisor = ({
  text,
  color
}) => (
  <li style={[styles.menuDivisor, {backgroundColor: color}]}>
    <span>{text}</span>
  </li>
)
DropdownItemDivisor = Radium(DropdownItemDivisor);


class MultiColumnDropdown extends React.Component {
  render() {
    const {
      options = [],
      value,
      onClick,
      open,
      handleToggle,
      selectedOption,
      handleItemClick,
    } = this.props

    return (
      <BSDropdown id="dropdown-custom-menu" open={open} onToggle={handleToggle}>
        <CustomToggle bsRole="toggle">
          {selectedOption.text || ' Selecione uma Opção '}
        </CustomToggle>

        <CustomMenu bsRole="menu">
          <MenuColumns
            columnSize={15}
            items={options}
            renderRow={(option, i) => {
              if (option.divisor === true) {
                return <DropdownItemDivisor
                  key={i}
                  {...option}
                />
              } else {
                return <DropdownItem
                  key={i}
                  onClick={handleItemClick}
                  {...option}
                />
              }
            }}
          />
        </CustomMenu>
      </BSDropdown>
    )
  }
}

export default Radium(DropdownComposer(MultiColumnDropdown));
