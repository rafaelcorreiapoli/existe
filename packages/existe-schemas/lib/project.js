import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export default new SimpleSchema({
  name: {
    type: String,
  },
  status: {
    type: String,
    allowedValues: ['creation', 'development', 'production', 'pos-production'], // TODO: Pedir traduções corretas
  },
  category: {
    type: String,
  },
  date: {
    type: Date,
  },
  cover: {
    type: String, // Id da imagem
  },
  collaborators: {
    type: [String],
    optional: true,
  },
  followers: {
    type: [String],
    optional: true,
  },
  favorited: {
    type: [String],
    optional: true,
  },
})
