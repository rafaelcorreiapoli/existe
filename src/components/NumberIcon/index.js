import React, { PropTypes } from 'react'
import Radium from 'radium';
import styles from './styles'
import { Icon as I } from 'react-fa';
const Icon = Radium(I);

const IconNumber = ({
  icon,
  iconColor,
  number
}) => {
  return (
    <div style={styles.container}>
      <span style={styles.number}>{number}</span>
      <Icon name={icon} style={[styles.icon, iconColor && {color: iconColor}]}/>
    </div>
  )
}

export default Radium(IconNumber)
