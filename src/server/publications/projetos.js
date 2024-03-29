import { Meteor } from 'meteor/meteor'
import { Projetos } from '@collections'
import { check } from 'meteor/check'

export default function () {
  Meteor.publish('Projects.publications.list', (skip, limit) => {
    return Projetos.find({}, {
      sort: { createdAt: -1 },
      skip,
      limit,
    })
  })

  Meteor.publish('Projects.publications.byId', (projectId) => {
    check(projectId, String)
    return Projetos.find({ _id: projectId })
  })


  Meteor.publish('Projetos.mural', ({ categoria, subcategoria, status, funcao, sort }) => {
    console.log('categoria: ', categoria)
    console.log('subcategoria: ', subcategoria)
    console.log('status: ', status)
    console.log('funcao: ', funcao)
    console.log('sort: ', sort)

    const query = Object.assign({},
      subcategoria ? { subcategoria } : null,
      categoria ? { categoria } : null,
      status ? { status } : null,
      funcao ? {
        vagas: {
          $elemMatch: {
            funcao,
            livres: {
              $gt: 0,
            },
          },
        },
      } : null
    )
    const res = Projetos.find(query, {
      sort,
    })
    return res
  })
}
