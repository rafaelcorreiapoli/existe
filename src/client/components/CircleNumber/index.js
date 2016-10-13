import React, { PropTypes } from 'react'
import { Paper } from 'material-ui';
import Radium from 'radium';

const RadiumPaper = Radium(Paper)

const styles = {
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: '50%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
}
const CircleNumber = ({
  number,
  borderColor,
  style,
  ...props,
}) => {
  return (
    <div
      style={[styles.container, { borderColor }, style]}
    >
      <span style={styles.text}>{number}</span>
    </div>
  )
}

export default Radium(CircleNumber)


// <div style={{border: '1px solid black', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30}}>
// </div>
