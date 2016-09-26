export const SET_FILTRO_AREA = 'mural/SET_FILTRO_AREA'
export const SET_FILTRO_CATEGORIA = 'mural/SET_FILTRO_CATEGORIA'
export const SET_FILTRO_ORDEM = 'mural/SET_FILTRO_ORDEM'
export const SET_FILTRO_STATUS = 'mural/SET_FILTRO_STATUS'

const initialState = {
  categoria: '',
  ordem: '',
  status: '',
  area: '',
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

export function setFiltroArea(area) {
  return {
    type: SET_FILTRO_AREA,
    payload: {
      area,
    },
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTRO_AREA:
      return {
        ...state,
        area: action.payload.area,
      }
    case SET_FILTRO_CATEGORIA:
      return {
        ...state,
        categoria: action.payload.categoria,
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
