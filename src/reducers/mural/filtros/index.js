import { combineReducers } from 'redux';
import categoria from './categoria';
import area from './area';
import ordem from './ordem';
import status from './status';

const filtros = combineReducers({
  categoria,
  area,
  ordem,
  status
});

export default filtros
