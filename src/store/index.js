import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import app from '../reducers';
import projetos from '../models/projetos';
import areas from '../models/areas';
import cargos from '../models/cargos';

const routerMiddleware = createRouterMiddleware(browserHistory)
const loggerMiddleware = createLogger({
  predicate: (getState, action) => !/redux-form|immutable-collection/.test(action.type)
});
const store = createStore(
  app,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
    routerMiddleware
  )
)



projetos.setDispatchFunction(store.dispatch)
areas.setDispatchFunction(store.dispatch)
cargos.setDispatchFunction(store.dispatch)

window.store= store;
export default store;
