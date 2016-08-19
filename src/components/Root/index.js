import React from 'react';
import { Provider } from 'react-redux'
import store from '../../store';
import Routes from '../../routes'

import './style.css'

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}


export default Root;
