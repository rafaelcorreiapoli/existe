import 'react-hot-loader/patch'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    ReactDOM.render(
      <AppContainer>
        {React.createElement(require('./components/Root').default)}
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
