export const SET_FILTRO_AREA = 'mural/SET_FILTRO_AREA'
export const SET_FILTRO_CATEGORIA = 'mural/SET_FILTRO_CATEGORIA'
export const SET_FILTRO_ORDEM = 'mural/SET_FILTRO_ORDEM'
export const SET_FILTRO_STATUS = 'mural/SET_FILTRO_STATUS'

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

export default (state, action) => {
  switch (action.type) {
    case SET_FILTRO_AREA:
      return action.payload.area
    case SET_FILTRO_CATEGORIA:
      return action.payload.categoria;
    case SET_FILTRO_ORDEM:
      return action.payload.ordem
    case SET_FILTRO_STATUS:
      return action.payload.status;
    default:
      return state
  }
}
