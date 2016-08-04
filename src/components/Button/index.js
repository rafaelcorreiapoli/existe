import React, { PropTypes } from 'react';
import { Button as BSButton } from 'react-bootstrap';
import Radium from 'radium'
import styles from './styles'

const RBSButton = Radium(BSButton);

const Button = ({
  children,
  style,
  ...props
}) => {
  return (
    <RBSButton
      bsStyle="primary"
      bsSize="large"
      style={[styles.button, style]}
      {...props}
    >
      {children}
    </RBSButton>
  )
}

export default Radium(Button)
