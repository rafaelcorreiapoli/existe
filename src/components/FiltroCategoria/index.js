import React, { PropTypes } from 'react'
import IconDropdown from '../IconDropdown';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';

const FiltroCategoria = ({
  value,
  style,
  ...props
}) => {
  return (
    <DropDownMenu
      value={1}
      autoWidth={false}
    >
      <MenuItem value={1} primaryText="Custom width" leftIcon={<RemoveRedEye />} />
      <MenuItem value={2} primaryText="Every Night" />
      <MenuItem value={3} primaryText="Weeknights" />
      <MenuItem value={4} primaryText="Weekends" />
      <MenuItem value={5} primaryText="Weekly" />
    </DropDownMenu>
    // <IconDropdown
    //   value={value}
    //   style={style}
    //   options={[{
    //     icon: false,
    //     text: 'EXISTE TODOS',
    //     value: 'todos'
    //   },
    //   {
    //     icon: 'info-circle',
    //     text: 'EXISTE OFICIAL',
    //     value: 'circle'
    //   },
    //   {
    //     icon: 'star',
    //     text: 'EXISTE INDEPENDENTE',
    //     value: 'independente'
    //   },
    //   {
    //     icon: 'briefcase',
    //     text: 'EXISTE EMPRESARIAL',
    //     value: 'empresarial'
    //   },
    //   {
    //     icon: 'exchange',
    //     text: 'EXISTE TROCA',
    //     value: 'troca'
    //   }]}
    //   {...props} />
    )
  }

  export default FiltroCategoria
