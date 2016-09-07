import React, { PropTypes } from 'react'
import Radium from 'radium'
import { getColorForArea } from '../../utils/get_color'
const styles = {
  image: {
    marginBottom: -4,
    width: '100%'
  },
  areaIndicator: {
    height: 20,
  }
}
const UsuarioAvatar = ({
  image,
  area,
  style,
  ...props
}) => {
  return (
    <div style={style} {...props}>
      <img src={image} style={styles.image}/>
      <div style={[styles.areaIndicator, {backgroundColor: getColorForArea(area)}]} />
    </div>
  )
}

export default Radium(UsuarioAvatar)
