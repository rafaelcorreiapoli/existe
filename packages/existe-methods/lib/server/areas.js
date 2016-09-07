import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { AreaSchema } from 'meteor/existe:schemas'

export const createArea = new ValidatedMethod({
  name: 'Areas.methods.createArea',
  validate: AreaSchema.validator,
  run(doc) {
    return Areas.insert(doc);
  }
})
