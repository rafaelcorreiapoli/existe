import { createClass } from 'asteroid';
import { addProjeto, removeProjeto, updateProjeto } from '../actions';
import * as asteroidOauthMixin from 'asteroid-oauth-mixin';
import store from '../store';

const Asteroid = createClass([asteroidOauthMixin]);
// Connect to a Meteor backend
const asteroid = new Asteroid({
    endpoint: 'ws://localhost:4000/websocket'
});


asteroid.loginWithFacebook = () => {
  return new Promise((resolve, reject) => {
    FB.login(fbResponse => {
      asteroid.login({
        provider: 'facebook',
        token: fbResponse.authResponse.accessToken,
        expiresIn: fbResponse.authResponse.expirationTime
      }).then(res => {
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  })
}

const Linkedin = {
  login(cb) {
    const url = 'https://www.linkedin.com/oauth/v2/authorization?' +
    'response_type=code&' +
    'client_id=77y93pmahlez1c&' +
    'redirect_uri=http://localhost:3000/_oauth/linkedin&' +
    'state=DCEeFWf45A53sdfKef424'

    window.open(url, 'name','height=400,width=800')
    window.oAuthCB = cb
  }
}

asteroid.loginWithLinkedin = () => {
  return new Promise((resolve, reject) => {
    Linkedin.login(({token, expiresIn}) => {
      asteroid.login({provider: 'linkedin', token, expiresIn })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  })
}

// Use real-time collections
window.asteroid = asteroid;



export default asteroid;
