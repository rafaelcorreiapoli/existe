import { Meteor } from 'meteor/meteor'
import { Areas } from 'meteor/existe:core'

Meteor.publish('Areas.publications.list', (skip, limit) => {
  return Areas.find({}, {
    sort: { createdAt: -1 },
    skip,
    limit
  })
})

Meteor.publish('Areas.publications.byId', (areaId) => {
  check(areaId, String)
  return Areas.find({_id: areaId})
})
