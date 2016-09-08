import { Areas } from '@collections'
import AreaSchema from '@schemas/area'

export default () => {
  Areas.attachSchema(AreaSchema)
  Areas.attachBehaviour('timestampable')
}
