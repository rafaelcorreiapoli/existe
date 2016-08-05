export const SET_FILTRO_CATEGORIA = 'SET_FILTRO_CATEGORIA';
export const SET_FILTRO_ORDEM = 'SET_FILTRO_ORDEM';
export const SET_FILTRO_STATUS = 'SET_FILTRO_STATUS';
export const SET_FILTRO_AREA = 'SET_FILTRO_AREA';
export const ADD_PROJETO = 'ADD_PROJETO';
export const REMOVE_PROJETO = 'REMOVE_PROJETO';
export const UPDATE_PROJETO = 'UPDATE_PROJETO';

export function setFiltroCategoria(categoria) {
  return {
    type: SET_FILTRO_CATEGORIA,
    payload: {
      categoria
    }
  }
}

export function setFiltroOrdem(ordem) {
  return {
    type: SET_FILTRO_ORDEM,
    payload: {
      ordem
    }
  }
}

export function setFiltroStatus(status) {
  return {
    type: SET_FILTRO_STATUS,
    payload: {
      status
    }
  }
}

export function setFiltroArea(area) {
  return {
    type: SET_FILTRO_AREA,
    payload: {
      area
    }
  }
}
export function addProjeto(projeto) {
  return {
    type: ADD_PROJETO,
    payload: {
      projeto
    }
  }
}


export function removeProjeto(id) {
  return {
    type: REMOVE_PROJETO,
    payload: {
      id
    }
  }
}

export function updateProjeto(id, fields) {
  return {
    type: UPDATE_PROJETO,
    payload: {
      id,
      fields
    }
  }
}
