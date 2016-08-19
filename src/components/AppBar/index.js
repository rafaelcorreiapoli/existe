import React from 'react';
import {
  AppBar as MUIAppBar,
  IconButton,
  MenuItem,
  Divider
} from 'material-ui'
import IconMenu from 'material-ui/IconMenu'
import { Menu, Adicionar, Logout, Ajuda, Perfil } from '../../resources/icons'

const AppBar = ({
  onClickToggleMenu
}) => (
  <MUIAppBar
    titleStyle={{
      textAlign: 'center'
    }}
    title="EXISTE"
    style={{color: 'black'}}
    onLeftIconButtonTouchTap={onClickToggleMenu}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><Menu /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem leftIcon={<Perfil />} primaryText="Perfil" />
        <Divider />
        <MenuItem leftIcon={<Adicionar />} primaryText="Novo projeto" />
        <MenuItem leftIcon={<Ajuda />} primaryText="Ajuda" />
        <MenuItem leftIcon={<Logout />} primaryText="Sair" />
      </IconMenu>
    }
  />
)


export default AppBar;
