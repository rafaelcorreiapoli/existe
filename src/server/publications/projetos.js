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
}
