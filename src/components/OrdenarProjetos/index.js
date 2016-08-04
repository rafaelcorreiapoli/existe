import React, { PropTypes } from 'react'
import IconDropdown from '../IconDropdown';
//import { IconDropdown, MenuItem } from 'react-bootstrap';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';

const options = [{
  icon: 'calendar-o',
  text: 'MAIS RECENTES',
  value: 'recentes'
},
{
  icon: 'line-chart',
  text: 'TRENDING',
  value: 'trending'
},
{
  icon: 'users',
  text: 'MAIS SEGUIDOS',
  value: 'seguidores'
},
{
  icon: 'heart',
  text: 'MAIS CURTIDOS',
  value: 'curtidas'
},
{
  icon: 'circle',
  text: 'COM VAGAS',
  value: 'vagas'
}];


const OrdenarProjetos = ({
  value,
  ...props
}) => {
  return (
<div>
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
</div>
    // <IconDropdown
    //   value={value}
    //   options={options}
    //   {...props} />
    )
  }

  export default OrdenarProjetos
