import React, { PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon';
import { Facebook, Twitter, Instagram, Help } from '@resources/icons'



const styles = {
  icon: {
    fontSize: 30,
  },
}
const SocialNetworkIcon = ({
  value,
  label,
  style,
  onClick,
}) => {
  const mergedStyle = Object.assign({}, styles.icon, style)
  let icon
  switch (value) {
    case 'facebook':
      icon = (<FontIcon
        style={mergedStyle}
        color="#d3d3d3"
        hoverColor={'#3b5998'}
        className="fa fa-facebook"
      />)
      break;
    case 'twitter':
      icon = (<FontIcon
        style={mergedStyle}
        color="#d3d3d3"
        hoverColor={'#1da1f2'}
        className="fa fa-twitter"
      />)
      break;
    case 'instagram':
      icon = (<FontIcon
        style={mergedStyle}
        color="#d3d3d3"
        hoverColor={'#405de6'}
        className="fa fa-instagram"
      />)
      break;
  }

  // return icon
  return (

    <IconButton tooltip={label} onClick={onClick}>
      {icon}
    </IconButton>
  )
}

export default SocialNetworkIcon
