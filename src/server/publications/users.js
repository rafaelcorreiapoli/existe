import { Meteor } from 'meteor/meteor'
import { Counts } from 'meteor/tmeasday:publish-counts'

export default () => {
  Meteor.publish('users.porArea', function porArea({
    area,
    skip,
    limit,
  }) {
    const selector = {
      area,
    }

    Counts.publish(this, `users.totalPorArea_${area}`, Meteor.users.find(selector));
    return Meteor.users.find(selector, {
      skip,
      limit,
      sort: {
        'status.lastLogin.date': -1,
        'profile.nomeCompleto': -1,
      },
    })
  })
}
