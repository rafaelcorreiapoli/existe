import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const FuncoesSchema = new SimpleSchema({
  exerce: {
    type: [String],
  },
  toparia: {
    type: [String],
  },
})
export default new SimpleSchema({
  tipoEmpresa: {
    type: String,
  },
  areaAtuacao: {
    type: String,
  },
  site: {
    type: String,
  },
  endereco: {
    type: String,
  },
  cnpj: {
    type: String,
  },
  bio: {
    type: String,
  },
  funcoes: {
    type: FuncoesSchema,
  },
  pagamentoPreferencial: {
    type: String,
  },
  //  lista de userIds do Meteor.users
  usuarios: {
    type: [String],
  },
  adminId: {
    type: String,
  },
})
