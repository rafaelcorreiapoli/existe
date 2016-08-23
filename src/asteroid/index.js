import { createClass } from 'asteroid';
import { addProjeto, removeProjeto, updateProjeto } from '../actions';
import * as asteroidOauthMixin from 'asteroid-oauth-mixin';
import store from '../store';

const Asteroid = createClass([asteroidOauthMixin]);
// Connect to a Meteor backend
const asteroid = new Asteroid({
    endpoint: 'ws://localhost:4000/websocket'
});


// Use real-time collections
window.asteroid = asteroid;



export default asteroid;
