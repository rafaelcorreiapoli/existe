const Joi = require('joi');
import language from './language'

const customJoi = Joi.extend({
  base: Joi.number(),
  name: 'number',
  language: {
    round: 'needs to be a rounded number',
    dividable: 'needs to be dividable by {{q}}'
  },
});
