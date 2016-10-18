import { Map, fromJS } from 'immutable'

export const SET_PAGE = 'comunidade/SET_PAGE'
export const SET_FILTRO = 'comunidade/SET_FILTRO'
export const SET_EXPANDED = 'comunidade/SET_EXPANDED'
export const SET_EXPANDED_AREA = 'comunidade/SET_EXPANDED_AREA'

export const getExpanded = (state, filtro) => state.comunidade.getIn(['expanded', filtro])

export const getPageForArea = (state, area) => state.comunidade.getIn(['resultados', area, 'page'])
export const getExpandedForArea = (state, area) => state.comunidade.getIn(['resultados', area, 'expanded'])
export const setPage = (area, page) => ({
  type: SET_PAGE,
  payload: {
    area,
    page,
  },
})

export const setExpandedArea = (area, expanded) => ({
  type: SET_EXPANDED_AREA,
  payload: {
    area,
    expanded,
  },
})


export const setExpanded = (filtro, expanded) => ({
  type: SET_EXPANDED,
  payload: {
    filtro,
    expanded,
  },
})

export const setFiltro = (filtro, key, value) => ({
  type: SET_FILTRO,
  payload: {
    filtro,
    key,
    value,
  },
})

export const getFiltro = (state, filtro) => state.comunidade.getIn(['filtros', filtro])

const initialState = fromJS({
  resultados: {
    texto: {
      page: 0,
      expanded: false,
    },
    imagem: {
      page: 0,
      expanded: false,
    },
    audio: {
      page: 0,
      expanded: false,
    },
    cena: {
      page: 0,
      expanded: false,
    },
    producao: {
      page: 0,
      expanded: false,
    },
  },
  filtros: {
    cidades: {},
    funcoes: {},
    tiposDeVideo: {},
    mediaAvaliacoes: undefined,
    mediaPreco: undefined,
  },
  expanded: {
    cidades: false,
    funcoes: false,
    tiposDeVideo: false,
    mediaAvaliacoes: false,
    mediaPreco: false,
  },
})

export default (state = initialState, action) => {
  console.log('reducer')
  switch (action.type) {
    case SET_EXPANDED_AREA:
      return state.setIn(['resultados', action.payload.area, 'expanded'], action.payload.expanded)
    case SET_PAGE:
      return state.setIn(['resultados', action.payload.area, 'page'], action.payload.page)
    case SET_EXPANDED:
      return state.setIn(['expanded', action.payload.filtro], action.payload.expanded)
    case SET_FILTRO:
      if (action.payload.value !== undefined) {
        return state.setIn(['filtros', action.payload.filtro, action.payload.key], action.payload.value)
      }
      return state.setIn(['filtros', action.payload.filtro], action.payload.key)
    default:
      return state;
  }
}
