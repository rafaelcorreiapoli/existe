import { createSelector } from 'reselect'
import { Map } from 'immutable'

const getProjetos = (state) => state.ddp.collections.get('projetos')

export const getProjetosMural = createSelector(
  [ getProjetos ],
  (projetos) => {
    return projetos || Map()
  }
)
