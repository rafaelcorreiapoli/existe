import React, { PropTypes } from 'react'
import ButtonPopover from '@components/ButtonPopover';
import { FILTRO_CATEGORIAS } from '@resources/options'
import FlatButton from 'material-ui/FlatButton'
import { ACCENT } from '@resources/colors'

const SelecionarCategoria = ({
  value,
  onChange,
  style,
  ...props,
}) => {
  return (
    <ButtonPopover
      labelColor={ACCENT}
      customButton={FlatButton}
      style={style}
      onChange={onChange}
      defaultText={'CATEGORIAS'}
      value={value}
      options={FILTRO_CATEGORIAS}
      {...props}
    />
  )
}

export default SelecionarCategoria
