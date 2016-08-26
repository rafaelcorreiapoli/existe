import React, { PropTypes } from 'react'
import Drawer from '../Drawer'
import AppBar from '../AppBar';

const Authenticated = ({
  onClickBuscaLink,
  onClickComunidadeLink,
  onClickMuralLink,
  onChangeDrawerState,
  onClickPerfilLink,
  onClickNovoProjetoLink,
  onClickAjudaLink,
  onClickSairLink,
  drawerOpen,
  children
}) => {
  return (
    <div>
      <Drawer
        onClickBuscaLink={onClickBuscaLink}
        onClickComunidadeLink={onClickComunidadeLink}
        onClickMuralLink={onClickMuralLink}
        onChangeDrawerState={onChangeDrawerState}
        drawerOpen={drawerOpen}
      />
      <AppBar
        onClickToggleMenu={() => onChangeDrawerState(true)}
        onClickPerfilLink={onClickPerfilLink}
        onClickNovoProjetoLink={onClickNovoProjetoLink}
        onClickAjudaLink={onClickAjudaLink}
        onClickSairLink={onClickSairLink}
      />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Authenticated
