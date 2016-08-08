import { combineReducers } from 'redux';
import mural from './mural/index';
import collections from './collections'
import login from './login'
import criarProjeto from './criar_projeto'
const app = combineReducers({
  mural,
  collections,
  login,
  criarProjeto
});

export default app
