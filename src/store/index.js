import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers';
import asteroid from '../asteroid'
const routerMiddleware = createRouterMiddleware(browserHistory)
const loggerMiddleware = createLogger({
  predicate: (getState, action) => !/redux-form|immutable-collection|ddp/.test(action.type)
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
    thunkMiddleware.withExtraArgument(asteroid),
    loggerMiddleware,
    routerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
window.store = store;
export default store;
