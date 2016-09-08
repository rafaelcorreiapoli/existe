import _ from 'lodash'
import Joi from 'joi-browser';
import { deserializeFormErrors } from '@utils/form_errors';
import language from '@config/joi'

export default (values, schema) => {

  // const interestingValues = _.pick(values, [
  //   'tipoEmpresa',
  //   'areaAtuacao',
  //   'site',
  //   'endereco',
  //   'cnpj',
  //   'bio',
  //   'funcoes',
  // ])
  const interestingValues = schema._inner.children.map(child => child.key)
  console.log(interestingValues)
  const result = Joi.validate(interestingValues, schema, { abortEarly: false, language });
  return deserializeFormErrors(result)
}
