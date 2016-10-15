/**
 * DEPRECATED
 */
import { connect } from 'react-redux'
import { composeWithTracker } from 'react-komposer'
import Comunidade from '@components/Comunidade'
import {
  setPage,
  getPageForArea,
} from '@ducks/comunidade'
import { Meteor } from 'meteor/meteor'
import { Counts } from 'meteor/tmeasday:publish-counts'

const mapStateToProps = (state) => ({
  pagePorArea: {
    texto: getPageForArea(state, 'texto'),
    imagem: getPageForArea(state, 'imagem'),
    audio: getPageForArea(state, 'audio'),
    cena: getPageForArea(state, 'cena'),
    producao: getPageForArea(state, 'producao'),
  }
})

const mapDispatchToProps = (dispatch) => ({
  setCategoria(filter, value) {
    dispatch(setCategoria(filter, value))
  },
  onPageChange(area, page) {
    dispatch(setPage(area, page))
  }
})

const composer = (props, onData) => {
  const {
    pagePorArea,
  } = props

  const handlers = []
  const areas = ['texto', 'imagem', 'audio', 'cena', 'producao']

  // Subscribe
  areas.forEach((area) => {
    const page = pagePorArea[area]
    const pageSize = 5
    handlers[area] = Meteor.subscribe('users.porArea', {
      area,
      skip: 0,
      limit: (pagePorArea[area] + 1) * 5,
    })
  })

  const usuariosPorArea = areas.reduce((previous, area) => {
    const obj = {
      ...previous,
    }

    if (handlers[area].ready()) {
      const skip = (pagePorArea[area] * 5)
      const limit = 5
      const cursor = Meteor.users.find({
        area,
      }, {
        skip,
        limit,
      })
      obj[area] = {
        usuariosCount: Counts.get(`users.totalPorArea_${area}`),
        usuarios: cursor.fetch().map(u => ({
          nome: u.profile.nomeCompleto,
          projetosCount: u.count ? u.count.projetos[area] : 0,
          funcao: u.funcao,
          imagem: u.profile.foto,
        })),
        page: pagePorArea[area],
        pageSize: 5,
      }

      return obj
    }
    obj[area] = {
      usuarios: [],
      loading: true,
      page: pagePorArea[area],
      usuariosCount: 0,
    }
    return obj
  }, {})

  onData(null, {
    usuariosPorArea,
  })
  // onData(null, {
  //   usuariosPorArea: {
  //     texto: {
  //       usuariosCount: 100,
  //       page: textoPage,
  //       usuarios: [
  //         {
  //           nome: 'RAFAEL',
  //           projetosCount: 10,
  //           funcao: 'ENGENHEIRO',
  //           imagem: 'http://placehold.it/300x300',
  //         },
  //         {
  //           nome: 'RAFAEL',
  //           projetosCount: 10,
  //           funcao: 'ENGENHEIRO',
  //           imagem: 'http://placehold.it/300x300',
  //         },
  //         {
  //           nome: 'RAFAEL',
  //           projetosCount: 10,
  //           funcao: 'ENGENHEIRO',
  //           imagem: 'http://placehold.it/300x300',
  //         },
  //         {
  //           nome: 'RAFAEL',
  //           projetosCount: 10,
  //           funcao: 'ENGENHEIRO',
  //           imagem: 'http://placehold.it/300x300',
  //         }],
  //     },
  //     imagem: {
  //       usuariosCount: 100,
  //       page: imagemPage,
  //       usuarios: [
  //         {
  //           nome: 'RAFAEL',
  //           projetosCount: 10,
  //           funcao: 'ENGENHEIRO',
  //           imagem: 'http://placehold.it/300x300',
  //         },
  //         {
  //           nome: 'RAFAEL',
  //           projetosCount: 10,
  //           funcao: 'ENGENHEIRO',
  //           imagem: 'http://placehold.it/300x300',
  //         },
  //         {
  //           nome: 'RAFAEL',
  //           projetosCount: 10,
  //           funcao: 'ENGENHEIRO',
  //           imagem: 'http://placehold.it/300x300',
  //         },
  //         {
  //           nome: 'RAFAEL',
  //           projetosCount: 10,
  //           funcao: 'ENGENHEIRO',
  //           imagem: 'http://placehold.it/300x300',
  //         }],
  //     },
  //     audio: {
  //       usuarios: [],
  //       page: audioPage,
  //       usuariosCount: 0,
  //     },
  //     cena: {
  //       usuarios: [],
  //       page: cenaPage,
  //       usuariosCount: 0,
  //     },
  //     producao: {
  //       usuarios: [],
  //       page: producaoPage,
  //       usuariosCount: 0,
  //     },
  //   },
  // })
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(composeWithTracker(composer)(Comunidade))
