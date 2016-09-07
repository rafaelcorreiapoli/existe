import { Meteor } from 'meteor/meteor'
import { UserSchema } from 'meteor/existe:schemas'

Meteor.users.attachSchema(UserSchema)
Meteor.users.attachBehaviour('timestampable');
