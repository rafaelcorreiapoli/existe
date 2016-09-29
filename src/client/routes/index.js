import React, { PropTypes } from 'react'
import { Router, IndexRoute, Route, browserHistory, IndexRedirect } from 'react-router'
import { syncHistoryWithStore, replace } from 'react-router-redux'

import AppContainer from '@containers/AppContainer';
import AuthenticatedLayout from '@components/AuthenticatedLayout'
import GuestLayout from '@components/GuestLayout'
import WelcomePage from '@pages/WelcomePage'
import RecuperarSenha from '@containers/RecuperarSenha'
import Login from '@containers/Login'
import BuscaPage from '@pages/BuscaPage'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { clearLogoutRequest } from '@ducks/login'
import CadastroRapidoPage from '@pages/CadastroRapidoPage'
import NovoProjetoPage from '@pages/NovoProjetoPage'
import CadastroEmpresarialPage from '@pages/CadastroEmpresarialPage'
import AtualizarCadastroPessoalPage from '@pages/AtualizarCadastroPessoalPage'
import ComunidadePage from '@pages/ComunidadePage'
import ProducoesPage from '@pages/ProducoesPage'
import MuralPage from '@pages/MuralPage'
import GuiaDePrecosPage from '@pages/GuiaDePrecosPage'
import * as Usuario from '@components/Usuario'
import UsuarioPage from '@pages/UsuarioPage'
import * as Perfil from '@components/Perfil'
import PerfilPage from '@pages/PerfilPage'
import * as Avaliacoes from '@components/Perfil/Avaliacoes'
import * as Notificacoes from '@components/Perfil/Notificacoes'
import * as Seguindo from '@components/Perfil/Seguindo'

// import Colaborando from '@components/Perfil/Colaborando'
import Favoritos from '@components/Perfil/Favoritos'
// import Historico from '@components/Perfil/Historico'
import * as Salvos from '@components/Perfil/Salvos'
// import Seguidores from '@components/Perfil/Seguidores'

import store from '../store'

const Loading = ({
  children
}) => {
  return (
    <div>
      User is authenticating...
    </div>
  )
}
Loading.propTypes = {
  children: PropTypes.node,
}

const userIsAuthenticated = UserAuthWrapper({
  wrapperDisplayName: 'UserIsAuthenticated',
  authSelector: state => state.user.user,
  authenticatingSelector: state => !state.login.get('isMeteorUserFetched'),
  LoadingComponent: Loading,
  redirectAction: newLoc => (dispatch, getState) => {
    //  se o usuário clicou no botão de logout, vou mandá-lo para a tela de login sem o redirect
    const state = getState()
    if (state.login.get('logoutRequest')) {
      delete newLoc.query.redirect
    }
    dispatch(clearLogoutRequest());
    dispatch(replace(newLoc))
  },
})

