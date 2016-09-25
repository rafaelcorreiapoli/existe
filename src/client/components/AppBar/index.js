import React, { PropTypes } from 'react';
import {
  AppBar as MUIAppBar,
  IconButton,
  MenuItem,
  Divider,
} from 'material-ui'
import IconMenu from 'material-ui/IconMenu'
import { Menu, Add, Logout, Help, Profile } from '@resources/icons'

class AppBar extends React.Component {
  static propTypes = {
    onClickToggleMenu: PropTypes.func,
    logout: PropTypes.func,
    navigate: PropTypes.func,
  }
  render() {
    const {
      onClickToggleMenu,
      logout,
      navigate,
    } = this.props
    return (
      <MUIAppBar
        titleStyle={{
          textAlign: 'center',
        }}
        title="EXISTE"
        style={{ color: 'black' }}
        onLeftIconButtonTouchTap={onClickToggleMenu}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><Menu /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem
              leftIcon={<Profile />}
              primaryText="Perfil"
              onClick={() => navigate('perfil')}
            />
            <Divider />
            <MenuItem
              leftIcon={<Add />}
              primaryText="Projetos"
              onClick={() => navigate('meus-projetos')}
            />
            <MenuItem
              leftIcon={<Add />}
              primaryText="Novo Projeto"
              onClick={() => navigate('novo-projeto')}
            />
            <MenuItem
              leftIcon={<Help />}
              primaryText="Ajuda"
              onClick={() => navigate('ajuda')}
            />
            <MenuItem
              leftIcon={<Logout />}
              primaryText="Sair"
              onClick={logout}
            />
          </IconMenu>
        }
      />
    )
  }
}



export default AppBar;
