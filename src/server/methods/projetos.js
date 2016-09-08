// import { ValidatedMethod } from 'meteor/mdg:validated-method'
import ProjetoSchema from '@schemas/projeto'
import { Projetos } from '@collections'


Meteor.methods({
  'Projetos.methods.insert'(doc) {
    ProjetoSchema.validate(doc)
    Meteor.isDevelopment && Meteor._sleepForMs(1000)
    doc.estado = 'criacao'
    return Projetos.insert(doc)
  },
})
