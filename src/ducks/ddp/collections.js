import { Map } from 'immutable'
const INSERT = 'ddp/collections/INSERT';
const REMOVE = 'ddp/collections/REMOVE';
const UPDATE = 'ddp/collections/UPDATE';


import { setConnectionState } from './connection'
import { userLoggedIn, userLoggedOut } from './user'

const initialState = Map();

export default (state = initialState, { type, payload = {}}) => {
  const {id, collection, doc, fields} = payload;

  switch (type) {
    case INSERT:
      return state.setIn([collection, id], Map({...doc, _id: id}));
    break;
    case REMOVE:
      return state.deleteIn([collection, id])
    break;
    case UPDATE:
      return state.updateIn([collection, id], doc => doc.merge(fields))
    break;
    default:
      return state;
  }
}


export const insertDoc = ({doc, id, collection}) => {
  return {
    type: INSERT,
    payload: {
      id,
      collection,
      doc
    }
  }
}


export const removeDoc = ({id, collection}) => {
  return {
    type: REMOVE,
    payload: {
      collection,
      id
    }
  }
}

export const updateDoc = ({id, collection, fields}) => {
  return {
    type: UPDATE,
    payload: {
      collection,
      id,
      fields
    }
  }
}

export const setupDdpListeners = () =>
  (dispatch, getState, asteroid) => {
    asteroid.ddp.on('added', ({collection, id, fields}) => {
      dispatch(insertDoc({
        doc: {...fields, id},
        id,
        collection,
      }))
    });

    asteroid.ddp.on('removed', ({collection, id}) => {
      dispatch(removeDoc({
        collection,
        id
      }))
    });

    asteroid.ddp.on('changed', ({collection, id, fields}) => {
      dispatch(updateDoc({
        id,
        collection,
        fields
      }));
    });

    asteroid.ddp.on('connected', (e) => {
      dispatch(setConnectionState(true));
    })

    asteroid.on('loggedIn', (userId) => {
      dispatch(userLoggedIn(userId))
    })

    asteroid.on('loggedOut', (e) => {
      console.log(e)
      console.log(asteroid.userId)
      dispatch(userLoggedOut(asteroid.userId))
    })
  }
