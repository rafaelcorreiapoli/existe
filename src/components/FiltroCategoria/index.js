import React, { PropTypes } from 'react'
import IconDropdown from '../IconDropdown';

const FiltroCategoria = ({
  value,
  ...props
}) => {
  return (
    <IconDropdown
      value={value}
      options={[{
        icon: false,
        text: 'EXISTE TODOS',
        value: 'todos'
      },
      {
        icon: 'info-circle',
        text: 'EXISTE OFICIAL',
        value: 'circle'
      },
      {
        icon: 'star',
        text: 'EXISTE INDEPENDENTE',
        value: 'independente'
      },
      {
        icon: 'briefcase',
        text: 'EXISTE EMPRESARIAL',
        value: 'empresarial'
      },
      {
        icon: 'exchange',
        text: 'EXISTE TROCA',
        value: 'troca'
      }]}
      {...props} />
    )
  }

  export default FiltroCategoria
