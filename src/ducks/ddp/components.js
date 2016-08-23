export const REGISTER_COMPONENT_SUBSCRIPTION = 'meteor/components/REGISTER_COMPONENT_SUBSCRIPTION';
export const UNREGISTER_COMPONENT = 'meteor/components/UNREGISTER_COMPONENT'
export const REGISTER_COMPONENT = 'meteor/components/REGISTER_COMPONENT'
export const REMOVE_COMPONENT = 'meteor/components/REMOVE_COMPONENT';
export const REMOVE_SUBSCRIPTION = 'meteor/components/REMOVE_SUBSCRIPTION';

import { unregisterHandler, decreaseHandlerCounter } from './handlers'
import { Map } from 'immutable'

const initialState = Map();

export default (state = initialState, { type, payload = {}}) => {
  switch (type) {
    case REGISTER_COMPONENT_SUBSCRIPTION:
      const { componentId, handlerId, subName }  = payload
      return state.setIn([componentId, subName], handlerId)
    break;
    case REMOVE_SUBSCRIPTION:
      return state.deleteIn([payload.componentId, payload.name])
    break;
    case REMOVE_COMPONENT:
      return state.delete(payload.componentId);
    break;
    case REGISTER_COMPONENT:
      return state.set(payload.componentId, Map())
    break;
    default:
      return state
  }
}

export const unregisterComponent = (componentId) => {
  return (dispatch, getState, asteroid) => {
    const state = getState()

    const component = state.ddp.components.get(componentId);
    component.forEach(handlerId => {
      if (state.ddp.handlers.getIn([handlerId, 'counter']) === 1) {
        asteroid.unsubscribe(handlerId)
        dispatch(unregisterHandler(handlerId))
      } else {
        dispatch (decreaseHandlerCounter(handlerId))
      }
    })

    dispatch(removeComponent(componentId))
  }
}

export const removeSubscription = (componentId, name) => {
  return {
    type: REMOVE_SUBSCRIPTION,
    payload: {
      componentId,
      name
    }
  }
}

export const removeComponent = (componentId) => {
  return {
    type: REMOVE_COMPONENT,
    payload: {
      componentId
    }
  }
}
export const registerComponent = ({componentId}) => {
  return {
    type: REGISTER_COMPONENT,
    payload: {
      componentId
    }
  }
}

export const registerComponentSubscription = (componentId, handlerId, subName) => {
  return {
    type: REGISTER_COMPONENT_SUBSCRIPTION,
    payload: {
      componentId,
      handlerId,
      subName
    }
  }
}
