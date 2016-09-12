import { Meteor } from 'meteor/meteor'
import UserSchema from '@schemas/user'


export default () => {
  Meteor.users.attachSchema(UserSchema)
  Meteor.users.attachBehaviour('timestampable')
}

export const getTotalProjetosCount = (projetos) => {
  return parseInt(projetos.texto, 10) +
  parseInt(projetos.imagem, 10) +
  parseInt(projetos.audio, 10) +
  parseInt(projetos.cena, 10) +
  parseInt(projetos.producao, 10)
}

export const getMostActiveArea = (projetos) => {
  const areas = Object.keys(projetos)
  const sortedArray = areas.sort((a, b) => projetos[b] - projetos[a])
  return sortedArray[0]
}

export const buildSocialLinks = (social) => {
  const socialLabel = {
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
  }

  return Object.keys(social).map(network => {
    return {
      value: network,
      label: socialLabel[network],
      link: social[network],
    }
  })

  //     email: 'rafael.correia.poli@gmail.com',
  //     socialLinks: [
  //       {
  //         value: 'facebook',
  //         label: 'Facebook',
  //         link: 'http://www.facebook.com',
  //       },
  //       {
  //         value: 'twitter',
  //         label: 'Twitter',
  //         link: 'http://www.twitter.com',
  //       },
  //       {
  //         value: 'instagram',
  //         label: 'Instagram',
  //         link: 'http://www.instagram.com',
  //       },
  //     ],
}
