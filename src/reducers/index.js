import { combineReducers } from 'redux';
import mural from './mural/index';
import login from './login'
import app from './app'
import criarProjeto from './criar_projeto'
import ddp from '../ducks/ddp'

import { reducer as formReducer} from 'redux-form';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  app,
  mural,
  login,
  ddp,
  form: formReducer,
  routing: routerReducer
});


export default rootReducer
