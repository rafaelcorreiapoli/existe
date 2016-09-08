import { ValidatedMethod } from 'meteor/mdg:validated-method'
import UserSchema from '@schemas/user'
import { Accounts } from 'meteor/accounts-base'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

Meteor.methods({
  'Users.methods.atualizarCadastroPessoal'(doc) {
    UserSchema.validate(doc)

    const userId = this.userId
    return Meteor.users.update(userId, {
      $set: {
        ...doc,
      },
    });
  },
  'Users.methods.cadastroRapido'(doc) {
    new SimpleSchema({
      username: {
        type: String,
      },
      email: {
        type: String,
      },
      password: {
        type: String,
      },
      profile: {
        type: Object,
      },
      'profile.nomeCompleto': {
        type: String,
      },
      'profile.dataNascimento': {
        type: Date,
        optional: true,
      },
      'profile.celular': {
        type: String,
        optional: true,
      },
      'profile.telefone': {
        type: String,
        optional: true,
      },
    }).validate(doc)

    const userId = Accounts.createUser(doc)
    return userId
  },
})
