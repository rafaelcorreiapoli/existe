import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from '../Drawer'
import AppBar from '../AppBar';
import muiTheme from '../../config/theme'

const App = ({
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
    <MuiThemeProvider muiTheme={muiTheme}>
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
    </MuiThemeProvider>
  )
}

export default App
