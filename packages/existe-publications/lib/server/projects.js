import { Meteor } from 'meteor/meteor'
import { Projects } from 'meteor/existe:core'

Meteor.publish('Projects.publications.list', (skip, limit) => {
  return Projects.find({}, {
    sort: { createdAt: -1 },
    skip,
    limit
  })
})

Meteor.publish('Projects.publications.byId', (projectId) => {
  check(projectId, String)
  return Areas.find({_id: projectId})
})
