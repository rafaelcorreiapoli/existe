import React, { PropTypes } from 'react'
import { Icon as I} from 'react-fa';
import styles from './styles';
import Radium from 'radium'

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
    <div style={[styles.container, {backgroundColor}, containerStyle]} {...props}>
      <Icon name={icon} style={[styles.icon, {color: iconColor}]} />
    </div>
  )
}

export default Radium(IconButton)