const Routes = () => (
  <Router history={syncHistoryWithStore(browserHistory, store)}>
    <Route path="/" component={AppContainer}>
      <Route component={userIsAuthenticated(AuthenticatedLayout)}>
        <IndexRoute component={BuscaPage} />
        <Route path="atualizar-cadastro-pessoal" component={AtualizarCadastroPessoalPage} />

        <Route path="/comunidade" component={ComunidadePage} />
        <Route path="/producoes" component={ProducoesPage} />
        <Route path="/mural" component={MuralPage} />
        <Route path="/guia-de-precos" component={GuiaDePrecosPage} />


        <Route path="/perfil" component={PerfilPage}>
          <IndexRedirect to="seguindo" />

          <Route path={"seguindo"} component={Perfil.Seguindo} teste="x">
            <IndexRedirect to="feed" />
            <Route path="feed" component={Seguindo.Feed} />
            <Route path="projetos" component={Seguindo.Projetos} />
            <Route path="pessoas" component={Seguindo.Pessoas} />
          </Route>

          <Route path={"notificacoes"} component={Perfil.Notificacoes}>
            <IndexRedirect to="marcacoes" />
            <Route path="marcacoes" component={Notificacoes.Marcacoes} />
            <Route path="convites" component={Notificacoes.Convites} />
          </Route>

          <Route path={"projetos/:filtro"} component={Perfil.Projetos}>
            {/* <IndexRedirect to="meus" /> */}
            {/* <Route path={"meus"} component={PerfilProjetos} />
            <Route path={"marcacoes"} component={PerfilProjetos} />
            <Route path={"convites"} component={PerfilProjetos} /> */}
            {/* <IndexRedirect to="marcacoes" />
            <Route path="marcacoes" component={Notificacoes.Marcacoes} />
            <Route path="convites" component={Notificacoes.Convites} /> */}
          </Route>

          <Route path={"seguidores"} component={Perfil.Seguidores}>
            {/* <IndexRedirect to="marcacoes" />
            <Route path="marcacoes" component={Notificacoes.Marcacoes} />
            <Route path="convites" component={Notificacoes.Convites} /> */}
          </Route>
          <Route path={"salvos"} component={Perfil.Salvos}>
            <IndexRedirect to="videos" />
            <Route path="videos" component={Salvos.Videos} />
            <Route path="projetos" component={Salvos.Projetos} />
            <Route path="perfis" component={Salvos.Perfis} />
          </Route>

          <Route path={"historico"} component={Perfil.Historico} />


          <Route path={"avaliacoes"} component={Perfil.Avaliacoes}>
            <IndexRedirect to="recebidas" />
            <Route path="recebidas" component={Avaliacoes.Recebidas} />
            <Route path="feitas" component={Avaliacoes.Feitas} />
          </Route>

          {/* <Route path={"favoritos"} component={Perfil.Favoritos}>
            <IndexRedirect to="videos" />
            <Route path="videos" component={Favoritos.Videos} />
            <Route path="projetos" component={Favoritos.Projetos} />
          </Route>

          <Route path={"seguidores"} component={Perfil.Seguidores} />
          <Route path={"colaborando"} component={Perfil.Colaborando} /> */}
          <Route path={"editar"} component={Perfil.Editar} />
        </Route>

        <Route path="/usuario/:userId" component={UsuarioPage}>
          <IndexRedirect to="info" />
          <Route path="info" component={Usuario.Info} />
          <Route path="portfolio" component={Usuario.Portfolio} />
          <Route path="experiencia" component={Usuario.Experiencia} />
          <Route path="funcoes" component={Usuario.Funcoes} />
          <Route path="historico" component={Usuario.Historico} />
          <Route path="avaliacoes" component={Usuario.Avaliacoes} />
          <Route path="seguidores" component={Usuario.Seguidores} />
        </Route>

        <Route path="/novo-projeto" component={NovoProjetoPage} />
      </Route>

      <Route component={GuestLayout}>
        <Route component={WelcomePage}>
          <Route path="/login" component={Login} />
          <Route path="/recuperar-senha" component={RecuperarSenha} />
        </Route>
        <Route path="cadastro">
          <IndexRoute component={CadastroRapidoPage} />
          <Route path="empresarial" component={CadastroEmpresarialPage} />
        </Route>
      </Route>
    </Route>



      {/* <Route component={Authenticated}>
        <Route component={AuthenticatedLayout}>
          <Route path="/completar-cadastro">
            <Route path="pessoal" component={AtualizarCadastroPessoalPage}/>
          </Route>

          <Route path="/mural" component={MuralPage} />
          <Route path="/comunidade" component={ComunidadePage} />
          <Route path="/busca" component={BuscaPage} />
          <Route path="/usuario/:userId" component={UsuarioPage}>
            <IndexRedirect to="info" />
            <Route path="info" component={Usuario.Info} />
            <Route path="portfolio" component={Usuario.Portfolio} />
            <Route path="experiencia" component={Usuario.Experiencia} />
            <Route path="funcoes" component={Usuario.Funcoes} />
            <Route path="historico" component={Usuario.Historico} />
            <Route path="avaliacoes" component={Usuario.Avaliacoes} />
            <Route path="seguidores" component={Usuario.Seguidores} />
          </Route>
          <Route path="/perfil" component={PerfilPage}>
            <IndexRedirect to="notificacoes" />
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
        {/*
    <Route path="/" component={AppContainer}>
      <Route component={userIsAuthenticated(AuthenticatedLayout)}>
        <IndexRoute component={Welcome} />
      </Route>
      <Route path="login" component={LoginScreen} />
    </Route> */}
  </Router>
)

export default Routes
