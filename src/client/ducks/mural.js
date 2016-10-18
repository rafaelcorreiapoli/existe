export const SET_FILTRO_FUNCAO = 'mural/SET_FILTRO_FUNCAO'
export const SET_FILTRO_CATEGORIA = 'mural/SET_FILTRO_CATEGORIA'
export const SET_FILTRO_SUBCATEGORIA = 'mural/SET_FILTRO_SUBCATEGORIA'
export const SET_FILTRO_ORDEM = 'mural/SET_FILTRO_ORDEM'
export const SET_FILTRO_STATUS = 'mural/SET_FILTRO_STATUS'

const initialState = {
  categoria: undefined,
  subcategoria: undefined,
  ordem: 'recentes',
  status: undefined,
  funcao: undefined,
}
export function setFiltroSubCategoria(subcategoria) {
  return {
    type: SET_FILTRO_SUBCATEGORIA,
    payload: {
      subcategoria,
    },
  }
}

export function setFiltroCategoria(categoria) {
  return {
    type: SET_FILTRO_CATEGORIA,
    payload: {
      categoria,
    },
  }
}

export function setFiltroOrdem(ordem) {
  return {
    type: SET_FILTRO_ORDEM,
    payload: {
      ordem,
    },
  }
}

export function setFiltroStatus(status) {
  return {
    type: SET_FILTRO_STATUS,
    payload: {
      status,
    },
  }
}

export function setFiltroFuncao(funcao) {
  return {
    type: SET_FILTRO_FUNCAO,
    payload: {
      funcao,
    },
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTRO_FUNCAO:
      return {
        ...state,
        funcao: action.payload.funcao,
      }
    case SET_FILTRO_CATEGORIA:
      return {
        ...state,
        categoria: action.payload.categoria,
        subcategoria: undefined,
      }
    case SET_FILTRO_SUBCATEGORIA:
      return {
        ...state,
        subcategoria: action.payload.subcategoria,
      }
    case SET_FILTRO_ORDEM:
      return {
        ...state,
        ordem: action.payload.ordem,
      }
    case SET_FILTRO_STATUS:
      return {
        ...state,
        status: action.payload.status,
      }
    default:
      return state
  }
}
