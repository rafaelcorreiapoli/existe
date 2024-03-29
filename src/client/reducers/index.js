import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import counter from '@ducks/counter'
import methods from '@ducks/methods'
import login from '@ducks/login'
import layout from '@ducks/layout'
import user from '@ducks/user'
import mural from '@ducks/mural'
import busca from '@ducks/busca'
import buscaUsuario from '@ducks/buscaUsuario'
import comunidade from '@ducks/comunidade'

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  methods,
  counter,
  login,
  layout,
  user,
  mural,
  busca,
  buscaUsuario,
  comunidade
});

export default rootReducer
