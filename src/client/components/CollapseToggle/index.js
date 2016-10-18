import React, { PropTypes } from 'react'
import {
  SetaDireita,
  SetaBaixo,
} from '@resources/icons'
import IconButton from 'material-ui/IconButton'

class CollapseToggle extends React.Component {
  static propTypes = {
    collapse: PropTypes.bool,
    expanded: PropTypes.bool,
    onToggle: PropTypes.func,
    iconColor: PropTypes.string,
  }
  render() {
    const {
      onToggle,
      expanded,
      iconColor,
    } = this.props
    return (
      <IconButton onTouchTap={() => onToggle(!expanded)}>
        {
          expanded
          ? <SetaBaixo color={iconColor} />
        : <SetaDireita color={iconColor} />
        }

      </IconButton>
    )
  }
}

export default CollapseToggle;
