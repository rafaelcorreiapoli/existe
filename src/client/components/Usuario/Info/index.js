import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import SocialNetworkIcon from '@components/SocialNetworkIcon'
import FontIcon from 'material-ui/FontIcon';
import 'font-awesome/css/font-awesome.css'

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
  site: {
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
const Info = ({
  nome,
  site,
  email,
  socialLinks,
  bio,
  onClickSocialNetwork,
}) => {
  return (
    <div>
      <h1 style={styles.nome}>{nome}</h1>
      <h2 style={styles.subtitleRow}>
        <a style={styles.site} href={site} target="_blank">{site}</a>
        |
        <a style={styles.email} href={`mailto:${email}`}>{email}</a>
      </h2>
      <div style={styles.socialIconsRow}>
        {socialLinks && socialLinks.map((socialLink, i) => (
          <SocialNetworkIcon
            key={i}
            onClick={() => onClickSocialNetwork(socialLink.link)}
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

const mapStateToProps = state => {
  return {
    nome: 'Rafael',
    site: 'http://www.google.com',
    email: 'rafael.correia.poli@gmail.com',
    socialLinks: [
      {
        value: 'facebook',
        label: 'Facebook',
        link: 'http://www.facebook.com',
      },
      {
        value: 'twitter',
        label: 'Twitter',
        link: 'http://www.twitter.com',
      },
      {
        value: 'instagram',
        label: 'Instagram',
        link: 'http://www.instagram.com',
      },
    ],
    bio: 'Aqui é Body Builder Ipsum PORRA! Ajuda o maluco que tá doente. Negativa Bambam negativa. Vai subir árvore é o caralho porra! Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Aqui nóis constrói fibra, não é água com músculo. Eita porra!, tá saindo da jaula o monstro!' +
    'o derrubar tudo essas árvore do parque ibirapuera. Que não vai dá rapaiz, não vai dá essa porra. Ajuda o maluco que tá doente. É verão o ano todo vem cumpadi. Eita porra!, tá saindo da jaula o monstro! Ele tá olhando pra gente.' +
    'É 13 porra! Vem porra! Birl! Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Vo derrubar tudo essas árvore do parque ibirapuera. É nóis caraio é trapezera buscando caraio!' +
    'É nóis caraio é trapezera buscando caraio! Sai de casa comi pra caralho porra. Aqui nóis constrói fibra, não é água com músculo. Tá comigo porra. É 37 anos caralho! É 13 porra!' +
    'É nóis caraio é trapezera buscando caraio! Eu quero esse 13 daqui a pouquinho aí. Vo derrubar tudo essas árvore do parque ibirapuera. É esse que a gente quer, é ele que nóis vamo buscar. É verão o ano todo vem cumpadi. AHHHHHHHHHHHHHHHHHHHHHH..., porra!',
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickSocialNetwork(link) {
      window.open(link)
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info)
