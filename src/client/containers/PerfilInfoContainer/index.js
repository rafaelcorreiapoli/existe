import { composeWithTracker } from 'react-komposer'
import PerfilInfo from '@components/PerfilInfo'

const composer = (props, onData) => {
  const user = Meteor.user()
  user.count = user.count || {}
  if (user) {
    onData(null, {
      nome: user.profile.nomeCompleto,
      area: user.area,
      image: user.profile.image,
      textoCount: user.count.texto,
      imagemCount: user.count.imagem,
      audioCount: user.count.audio,
      cenaCount: user.count.cena,
      producaoCount: user.count.producao,
    })
  }
}

export default composeWithTracker(composer)(PerfilInfo)
