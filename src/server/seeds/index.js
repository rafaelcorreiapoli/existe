import { Meteor } from 'meteor/meteor'
import _ from 'lodash'
import Chance from 'chance'
import {
  AREAS_E_FUNCOES,
  COR_CABELOS,
  COR_OLHOS,
  EXPRESSOES_ARTISTICAS,
} from '@resources/options'

const chance = new Chance();


const listFuncoes = _.flatten(AREAS_E_FUNCOES.map(area =>
  area.funcoes && area.funcoes.map(funcao => funcao.value)))
const listAreas = AREAS_E_FUNCOES.map(area => area.value)

export const seedUsers = (n) => {
  console.log(chance.phone({ country: 'uk' }))
  _.range(n).map((x) => {
    const u = {
      profile: {
        foto: `http://eightbitavatar.herokuapp.com/?id=${x}&s=male&size=400`,
        nomeCompleto: chance.name(),
        dataNascimento: chance.birthday(),
        cpf: chance.cpf(),
        bio: chance.paragraph(),
        sitePessoal: chance.url(),
        email: chance.email(),
        celular: chance.phone({ country: 'uk' }),
        telefone: chance.phone({ country: 'uk' }),
        social: {
          facebook: `http://www.facebook.com/${chance.fbid()}`,
          twitter: `http://www.twitter.com/${chance.twitter()}`,
        },
      },
      portfolio: [
        chance.url(),
        chance.url(),
      ],
      referencias: {
        fotos: [
          chance.url({ extensions: ['gif', 'jpg', 'png'] }),
          chance.url({ extensions: ['gif', 'jpg', 'png'] }),
          chance.url({ extensions: ['gif', 'jpg', 'png'] }),
        ],
        videos: [
          chance.url(),
          chance.url(),
          chance.url(),
        ],
        texto: chance.paragraph(),
      },
      questionario: {
        sitesReferencia: [
          chance.url(),
          chance.url(),
          chance.url(),
        ],
        profissionalReferencia: chance.word(),
        aprendendoNoMomento: chance.sentence({ words: 5 }),
        tecnicaArtistica: chance.pickone(EXPRESSOES_ARTISTICAS.map(e => e.value)),
      },
      funcoes: {
        toparia: chance.pickset(listFuncoes, 10),
        exerce: chance.pickset(listFuncoes, 10),
      },
      ator: {
        corCabelo: chance.pickone(COR_CABELOS.map(c => c.value)),
        corOlhos: chance.pickone(COR_OLHOS.map(o => o.value)),
        altura: Number(chance.floating({ min: 1.5, max: 2 })).toFixed(2),
        numeracao: {
          calca: chance.integer({ min: 20, max: 50 }),
          blusa: chance.integer({ min: 20, max: 50 }),
          sapato: chance.integer({ min: 20, max: 50 }),
        },
      },
      curriculo: chance.url(),
      profissao: chance.word(),
      empregador: chance.word(),
      pagamentoPreferencial: chance.pickone(['pagamento-1', 'pagamento-2']),
      count: {
        projetos: {
          texto: chance.integer({ min: 0, max: 10 }),
          imagem: chance.integer({ min: 0, max: 10 }),
          audio: chance.integer({ min: 0, max: 10 }),
          cena: chance.integer({ min: 0, max: 10 }),
          producao: chance.integer({ min: 0, max: 10 }),
        },
        avaliacoes: chance.integer({ min: 0, max: 1000 }),
        seguidores: chance.integer({ min: 0, max: 1000 }),
      },
      mediaAvaliacoes: Number(chance.floating({ min: 0, max: 5 })).toFixed(2),
      area: chance.pickone(listAreas),
      funcao: chance.pickone(listFuncoes),
    }

    console.log(`[${x}] Seeding user ${u.profile.nomeCompleto}`)
    Meteor.users.insert(u)
  })
}
