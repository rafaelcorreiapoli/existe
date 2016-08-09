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
  form: form.normalize({
    cadastroPessoal: {
      telefone: value => value && VMasker.toPattern(value, '(99)9999-9999'),
      celular: value => value && VMasker.toPattern(value, '(99)99999-99'),
      cpf: value => value && VMasker.toPattern(value, '999.999.999-99'),
    }
  })
});

export default app
