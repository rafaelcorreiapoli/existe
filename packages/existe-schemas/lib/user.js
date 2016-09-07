import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const SocialSchema = new SimpleSchema({
  facebook: {
    type: String
  },
  twitter: {
    type: String
  },
  instagram: {
    type: String
  }
})
const FuncoesSchema = new SimpleSchema({
  exerce: {
    type: [String]
  },
  toparia: {
    type: [String]
  }
})

const ReferenciasSchema = new SimpleSchema({
  fotos: {
    type: [String]
  },
  videos: {
    type: [String]
  },
  texto: {
    type: String
  }
})

const QuestionarioSchema = new SimpleSchema({
  sitesReferencia: {
    type: [String]
  },
  profissionalReferencia: {
    type: String
  },
  aprendendoNoMomento: {
    type: String
  },
  tecnicaArtistica: {
    type: String
  }
})

const NumeracaoSchema = new SimpleSchema({
  blusa: {
    type: Number
  },
  calca: {
    type: Number
  },
  sapato: {
    type: Number
  }
})

const AtorSchema = new SimpleSchema({
  numeracao: {
    type: NumeracaoSchema
  },
  altura: {
    type: Number,
    decimal: true
  },
  corOlhos: {
    type: String
  },
  corCabelo: {
    type: String
  }
})

const ProfileSchema = new SimpleSchema({
  nomeCompleto: {
    type: String,
  },
  dataNascimento: {
    type: Date
  },
  sitePessoal: {
    type: String
  },
  email: {
    type: String
  },
  celular: {
    type: String
  },
  telefone: {
    type: String
  },
  social: {
    type: SocialSchema
  }
})
const EmailSchema = new SimpleSchema({
  address: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  verified: {
    type: Boolean
  }
})
export default new SimpleSchema({
  username: {
    type: String,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: [String],
    optional: true
  },
  heartbeat: {
    type: Date,
    optional: true
  },
  profile: {
    type: ProfileSchema
  },
  portfolio: {
    type: [String]
  },
  curriculo: {
    type: String
  },
  profissao: {
    type: String,
    optional: true
  },
  empregador: {
    type: String,
    optional: true
  },
  funcoes: {
    type: FuncoesSchema
  },
  referencias: {
    type: ReferenciasSchema
  },
  questionario: {
    type: QuestionarioSchema
  },
  ator: {
    type: AtorSchema,
    optional: true
  },
  pagamentoPreferencial: {
    type: String
  }
})
