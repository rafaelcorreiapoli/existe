import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import Diacritics from 'diacritic'

const SocialSchema = new SimpleSchema({
  facebook: {
    type: String,
    optional: true,
  },
  twitter: {
    type: String,
    optional: true,
  },
  instagram: {
    type: String,
    optional: true,
  },
})
const FuncoesSchema = new SimpleSchema({
  exerce: {
    type: [String],
  },
  toparia: {
    type: [String],
  },
})

const ReferenciasSchema = new SimpleSchema({
  fotos: {
    type: [String],
  },
  videos: {
    type: [String],
  },
  texto: {
    type: String,
    optional: true,
  },
})

const QuestionarioSchema = new SimpleSchema({
  sitesReferencia: {
    type: [String],
  },
  profissionalReferencia: {
    type: String,
  },
  aprendendoNoMomento: {
    type: String,
  },
  tecnicaArtistica: {
    type: String,
  },
})

const NumeracaoSchema = new SimpleSchema({
  blusa: {
    type: Number,
  },
  calca: {
    type: Number,
  },
  sapato: {
    type: Number,
  },
})

const AtorSchema = new SimpleSchema({
  numeracao: {
    type: NumeracaoSchema,
  },
  altura: {
    type: Number,
    decimal: true,
  },
  corOlhos: {
    type: String,
  },
  corCabelo: {
    type: String,
  },
})

const ProfileSchema = new SimpleSchema({
  foto: {
    type: String,
    optional: true,
  },
  nomeCompleto: {
    type: String,
    optional: true,
  },
  nomeCompletoStripped: {
    type: String,
    optional: true,
  },
  dataNascimento: {
    type: Date,
    optional: true,
  },
  sitePessoal: {
    type: String,
    optional: true,
  },
  email: {
    type: String,
    optional: true,
  },
  celular: {
    type: String,
    optional: true,
  },
  telefone: {
    type: String,
    optional: true,
  },
  social: {
    type: SocialSchema,
    optional: true,
  },
  cpf: {
    type: String,
    optional: true,
  },
  bio: {
    type: String,
    optional: true,
  },
})
const EmailSchema = new SimpleSchema({
  address: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  verified: {
    type: Boolean,
  },
})
export default new SimpleSchema({
  status: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  username: {
    type: String,
    optional: true,
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  roles: {
    type: [String],
    optional: true,
  },
  heartbeat: {
    type: Date,
    optional: true,
  },
  profile: {
    type: ProfileSchema,
  },
  portfolio: {
    type: [String],
    optional: true,
  },
  curriculo: {
    type: String,
    optional: true,
  },
  profissao: {
    type: String,
    optional: true,
  },
  empregador: {
    type: String,
    optional: true,
  },
  funcoes: {
    type: FuncoesSchema,
    optional: true,
  },
  referencias: {
    type: ReferenciasSchema,
    optional: true,
  },
  questionario: {
    type: QuestionarioSchema,
    optional: true,
  },
  ator: {
    type: AtorSchema,
    optional: true,
  },
  pagamentoPreferencial: {
    type: String,
    optional: true,
  },
  count: {
    type: Object,
    optional: true,
  },
  'count.projetos': {
    type: Object,
  },
  'count.projetos.texto': {
    type: Number,
  },
  'count.projetos.imagem': {
    type: Number,
  },
  'count.projetos.audio': {
    type: Number,
  },
  'count.projetos.cena': {
    type: Number,
  },
  'count.projetos.producao': {
    type: Number,
  },
  'count.avaliacoes': {
    type: Number,
  },
  'count.seguidores': {
    type: Number,
  },
  area: {
    type: String,
    optional: true,
  },
  funcao: {
    type: String,
    optional: true,
  },
})
