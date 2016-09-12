import { composeWithTracker } from 'react-komposer'
import UsuarioCard from '@components/UsuarioCard'
import { getTotalProjetosCount, getMostActiveArea } from '@models/users'

const composer = ({ userId }, onData) => {

  if (Meteor.subscribe('users.single', { userId }).ready()) {
    const user = Meteor.users.findOne(userId)
    user.count = user.count || {}
    onData(null, {
      nome: user.profile.nomeCompleto,
      foto: user.profile.foto,
      area: getMostActiveArea(user.count.projetos),
      projetosFeitos: user.count.projetos,
      cidade: user.profile.cidade,
      estado: user.profile.estado,
      seguindo: user.profile.seguindo,
      mediaAvaliacoes: user.mediaAvaliacoes,
      numeroProjetos: getTotalProjetosCount(user.count.projetos),
      numeroAvaliacoes: user.count.avaliacoes,
      numeroSeguidores: user.count.seguidores,
      profissao: user.profissao,
    })
  }
}

export default composeWithTracker(composer)(UsuarioCard)
