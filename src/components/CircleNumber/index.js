import React, { PropTypes } from 'react'
import { Paper } from 'material-ui';
import Radium from 'radium';

const RadiumPaper = Radium(Paper)
const CircleNumber = ({
  number,
  style,
  ...props
}) => {
  return (
    <RadiumPaper
      zDepth={1}
      circle={true}
      style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, ...style}} >
      <span style={{fontWeight: 'bold'}}>{number}</span>
    </RadiumPaper>
  )
}

export default CircleNumber


// <div style={{border: '1px solid black', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30}}>
// </div>
