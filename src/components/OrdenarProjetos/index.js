import React, { PropTypes } from 'react'
import IconDropdown from '../IconDropdown';
//import { IconDropdown, MenuItem } from 'react-bootstrap';

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
    <IconDropdown
      value={value}
      options={options}
      {...props} />
    )
  }

  export default OrdenarProjetos
