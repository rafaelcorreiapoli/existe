import { createStore } from 'redux'
import app from '../reducers';
import projetos from '../models/projetos';
import areas from '../models/areas';
import cargos from '../models/cargos';

const store = createStore(app, window.devToolsExtension && window.devToolsExtension());

projetos.setDispatchFunction(store.dispatch)
areas.setDispatchFunction(store.dispatch)
cargos.setDispatchFunction(store.dispatch)

export default store;
