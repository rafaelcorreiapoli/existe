import { combineReducers } from 'redux';
import mural from './mural/index';
import collections from './collections'
import login from './login'
import criarProjeto from './criar_projeto'
import {reducer as form} from 'redux-form';
import VMasker from 'vanilla-masker';


const app = combineReducers({
  mural,
  collections,
  login,
  criarProjeto,
  form
});

// : form.normalize({
//   cadastroPessoal: {
//     telefone,
//     celular,
//     cpf
//   }
// })

export default app
