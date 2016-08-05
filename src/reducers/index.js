import { combineReducers } from 'redux';
import mural from './mural/index';
import collections from './collections'
const app = combineReducers({
  mural,
  collections
});

export default app
