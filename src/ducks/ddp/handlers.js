import { Map } from 'immutable'
const SET_HANDLER_READY = 'ddp/handlers/SET_HANDLER_READY';
const REGISTER_HANDLER = 'ddp/handlers/REGISTER_HANDLER';
const UNREGISTER_HANDLER = 'ddp/handlers/UNREGISTER_HANDLER'
const INCREASE_HANDLER_COUNTER = 'ddp/handlers/INCREASE_HANDLER_COUNTER'
const DECREASE_HANDLER_COUNTER = 'ddp/handlers/DECREASE_HANDLER_COUNTER'

const initialState = Map()

export default (state = initialState, { type, payload = {}}) => {
  switch (type) {
    case REGISTER_HANDLER:
      return state.set(payload.handler.id, Map({
        handler: payload.handler,
        counter: 1,
        isReady: false,
        error: false
      }))
    break;
    case UNREGISTER_HANDLER:
      return state.delete(payload.handlerId);
    break;
    case DECREASE_HANDLER_COUNTER:
      return state.update(payload.handlerId, handler => handler.set('counter', handler.get('counter') - 1))
    break;
    case INCREASE_HANDLER_COUNTER:
      return state.update(payload.handlerId, handler => handler.set('counter', handler.get('counter') + 1))
    break;
    case SET_HANDLER_READY:
      const handlerId = payload.handlerId;
      return state.setIn([handlerId, 'isReady'], true)
    break;
    default:
      return state
  }
}

export const setHandlerReady = (handlerId) => {
  return {
    type: SET_HANDLER_READY,
    payload: {
      handlerId
    }
  }
}

export const registerHandler = (handler) => {
  return {
    type: REGISTER_HANDLER,
    payload: {
      handler,
    }
  }
}

export const increaseHandlerCounter = (handlerId) => {
  return {
    type: INCREASE_HANDLER_COUNTER,
    payload: {
      handlerId
    }
  }
}

export const unregisterHandler = (handlerId) => {
  return (dispatch, getState, asteroid) => {
    asteroid.unsubscribe(handlerId)
    dispatch({
      type: UNREGISTER_HANDLER,
      payload: {
        handlerId
      }
    })
  }
}

export const decreaseHandlerCounter = (handlerId) => {
  return {
    type: DECREASE_HANDLER_COUNTER,
    payload: {
      handlerId
    }
  }
}

export const setupHandler = (componentId, publication, params) => {
  return (dispatch, getState, asteroid) => {
    let handler;
    if (params) {
      handler = asteroid.subscribe(publication, params)
    } else {
      handler = asteroid.subscribe(publication)
    }

    const state = getState();
    const existingHandler = state.ddp.handlers.get(handler.id, false);

    if (!existingHandler) {
      dispatch(registerHandler(handler));

      handler.on('ready', () => {
        dispatch(setHandlerReady(handler.id))
      })
    } else {
      const hostComponent = state.ddp.subscriptions.get(componentId)
      const alreadyRegistered = hostComponent.find(handlerId => handlerId === handler.id)
      if (!alreadyRegistered) {
        dispatch(increaseHandlerCounter(handler.id))
      }
    }
    return handler.id
  }
}
