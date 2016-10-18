import {
  call,
} from '@ducks/methods'
import { Map, List } from 'immutable'
import { Random } from 'meteor/random'

const SET_TEXTO = 'buscaUsuario/SET_TEXTO'
const SET_USUARIOS = 'buscaUsuarios/SET_USUARIOS'
const SET_ERROR = 'buscaUsuarios/SET_ERROR'
const UNREGISTER = 'buscaUsuarios/UNREGISTER'
const REGISTER = 'buscaUsuarios/REGISTER'

export const getUsuarios = (state, searchId) => state.buscaUsuario.getIn([searchId, 'usuarios'])
export const getTexto = (state, searchId) => state.buscaUsuario.getIn([searchId, 'texto'])
export const getError = (state, searchId) => state.buscaUsuario.getIn([searchId, 'error'])

export const register = (type) => {
  const searchId = Random.id()
  return {
    type: REGISTER,
    payload: {
      searchId,
      type,
    },
  }
}

export const unregister = searchId => ({
  type: UNREGISTER,
  payload: {
    searchId,
  },
})


export const setUsuarios = (searchId, usuarios) => ({
  type: SET_USUARIOS,
  payload: {
    searchId,
    usuarios,
  },
})

export const setTexto = (searchId, texto) => ({
  type: SET_TEXTO,
  payload: {
    searchId,
    texto,
  },
})

export const setError = (searchId, error) => ({
  type: SET_ERROR,
  payload: {
    error,
  },
})

export const realizarBusca = searchId => (dispatch, getState) => {
  const state = getState()
  const texto = getTexto(state, searchId)
  dispatch(call('Users.search', { texto }))
  .then((res) => {
    dispatch(setUsuarios(searchId, res.slice(0, 10).map(usuario => ({
      _id: usuario._id,
      email: usuario.profile.email,
      nomeCompleto: usuario.profile.nomeCompleto,
    }))))
  })
  .catch((err) => {
    dispatch(setError(searchId, err))
  })
}

const searchShape = {
  texto: '',
  usuarios: [],
  error: false,
}

const initialState = Map({

})

export default (state = initialState, action) => {
  if (!action.payload || !action.payload.searchId) return state
  const {
    searchId,
  } = action.payload

  switch (action.type) {
    case REGISTER:
      if (action.payload.type === 'array') {
        return state.set(searchId, List([]))
      } else {
        return state.set(searchId, Map(searchShape))
      }
    case UNREGISTER:
      return state.delete(searchId)
    case SET_ERROR:
      return state.setIn([searchId, 'error'], action.payload.error)
    case SET_TEXTO:
      return state.setIn([searchId, 'texto'], action.payload.texto)
    case SET_USUARIOS:
      return state.setIn([searchId, 'usuarios'], action.payload.usuarios)
    default:
      return state
  }
}
