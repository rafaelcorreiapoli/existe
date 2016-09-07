import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { UserSchema } from 'meteor/existe:schemas'
import { Accounts } from 'meteor/accounts-base'
export const atualizarCadastro = new ValidatedMethod({
  name: 'Users.methods.atualizarCadastroPessoal',
  validate: UserSchema.validator(),
  run(doc) {
    const userId = this.userId
    Meteor.isDevelopment && Meteor._sleepForMs(1000)
    return Meteor.users.update(userId, {
      $set: {
        ...doc,
      },
    });
  },
})

export const cadastroRapido = new ValidatedMethod({
  name: 'Users.methods.cadastroRapido',
  validate: new SimpleSchema({
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
  }).validator(),
  run(doc) {
    console.log(typeof doc.profile.dataNascimento)
    Meteor.isDevelopment && Meteor._sleepForMs(1000)
    const userId = Accounts.createUser(doc)
    return userId
  },
})
