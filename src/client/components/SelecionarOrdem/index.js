import React, { PropTypes } from 'react'
import ButtonPopover from '@components/ButtonPopover'
import { FILTRO_ORDEM } from '@resources/options'

const SelecionarOrdem = ({
  value,
  onChange,
}) => {
  return (
    <ButtonPopover
      onChange={onChange}
      defaultText={'ORDENAR POR'}
      value={value}
      options={FILTRO_ORDEM}
    />
  )
}

export default SelecionarOrdem
