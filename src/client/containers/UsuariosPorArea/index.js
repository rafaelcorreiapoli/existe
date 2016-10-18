import { connect } from 'react-redux'
import { composeWithTracker } from 'react-komposer'
import { Meteor } from 'meteor/meteor'
import UsuariosCarousel from '@components/UsuariosCarousel'
import { Counts } from 'meteor/tmeasday:publish-counts'
import GridUsuarios from '@components/GridUsuarios'
import Loading from '@components/Loading'
import UsuariosPorArea from '@components/UsuariosPorArea'

import {
  setPage,
  getPageForArea,
  getExpandedForArea,
  setExpandedArea
} from '@ducks/comunidade'

const mapStateToProps = (state, ownProps) => ({
  page: getPageForArea(state, ownProps.area),
  expanded: getExpandedForArea(state, ownProps.area),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPageChange(page) {
    dispatch(setPage(ownProps.area, page))
  },
  setExpandedArea(area, expanded) {
    dispatch(setExpandedArea(area, expanded))
  },
})

const composer = (props, onData) => {
  const {
    area,
    page,
    pageSize,
  } = props

  const skip = 0
  const limit = (page + 1) * pageSize

  const handler = Meteor.subscribe('users.porArea', {
    area,
    skip,
    limit,
  })

  if (handler.ready()) {
    const cursor = Meteor.users.find({
      area,
    }, {
      skip: page * pageSize,
      limit: pageSize,
      sort: {
        'status.lastLogin.date': -1,
        'profile.nomeCompleto': -1,
      },
    })

    onData(null, {
      usuariosCount: Counts.get(`users.totalPorArea_${area}`),
      usuarios: cursor.fetch().map(u => ({
        nome: u.profile.nomeCompleto,
        projetosCount: u.count ? u.count.projetos[area] : 0,
        funcao: u.funcao,
        imagem: u.profile.foto,
      })),
    })
  } else {
    onData(null, {
      loading: true,
      usuarios: [],
      usuariosCount: 0,
    })
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(composeWithTracker(composer, Loading)(UsuariosPorArea))

export const UsuariosPorAreaGrid = connect(
  mapStateToProps, mapDispatchToProps
)(composeWithTracker(composer, Loading)(GridUsuarios))
