import React, { PropTypes } from 'react'
import Radium from 'radium'
import { getColorForArea } from '@utils/get_color'

const styles = {
  container: {
    position: 'relative'
  },
  image: {
    marginBottom: -4,
    width: '100%',
  },
  areaIndicator: {
    height: 7,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
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
      <div style={[styles.container, style]} {...props}>
        <img src={image || 'http://placehold.it/300x300'} style={styles.image} />
        <div style={[styles.areaIndicator, { backgroundColor: getColorForArea(area) }]} />
      </div>
    )
  }
}

export default Radium(UsuarioAvatar)
