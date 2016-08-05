import { createClass } from 'asteroid';
import { addProjeto, removeProjeto, updateProjeto } from '../actions';
import store from '../store';

const Asteroid = createClass();
// Connect to a Meteor backend
const asteroid = new Asteroid({
    endpoint: 'ws://localhost:4000/websocket'
});

// Use real-time collections
window.asteroid = asteroid;



// Login
//asteroid.loginWithPassword({username, email, password});

// Call method and use promises
// asteroid.call('projetos.add', {
//   nome: 'novo projeto'
// })
// .then(result => {
//     console.log('Success');
//     console.log(result);
// })
// .catch(error => {
//     console.log('Error');
//     console.error(error);
// });


export default asteroid;
