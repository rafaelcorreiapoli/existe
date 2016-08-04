import React, { PropTypes } from 'react'
import { Icon as I} from 'react-fa';
import styles from './styles';
import Radium from 'radium'
import Paper from 'material-ui/Paper';

const Icon = Radium(I);

const IconButton = ({
  icon,
  iconColor,
  backgroundColor,
  style,
  containerStyle,
  ...props
}) => {
  return (
    <Paper style={{width: 30, height: 30, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center'}} zDepth={1}>
      <Icon name={icon} style={[styles.icon, {color: 'black'}]} />
    </Paper>

  )
}

export default Radium(IconButton)
/*<div style={[styles.container, {backgroundColor}, containerStyle]} {...props}>

</div>*/
