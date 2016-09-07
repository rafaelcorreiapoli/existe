import React, { PropTypes } from 'react'
import { Icon as I} from 'react-fa';
import styles from './styles';
import Radium from 'radium'
import Paper from 'material-ui/Paper';

const Icon = Radium(I);

//const Paper = Radium(Paper);

const IconButton = ({
  icon,
  iconColor,
  backgroundColor,
  style,
  containerStyle,
  ...props
}) => {
  return (
    <Paper style={{...styles.container, backgroundColor: backgroundColor}} zDepth={1}>
      {
        React.cloneElement(icon, {
          color: iconColor
        })
      }
    </Paper>

  )
}

export default Radium(IconButton)
