import _ from 'lodash'
import Joi from 'joi-browser';
import { deserializeFormErrors } from '@utils/form_errors';
import language from '@config/joi'

export default (values, schema) => {
  const interestingValues = schema._inner.children.map(child => child.key)
  const result = Joi.validate(interestingValues, schema, { abortEarly: false, language });
  return deserializeFormErrors(result)
}
