import React, { PropTypes } from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap'
import { Icon } from 'react-fa';
import styles from './styles';

const DropdownItem = ({
  icon,
  text,
  eventKey
}) => (
  <MenuItem eventKey={eventKey}>
    <Icon name={icon} style={styles.icon} />
    {text}
  </MenuItem>
)

const Dropdown = ({
  options
}) => {
  return (
    <SplitButton title="Dropdown right" style={styles.button}>
      {options.map((option, i) => (
        <DropdownItem
          eventKey={i}
          {...option}
        />
      ))}
    </SplitButton>
  )
}

export default Dropdown
