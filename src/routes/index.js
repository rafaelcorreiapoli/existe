import React, { PropTypes } from 'react'
import { Router, IndexRoute, Route, browserHistory, IndexRedirect } from 'react-router'
import { syncHistoryWithStore, routerActions, replace } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'

import App from '../containers/AppContainer';
import AuthenticatedLayout from '../components/AuthenticatedLayout';
import WelcomePage from '../pages/WelcomePage'
import CadastroRapidoPage from '../pages/CadastroRapidoPage'
import MuralPage from '../pages/MuralPage'
import BuscaPage from '../pages/BuscaPage'
import NovoProjetoPage from '../pages/NovoProjetoPage'
import CadastroEmpresarialPage from '../pages/CadastroEmpresarialPage'
import CadastroPessoalPage from '../pages/CadastroPessoalPage'
//import PerfilPage from '../pages/PerfilPage'
import ComunidadePage from '../pages/ComunidadePage'
import Login from '../containers/Login'
import RecuperarSenha from '../containers/RecuperarSenha'
import OAuth from '../components/OAuth'
import { clearLogoutRequest } from '../ducks/ddp/user'


import PerfilPage, * as Perfil  from '../components/Perfil'
import * as Avaliacoes from '../components/Perfil/Avaliacoes'
import * as Notificacoes from '../components/Perfil/Notificacoes'
import * as Seguindo from '../components/Perfil/Seguindo'
import Colaborando from '../components/Perfil/Colaborando'
import Favoritos from '../components/Perfil/Favoritos'
import Historico from '../components/Perfil/Historico'
import Salvos from '../components/Perfil/Salvos'
import Seguidores from '../components/Perfil/Seguidores'

const Loading = ({
  children
}) => {
  return (
    <div>
      Im loading!
    </div>
  )
}
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.ddp.user.get('loggedIn') ? {userId: state.ddp.user.get('userId') } : null, // how to get the user state
  authenticatingSelector: state => state.ddp.user.get('loggingIn'),
  LoadingComponent: Loading,
  redirectAction: newLoc => (dispatch, getState) => {
    //  se o usuário clicou no botão de logout, vou mandá-lo para a tela de login sem o redirect
    const state = getState()
    if (state.ddp.user.get('logoutRequest')){
      delete newLoc.query.redirect
    }
    dispatch(clearLogoutRequest());
    dispatch(replace(newLoc))
  },
  wrapperDisplayName: 'UserIsAuthenticated'
})

const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => !state.ddp.user.get('loggedIn') ? {userId: state.ddp.user.get('userId')} : null , // how to get the user state
  authenticatingSelector: state => state.ddp.user.get('loggingIn'),
  allowRedirectBack: false,
  failureRedirectPath: 'busca',
  wrapperDisplayName: 'UserIsNotAuthenticated'
})

const NotAuthenticated = UserIsNotAuthenticated(props => props.children)
const Authenticated = UserIsAuthenticated(props => props.children)

const Routes = () => {
  return (
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path="/_oauth/:provider" component={OAuth} />
      <Route path="/" component={App}>
        <Route component={NotAuthenticated}>
          <Route component={WelcomePage}>
            <Route path="/login" component={Login} />
            <Route path="/recuperar-senha" component={RecuperarSenha}/>
          </Route>


          <Route path="/cadastro">
            <IndexRoute component={CadastroRapidoPage} />
            <Route path="pessoal" component={CadastroPessoalPage}/>
            <Route path="empresarial" component={CadastroEmpresarialPage}/>
          </Route>
        </Route>

        <Route component={Authenticated}>
          <Route component={AuthenticatedLayout}>
            <Route path="/mural" component={MuralPage} />
            <Route path="/comunidade" component={ComunidadePage} />
            <Route path="/busca" component={BuscaPage} />
            <Route path="/perfil" component={PerfilPage}>
              <Route path={"notificacoes"} component={Perfil.Notificacoes}>
                <IndexRedirect to="marcacoes" />
                <Route path="marcacoes" component={Notificacoes.Marcacoes} />
                <Route path="convites" component={Notificacoes.Convites} />
              </Route>
              <Route path={"avaliacoes"} component={Perfil.Avaliacoes}>
                <IndexRedirect to="recebidas" />
                <Route path="recebidas" component={Avaliacoes.Recebidas} />
                <Route path="feitas" component={Avaliacoes.Feitas} />
              </Route>
              <Route path={"seguindo"} component={Perfil.Seguindo} teste="x">
                <IndexRedirect to="feed" />
                <Route path="feed" component={Seguindo.Feed} />
                <Route path="projetos" component={Seguindo.Projetos} />
                <Route path="pessoas" component={Seguindo.Pessoas} />
              </Route>
              <Route path={"salvos"} component={Perfil.Salvos}>
                <IndexRedirect to="videos" />
                <Route path="videos" component={Salvos.Videos} />
                <Route path="projetos" component={Salvos.Projetos} />
              </Route>
              <Route path={"favoritos"} component={Perfil.Favoritos}>
                <IndexRedirect to="videos" />
                <Route path="videos" component={Favoritos.Videos} />
                <Route path="projetos" component={Favoritos.Projetos} />
              </Route>
              <Route path={"historico"} component={Perfil.Historico} />
              <Route path={"seguidores"} component={Perfil.Seguidores} />
              <Route path={"colaborando"} component={Perfil.Colaborando} />
              <Route path={"editar"} component={Perfil.Editar} />
            </Route>
            <Route path="/novo-projeto" component={NovoProjetoPage} />
          </Route>
        </Route>
      </Route>
    </Router>
  )
}

export default Routes
