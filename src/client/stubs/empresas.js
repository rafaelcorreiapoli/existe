import { ValidatedMethod } from 'meteor/mdg:validated-method'
import EmpresaSchema from '@schemas/empresa'
import { Empresas } from '@collections'
//
//  **STUBS**
//
Meteor.methods({
  'Empresas.methods.cadastro'(doc) {
    EmpresaSchema.validate(doc)
    return Empresas.insert(doc)
  }
})
