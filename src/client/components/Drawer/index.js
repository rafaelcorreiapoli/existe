import React, { PropTypes } from 'react'
import { Drawer as MUDrawer, MenuItem } from 'material-ui';
import {
  Add, Facebook, Instagram
} from '@resources/icons'

class Drawer extends React.Component {
  static propTypes = {
    onClickAdd: PropTypes.func,
    onChangeDrawerState: PropTypes.func,
    drawerOpen: PropTypes.bool.isRequired,
    navigate: PropTypes.func,
  }

  render() {
    const {
      onClickAdd,
      drawerOpen,
      onChangeDrawerState,
      navigate,
    } = this.props

    return (
      <MUDrawer
        docked={false}
        open={drawerOpen}
        onRequestChange={(open) => onChangeDrawerState(open)}
      >
        <MenuItem
          leftIcon={<Add />}
          onClick={() => navigate('comunidade')}
        >
          COMUNIDADE
        </MenuItem>
        <MenuItem
          leftIcon={<Add />}
          onClick={() => navigate('producoes')}
        >
          PRODUÇÕES
        </MenuItem>
        <MenuItem
          leftIcon={<Add />}
          onClick={() => navigate('mural')}
        >
          MURAL
        </MenuItem>
        <MenuItem
          leftIcon={<Add />}
          onClick={() => navigate('guia-de-precos')}
        >
          GUIA DE PREÇOS
        </MenuItem>
        <MenuItem
          leftIcon={<Facebook />}
          onClick={() => navigate('facebook')}
        >
          FACEBOOK
        </MenuItem>
        <MenuItem
          leftIcon={<Instagram />}
          onClick={() => navigate('instagram')}
        >
          INSTAGRAM
        </MenuItem>
      </MUDrawer>
    )
  }
}

export default Drawer
