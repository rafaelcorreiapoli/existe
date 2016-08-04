import React, { PropTypes } from 'react';
import { Button as BSButton } from 'react-bootstrap';
import Radium from 'radium'
import styles from './styles'


const Button = ({
  children,
  ...props
}) => {
  return (
    <BSButton
      bsStyle="primary"
      bsSize="large"
      style={styles.button}
      {...props}
    >
      {children}
    </BSButton>
  )
}

export default Radium(Button)
