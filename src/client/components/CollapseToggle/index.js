import React, { PropTypes } from 'react'
import {
  SetaDireita,
  SetaBaixo,
} from '@resources/icons'
import IconButton from 'material-ui/IconButton'

class CollapseToggle extends React.Component {
  static propTypes = {
    collapse: PropTypes.bool,
    onToggle: PropTypes.func,
  }
  render() {
    const {
      collapse,
      onToggle,
    } = this.props

    if (!collapse) {
      return (
        <IconButton onTouchTap={onToggle}>
          <SetaDireita />
        </IconButton>
      )
    }

    return (
      <IconButton onTouchTap={onToggle}>
        <SetaBaixo />
      </IconButton>
    )
  }
}

export default CollapseToggle;
