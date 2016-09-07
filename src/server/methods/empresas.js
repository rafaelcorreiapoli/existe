import { ValidatedMethod } from 'meteor/mdg:validated-method'
import EmpresaSchema from '@schemas/empresa'
import { Empresas } from '@collections'


Meteor.methods({
  'Empresas.methods.cadastro'(doc) {
    EmpresaSchema.validate(doc)
    Meteor.isDevelopment && Meteor._sleepForMs(1000)
    return Empresas.insert(doc)
  }
})
