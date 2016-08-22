import { Map } from 'immutable'
export const SET_CONNECTION_STATE = 'ddp/connection/SET_CONNECTION_STATE';
export const REGISTER_DDP_CLIENT = 'ddp/connection/REGISTER_DDP_CLIENT';

const initialState = Map({
  connected: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONNECTION_STATE:
      const { connected } = action.payload
      return state.set('connected', connected);
    break;
    case REGISTER_DDP_CLIENT:
      const { client } = action.payload
      return state.set('ddp', client)
    break;
    default:
      return state
  }
}

export const setConnectionState = (connected) => {
  return {
    type: SET_CONNECTION_STATE,
    payload: {
      connected
    }
  }
}

export const registerDdpClient = (client) => {
  return {
    type: REGISTER_DDP_CLIENT,
    payload: {
      client
    }
  }
}
