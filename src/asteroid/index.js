import { createClass } from 'asteroid';
import { addProjeto, removeProjeto, updateProjeto } from '../actions';
import * as asteroidOauthMixin from 'asteroid-oauth-mixin';
import store from '../store';
import oauth from './oauth'

const Asteroid = createClass([asteroidOauthMixin]);
// Connect to a Meteor backend
const asteroid = new Asteroid({
    endpoint: 'ws://localhost:4000/websocket'
});

asteroid.ddp.on('added', ({collection, id, fields}) => {
  console.log(collection, id, fields);
    if (collection === 'meteor_accounts_loginServiceConfiguration') {
        asteroid.loginServiceConfiguration = {
            ...asteroid.loginServiceConfiguration,
            [fields.service]: {
                _id: id,
                ...fields
            }
        };
    }
});
asteroid.getServiceConfig = providerName => {
  console.log(providerName)
    return asteroid.loginServiceConfiguration[providerName];
}


// Use real-time collections
window.asteroid = asteroid;

import linkedin from './oauth/linkedin'

asteroid.registerOauthProvider(linkedin)


export default asteroid;
