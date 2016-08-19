import React from 'react';
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from '../App';
import store from '../../store';
import WelcomePage from '../../pages/WelcomePage'
import CadastroRapidoPage from '../../pages/CadastroRapidoPage'
import MuralPage from '../../pages/MuralPage'
import Login from '../../containers/Login'
import RecuperarSenha from '../../containers/RecuperarSenha'

const history = syncHistoryWithStore(browserHistory, store)

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <Route component={WelcomePage}>
              <IndexRoute component={Login} />
              <Route path="recuperar-senha" component={RecuperarSenha}/>
            </Route>
            <Route path="/cadastro" component={CadastroRapidoPage} />
            <Route path="/mural" component={MuralPage} />
          </Route>

        </Router>
      </Provider>
    )
  }
}


export default Root;
