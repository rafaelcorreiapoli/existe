import React, { PropTypes } from 'react'
import Radium from 'radium'
import { getColorForArea } from '@utils/get_color'

const styles = {
  image: {
    marginBottom: -4,
    width: '100%',
  },
  areaIndicator: {
    height: 20,
  },
}

class UsuarioAvatar extends React.Component {
  static propTypes = {
    image: PropTypes.string,
    area: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    const {
      image,
      area,
      style,
      ...props,
    } = this.props

    return (
      <div style={style} {...props}>
        <img src={image || 'http://placehold.it/300x300'} style={styles.image} />
        <div style={[styles.areaIndicator, { backgroundColor: getColorForArea(area) }]} />
      </div>
    )
  }
}

export default Radium(UsuarioAvatar)
