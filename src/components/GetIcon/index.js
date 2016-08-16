import React, { PropTypes } from 'react'
import { Texto,
Imagem,
Audio,
Cena,
Producao } from '../../resources/icons'
import { getColorForArea } from '../../utils/get_color'

const GetIcon = ({
  area,
  style,
  defaultColor,
  color,
  ...props
}) => {
  let finalColor;
  console.log(props)

  let iconClass;
  if (defaultColor !== true) {
    finalColor = getColorForArea(area)
  } else {
    finalColor = color
  }
  const ownStyle = {}

  const mergedStyles = Object.assign({}, style, ownStyle)
  switch (area) {
    case 'texto': iconClass = Texto; break;
    case 'imagem': iconClass = Imagem; break;
    case 'audio': iconClass = Audio; break;
    case 'cena': iconClass = Cena; break;
    case 'producao': iconClass = Producao; break;
    default: return <span />
  }

  return React.createElement(iconClass, {
    style: mergedStyles,
    color: finalColor,
    ...props
  })
}

export default GetIcon
