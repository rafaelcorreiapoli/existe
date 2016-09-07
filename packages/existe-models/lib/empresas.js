import { Empresas } from 'meteor/existe:core'
import { EmpresaSchema } from 'meteor/existe:schemas'

Empresas.attachSchema(EmpresaSchema)
Empresas.attachBehaviour('timestampable')

export default Empresas
