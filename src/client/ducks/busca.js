const BUSCAR = 'busca/BUSCAR'
const SET_TEXTO = 'busca/SET_TEXTO'
const SET_CATEGORIA = 'busca/SET_CATEGORIA'
const SET_SUBCATEGORIA = 'busca/SET_SUBCATEGORIA'
const SET_TIMES = 'busca/SET_TIMES'
const SET_ORDER = 'busca/SET_ORDER'
const SET_ENTIDADE = 'busca/SET_ENTIDADE'

import { Map, fromJS } from 'immutable'


export const getTexto = (state) => state.busca.get('texto')
export const getCategoria = (state) => state.busca.getIn(['filtros', 'categoria'])
export const getSubcategoria = (state) => state.busca.getIn(['filtros', 'subcategoria'])
export const getTimes = (state) => state.busca.getIn(['filtros', 'times'])
export const getEntidade = (state) => state.busca.get('entidade')

export const setEntidade = (entidade) => ({
  type: SET_ENTIDADE,
  payload: {
    entidade,
  },
})
export const setCategoria = (filter, value) => ({
  type: SET_CATEGORIA,
  payload: {
    filter,
    value,
  },
})

export const setSubcategoria = (filter, value) => ({
  type: SET_SUBCATEGORIA,
  payload: {
    filter,
    value,
  },
})

export const setTimes = (filter, value) => ({
  type: SET_TIMES,
  payload: {
    filter,
    value,
  },
})

export const setOrder = (order) => ({
  type: SET_ORDER,
  payload: {
    order,
  },
})

export const setTexto = (texto) => ({
  type: SET_TEXTO,
  payload: {
    texto,
  },
})

export const buscar = () =>
  (dispatch, getState, Meteor) => {
    const state = getState()
    const texto = getTexto(state)
    const categoria = getCategoria(state).toJS()
    const subcategoria = getSubcategoria(state).toJS()
    const times = getTimes(state).toJS()
    const entidade = getEntidade(state)

    console.log('realizando busca')
    console.log('texto ', texto)
    console.log('categoria ', categoria)
    console.log('subcategoria ', subcategoria)
    console.log('times ', times)
    console.log('entidade ', entidade)

    // Meteor.call('buscar', {
    //   entidade,
    //   texto,
    //   filtros,
    //   ordem,
    // }, (err, res) => {
    //   console.log(err)
    //   console.log(res)
    // })
  }

const initialState = fromJS({
  texto: '',
  filtros: {
    categoria: {
      todos: true,
      oficial: false,
      independente: false,
      empresarial: false,
      troca: false,
    },
    subcategoria: {

    },
    times: {
      produtora: false,
      agencia: false,
      coletivo: false,
      profissionaisIndependentes: false,
    },
  },
  ordem: {
    criteria: '',
    direction: 'asc',
  },
  entidade: 'videos',
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXTO:
      return state.set('texto', action.payload.texto)
    case SET_ORDER:
      return state.set('order', action.payload.order)
    case SET_CATEGORIA:
      return state.setIn(['filtros', 'categoria', action.payload.filter], action.payload.value)
    case SET_SUBCATEGORIA:
      return state.setIn(['filtros', 'subcategoria', action.payload.filter], action.payload.value)
    case SET_TIMES:
      return state.setIn(['filtros', 'times', action.payload.filter], action.payload.value)
    case SET_ENTIDADE:
      return state.set('entidade', action.payload.entidade)
    default:
      return state
  }
}
