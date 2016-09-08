import { Meteor } from 'meteor/meteor'
import UserSchema from '@schemas/user'


export default () => {
  Meteor.users.attachSchema(UserSchema)
  Meteor.users.attachBehaviour('timestampable')
}
