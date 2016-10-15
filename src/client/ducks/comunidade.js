import { Map, fromJS } from 'immutable'

export const SET_PAGE = 'comunidade/SET_PAGE'

export const getPageForArea = (state, area) => state.comunidade.getIn([area, 'page'])

export const setPage = (area, page) => ({
  type: SET_PAGE,
  payload: {
    area,
    page,
  },
})

const initialState = fromJS({
  texto: {
    page: 0,
  },
  imagem: {
    page: 0,
  },
  audio: {
    page: 0,
  },
  cena: {
    page: 0,
  },
  producao: {
    page: 0,
  },
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return state.setIn([action.payload.area, 'page'], action.payload.page)
    default:
      return state;
  }
}
