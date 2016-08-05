import React, { PropTypes } from 'react'
import ButtonPopover from '../ButtonPopover'
import { Data, Trending, Usuarios, ComVagas, Likes } from '../../resources/icons';

const options = [{
  icon: <Data />,
  text: 'MAIS RECENTES',
  value: 'recentes'
},
{
  icon: <Trending />,
  text: 'TRENDING',
  value: 'trending'
},
{
  icon: <Usuarios />,
  text: 'MAIS SEGUIDOS',
  value: 'seguidores'
},
{
  icon: <Likes />,
  text: 'MAIS CURTIDOS',
  value: 'curtidas'
},
{
  icon: <ComVagas />,
  text: 'COM VAGAS',
  value: 'vagas'
}];


const SelecionarOrdem = ({
  value,
  onChange
}) => {
  return (
    <ButtonPopover
      onChange={onChange}
      defaultText={'ORDENAR POR'}
      value={value}
      options={options} />
  )
}

export default SelecionarOrdem
