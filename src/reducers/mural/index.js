import { combineReducers } from 'redux';
import filtros from './filtros';
import projetos from './projetos';

const mural = combineReducers({
  filtros,
  projetos
});

export default mural;
