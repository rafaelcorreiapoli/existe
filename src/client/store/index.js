import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers';
import { Meteor } from 'meteor/meteor'
const routerMiddleware = createRouterMiddleware(browserHistory)
const loggerMiddleware = createLogger({
  predicate: (getState, action) => !/redux-form|immutable-collection/.test(action.type),
});
import Immutable from 'immutable'


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
    thunkMiddleware.withExtraArgument(Meteor),
    loggerMiddleware,
    routerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension({
      deserializeState: (state) => {
        const cadastroEmpresarial = state.form.cadastroEmpresarial ? {
          values: {
            profile: {
              dataNascimento: new Date(state.form.cadastroEmpresarial.values.profile.dataNascimento),
              ...state.form.cadastroEmpresarial.values.profile,
            },
            ...state.form.cadastroEmpresarial.values,
          },
          ...state.form.cadastroEmpresarial,
        } : null

        const form = {}
        if (cadastroEmpresarial) {
          form.cadastroEmpresarial = cadastroEmpresarial
        }

        return {
          ...state,
          app: Immutable.fromJS(state.app),
          login: Immutable.fromJS(state.login),
          layout: Immutable.fromJS(state.layout),
          methods: Immutable.fromJS(state.methods),
          form: {
            ...form,
            ...state.form,
          },
        }
      },
    }) : f => f
  )
)

export default store;
