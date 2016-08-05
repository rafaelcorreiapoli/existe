import { combineReducers } from 'redux';
import projetos from '../../models/projetos';
import areas from '../../models/areas';
import cargos from '../../models/cargos';

const collections = combineReducers({
  projetos: projetos.getReducer(),
  areas: areas.getReducer(),
  cargos: cargos.getReducer()
});

export default collections
