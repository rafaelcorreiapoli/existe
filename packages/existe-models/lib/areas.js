import { Areas } from 'meteor/existe:core'
import { AreaSchema } from 'meteor/existe:schemas'

Areas.attachSchema(AreaSchema)
Areas.attachBehaviour('timestampable')

export default Areas
