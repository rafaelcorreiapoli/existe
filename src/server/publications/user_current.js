import { Meteor } from 'meteor/meteor';

export default function () {
  Meteor.publish('users.current', function () {
    return Meteor.users.find(this.userId);
  });

  Meteor.publish('users.single', function({ userId }) {
    return Meteor.users.find(userId)
  })

  Meteor.publish('users.single.info', function({ userId }) {
    return Meteor.users.find(userId)
  })
}
