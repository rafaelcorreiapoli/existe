import { Empresas } from '@collections'
import EmpresaSchema from '@schemas/area'

export default () => {
  Empresas.attachSchema(EmpresaSchema)
  Empresas.attachBehaviour('timestampable')
}
