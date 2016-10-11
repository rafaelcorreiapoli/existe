import _ from 'lodash'
import Joi from 'joi-browser';
import { deserializeFormErrors } from '@utils/form_errors';
import language from '@config/joi'

export default (values, schema, array) => {
  const interestingValues = schema._inner.children.map(child => child.key)
  const result = Joi.validate(_.pick(values, interestingValues), schema, { abortEarly: false, language });
  return deserializeFormErrors(result, array)
}
