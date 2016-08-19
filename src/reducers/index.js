import { combineReducers } from 'redux';
import mural from './mural/index';
import collections from './collections'
import login from './login'
import criarProjeto from './criar_projeto'
import { reducer as formReducer} from 'redux-form';
import { routerReducer } from 'react-router-redux'

const app = combineReducers({
  mural,
  collections,
  login,
  criarProjeto,
  form: formReducer,
  routing: routerReducer
});


export default app
