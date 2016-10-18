import { connect } from 'react-redux'
import FiltroComunidade from '@components/FiltroComunidade'
import { composeWithTracker } from 'react-komposer'

import {
  buscar,
  setFiltro,
  getFiltro,
  getExpanded,
  setExpanded,
} from '@ducks/comunidade'

const mapStateToProps = (state) => ({
  cidades: getFiltro(state, 'cidades'),
  funcoes: getFiltro(state, 'funcoes'),
  tiposDeVideo: getFiltro(state, 'tiposDeVideo'),
  mediaAvaliacoes: getFiltro(state, 'mediaAvaliacoes'),
  mediaPreco: getFiltro(state, 'mediaPreco'),
  cidadesExpanded: getExpanded(state, 'cidades'),
  funcoesExpanded: getExpanded(state, 'funcoes'),
  tiposDeVideoExpanded: getExpanded(state, 'tiposDeVideo'),
  mediaAvaliacoesExpanded: getExpanded(state, 'mediaAvaliacoes'),
  mediaPrecoExpanded: getExpanded(state, 'mediaPreco'),
})

const mapDispatchToProps = (dispatch) => ({
  setFiltro(filtro, key, value) {
    dispatch(setFiltro(filtro, key, value))
  },
  setExpanded(filtro, expanded) {
    dispatch(setExpanded(filtro, expanded))
  }
})

const compose = (props, onData) => {
  onData(null, {
    optionsCidades: [{
      value: 'sao-paulo',
      label: 'São Paulo',
      numeroUsuarios: 10,
    }, {
      value: 'rio-de-janeiro',
      label: 'Rio de Janeiro',
      numeroUsuarios: 20,
    }]
  })
}

export default composeWithTracker(compose)(connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltroComunidade))
