import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import { connect } from 'react-redux'
import SocialNetworkIcon from '@components/SocialNetworkIcon'
import FontIcon from 'material-ui/FontIcon';
import 'font-awesome/css/font-awesome.css'
import { buildSocialLinks } from '@models/users'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  nome: {

  },
  subtitleRow: {
    color: '#999',
    display: 'flex',
  },
  sitePessoal: {
    marginRight: 30,
    color: 'inherit',
  },
  email: {
    marginLeft: 30,
    color: 'inherit',
  },
  socialIconsRow: {
    display: 'flex',
    marginBottom: 40,
  },
  bio: {

  },
}

class Info extends React.Component {
  static propTypes = {
    nome: PropTypes.string,
    sitePessoal: PropTypes.string,
    email: PropTypes.string,
    bio: PropTypes.string,
    socialLinks: PropTypes.array,
  }
  render() {
    const {
      nome,
      sitePessoal,
      email,
      socialLinks,
      bio,
    } = this.props

    return (
      <div>
        <h1 style={styles.nome}>{nome}</h1>
        <h2 style={styles.subtitleRow}>
          <a style={styles.sitePessoal} href={sitePessoal} target="_blank">{sitePessoal}</a>
          |
          <a style={styles.email} href={`mailto:${email}`}>{email}</a>
        </h2>
        <div style={styles.socialIconsRow}>
          {socialLinks && socialLinks.map((socialLink, i) => (
            <SocialNetworkIcon
              key={i}
              onClick={() => window.open(socialLink.link)}
              style={{ marginRight: 20 }}
              {...socialLink}
            />
          ))}
        </div>
        <div style={styles.bio}>
          {bio}
        </div>
      </div>
    )
  }
}

const composer = ({ userId }, onData) => {
  if (Meteor.subscribe('users.single.info', { userId }).ready()) {
    const user = Meteor.users.findOne(userId)
    onData(null, {
      nome: user.profile.nomeCompleto,
      sitePessoal: user.profile.sitePessoal,
      email: user.profile.email,
      socialLinks: buildSocialLinks(user.profile.social),
      bio: user.profile.bio,
    })
  }
}
//
// const mapStateToProps = state => {
//   return {
//     nome: 'Rafael',
//     sitePessoal: 'http://www.google.com',
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
//     bio: 'Aqui é Body Builder Ipsum PORRA! Ajuda o maluco que tá doente. Negativa Bambam negativa. Vai subir árvore é o caralho porra! Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Aqui nóis constrói fibra, não é água com músculo. Eita porra!, tá saindo da jaula o monstro!' +
//     'o derrubar tudo essas árvore do parque ibirapuera. Que não vai dá rapaiz, não vai dá essa porra. Ajuda o maluco que tá doente. É verão o ano todo vem cumpadi. Eita porra!, tá saindo da jaula o monstro! Ele tá olhando pra gente.' +
//     'É 13 porra! Vem porra! Birl! Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Vo derrubar tudo essas árvore do parque ibirapuera. É nóis caraio é trapezera buscando caraio!' +
//     'É nóis caraio é trapezera buscando caraio! Sai de casa comi pra caralho porra. Aqui nóis constrói fibra, não é água com músculo. Tá comigo porra. É 37 anos caralho! É 13 porra!' +
//     'É nóis caraio é trapezera buscando caraio! Eu quero esse 13 daqui a pouquinho aí. Vo derrubar tudo essas árvore do parque ibirapuera. É esse que a gente quer, é ele que nóis vamo buscar. É verão o ano todo vem cumpadi. AHHHHHHHHHHHHHHHHHHHHHH..., porra!',
//   }
// }
//
export default composeWithTracker(composer)(Info)
