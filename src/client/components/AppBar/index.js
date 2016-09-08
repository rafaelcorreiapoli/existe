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
    onClickAdd: PropTypes.func,
    onClickProfileLink: PropTypes.func,
    onClickHelpLink: PropTypes.func,
    onClickLogoutLink: PropTypes.func,
  }
  render() {
    const {
      onClickToggleMenu,
      onClickAdd,
      onClickProfileLink,
      onClickHelpLink,
      onClickLogoutLink,
      bots,
      onClickBot
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
              onClick={onClickProfileLink}
            />
            <Divider />
            {bots && bots.map(bot => (
              <MenuItem
                disabled={bot.selected}
                leftIcon={<Profile />}
                key={bot._id}
                primaryText={bot.nickname}
                onClick={() => onClickBot(bot._id)}
              />
            ))}
            <Divider />
            <MenuItem
              leftIcon={<Add />}
              primaryText="Novo Projeto"
              onClick={onClickAdd}
            />
            <MenuItem
              leftIcon={<Help />}
              primaryText="Ajuda"
              onClick={onClickHelpLink}
            />
            <MenuItem
              leftIcon={<Logout />}
              primaryText="Sair"
              onClick={onClickLogoutLink}
            />
          </IconMenu>
        }
      />
    )
  }
}



export default AppBar;
