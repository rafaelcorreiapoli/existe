import React from 'react';
import {
  AppBar as MUIAppBar,
  IconButton,
  MenuItem,
  Divider
} from 'material-ui'
import IconMenu from 'material-ui/IconMenu'
import { Menu, Adicionar, Logout, Ajuda, Perfil } from '../../resources/icons'
import { Link } from 'react-router'
const AppBar = ({
  onChangeDrawerState,
  onClickPerfilLink,
  onClickNovoProjetoLink,
  onClickAjudaLink,
  onClickSairLink
}) => (
  <MUIAppBar
    titleStyle={{
      textAlign: 'center'
    }}
    title="EXISTE"
    style={{color: 'black'}}
    onLeftIconButtonTouchTap={() => onChangeDrawerState(true)}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><Menu /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem leftIcon={<Perfil />} primaryText="Perfil" onClick={onClickPerfilLink} />
        <Divider />
        <MenuItem leftIcon={<Adicionar />} primaryText="Novo projeto" onClick={onClickNovoProjetoLink} />
        <MenuItem leftIcon={<Ajuda />} primaryText="Ajuda" onClick={onClickAjudaLink} />
        <MenuItem leftIcon={<Logout />} primaryText="Sair" onClick={onClickSairLink} />
      </IconMenu>
    }
  />
)


export default AppBar;
