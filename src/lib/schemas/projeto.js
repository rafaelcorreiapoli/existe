import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const UsuariosDoProjeto = new SimpleSchema({
  colaborando: {
    type: [String], // usuários que estão colaborando
  },
  seguindo: {
    type: [String], //  usuários que estão seguindo
  },
  favoritando: {
    type: [String],  // usuários que estão favoritando
  },
  salvando: {
    type: [String],  // usuários que estão salvando
  },
  marcados: {
    type: [String], // usuários marcados no projeto
  },
  convidados: {
    type: [String], // usuários convidados a participar
  },
})
const VagasDoProjeto = new SimpleSchema({
  funcao: {
    type: String,
  },
  disponiveis: {
    type: Number,
  },
  livres: {
    type: Number,
  },
})
const CountSchema = new SimpleSchema({
  colaboradores: {
    type: Number,
  },
  seguidores: {
    type: Number,
  },
  comentarios: {
    type: Number,
  },
  likes: {
    type: Number,
  },
})
export default new SimpleSchema({
  objetivo: {
    type: String,
  },
  nomeCliente: {
    type: String,
  },
  segmentoAtuacao: {
    type: String,
  },
  categoria: {
    type: String,
  },
  subcategoria: {
    type: String,
  },
  linguagemVisual: {
    type: String,
  },
  procura: {
    type: String,
  },
  publico: {
    type: String,
  },
  meiosVeiculacao: {
    type: String,
  },
  tempoDuracao: {
    type: String,
  },
  prazoEntrega: {
    type: Date,
  },
  esperaGastar: {
    type: Number,
  },
  capa: {
    type: String,
  },
  nome: {
    type: String,
  },
  descricao: {
    type: String,
  },
  links: {
    type: [String],
  },
  arquivos: {
    type: [String],
  },
  status: {
    type: String, // [criacao, desenvolviemnto, producao, pos-producao]
    optional: true,
  },
  criadorUsuario: {
    type: String,
  },
  area: {
    type: String, // Esta é uma das 5 áreas do Existe?
    optional: true,
  },
  usuarios: {
    type: UsuariosDoProjeto,
    optional: true,
  },
  vagas: {
    type: [VagasDoProjeto],
    optional: true,
  },
  count: {
    type: CountSchema,
    optional: true,
  },
})
