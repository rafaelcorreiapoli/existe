import React, { PropTypes } from 'react'
import ButtonPopover from '@components/ButtonPopover';
import { FILTRO_CATEGORIAS } from '@resources/options'

const SelecionarCategoria = ({
  value,
  onChange,
  style,
  ...props,
}) => {
  return (
    <ButtonPopover
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
