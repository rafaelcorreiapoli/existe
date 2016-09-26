import React, { PropTypes } from 'react'
import ButtonPopover from '@components/ButtonPopover';
import FlatButton from 'material-ui/FlatButton';
import { AREAS_E_FUNCOES } from '@resources/options'
import getIcon from '@utils/get_icon'

const opt = AREAS_E_FUNCOES.map(area => {
  return {
    value: area.value,
    label: area.label,
    icon: getIcon(area.value, true),
    noAction: true,
    menuItems: area.funcoes,
  }
})

const SelecionarArea = ({
  value,
  onChange,
  style,
  ...props,
}) => {
  return (
    <ButtonPopover
      style={style}
      customButton={FlatButton}
      customButtonStyle={{ width: 300, height: 72 }}
      defaultText={'FILTRAR POR ÁREA'}
      options={opt}
      onChange={onChange}
      value={value}
      {...props}
    />
  )
}

export default SelecionarArea
