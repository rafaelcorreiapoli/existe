import { Projetos } from '@collections'
import ProjetoSchema from '@schemas/projeto'


export default () => {
  Projetos.attachSchema(ProjetoSchema)
  Projetos.attachBehaviour('timestampable')
}
