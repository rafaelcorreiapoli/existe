import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../config/theme'

const App = ({
  children,
  loggingIn
}) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      {
          children
      }
    </MuiThemeProvider>
  )
}

export default App
