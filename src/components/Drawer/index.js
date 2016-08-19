import React, { PropTypes } from 'react'
import { Drawer as MUDrawer, MenuItem } from 'material-ui';
import {
  Todos,
  Busca
} from '../../resources/icons'

const Drawer = ({
  onClickBuscaLink,
  onClickComunidadeLink,
  onClickMuralLink,
  onChangeDrawerState,
  drawerOpen
}) => {
  return (
    <MUDrawer docked={false} open={drawerOpen} onRequestChange={(open) => onChangeDrawerState(open)}>
      <MenuItem leftIcon={<Busca />} onClick={onClickBuscaLink}>Busca</MenuItem>
      <MenuItem leftIcon={<Todos />} onClick={onClickComunidadeLink}>Comunidade</MenuItem>
      <MenuItem leftIcon={<Todos />}  onClick={onClickMuralLink}>Mural</MenuItem>
    </MUDrawer>
  )
}

export default Drawer
