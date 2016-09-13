import React, { PropTypes } from 'react'
import MenuItem from 'material-ui/MenuItem';
import { ACCENT } from '@resources/colors'

const styles = {
  menuItem: {
    textAlign: 'right',
  },
  menuItemActive: {
    color: ACCENT
  },
  innerDivActive: {
    borderRightWidth: 2,
    borderRightColor: ACCENT,
    borderRightStyle: 'solid',
  },
  innerDiv: {
    paddingRight: 40,
  }
}

class CustomMenuItem extends React.Component {
  render() {
    const {
      label,
      active,
      id,
      onClick,
      style,
      ...props
    } = this.props
    const mergedStyle = Object.assign({},
      styles.menuItem,
      active ? styles.menuItemActive : {},
      style
    )
    const innerDivStyle = Object.assign({}, styles.innerDiv, active ? styles.innerDivActive : null)

    return (
      <MenuItem
        innerDivStyle={innerDivStyle}
        primaryText={label}
        style={mergedStyle}
        onClick={() => !active && onClick(id)}
        {...props}
      />
    )
  }
}

export default CustomMenuItem
