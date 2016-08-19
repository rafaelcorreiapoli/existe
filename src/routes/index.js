import React, { PropTypes } from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from '../containers/AppContainer';
import WelcomePage from '../pages/WelcomePage'
import CadastroRapidoPage from '../pages/CadastroRapidoPage'
import MuralPage from '../pages/MuralPage'
import BuscaPage from '../pages/BuscaPage'
import NovoProjetoPage from '../pages/NovoProjetoPage'
import PerfilPage from '../pages/PerfilPage'
import ComunidadePage from '../pages/ComunidadePage'
import Login from '../containers/Login'
import RecuperarSenha from '../containers/RecuperarSenha'

const history = syncHistoryWithStore(browserHistory, store)

const Routes = () => {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route component={WelcomePage}>
          <IndexRoute component={Login} />
          <Route path="recuperar-senha" component={RecuperarSenha}/>
        </Route>
        <Route path="/cadastro" component={CadastroRapidoPage} />
        <Route path="/mural" component={MuralPage} />
        <Route path="/comunidade" component={ComunidadePage} />
        <Route path="/busca" component={BuscaPage} />
        <Route path="/perfil" component={PerfilPage} />
        <Route path="/novo-projeto" component={NovoProjetoPage} />
      </Route>
    </Router>
  )
}

export default Routes
