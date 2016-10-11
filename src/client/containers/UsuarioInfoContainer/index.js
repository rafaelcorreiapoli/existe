import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import UsuarioCard from '@components/UsuarioCard'
import { getTotalProjetosCount, getMostActiveArea } from '@models/users'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

const composer = ({ userId }, onData) => {
  if (Meteor.subscribe('users.single', { userId }).ready()) {
    const user = Meteor.users.findOne(userId)
    user.count = user.count || {}
    onData(null, {
      _id: user._id,
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

const mapDispatchToProps = dispatch => ({
  onAvaliacoesClick(userId) {
    dispatch(push(`/usuario/${userId}/avaliacoes`))
  },
  onSeguindoClick(userId) {
    dispatch(push(`/usuario/${userId}/seguindo`))
  },
  onSeguidoresClick(userId) {
    dispatch(push(`/usuario/${userId}/seguidores`))
  },
})

export default connect(null, mapDispatchToProps)(composeWithTracker(composer)(UsuarioCard))
