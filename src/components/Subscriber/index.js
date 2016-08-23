import React, { PropTypes } from 'react';
import { registerComponent, unregisterComponent, registerComponentSubscription } from '../../ducks/ddp/components';
import { setupHandler, unregisterHandler, decreaseHandlerCounter} from '../../ducks/ddp/handlers'
import { removeSubscription } from '../../ducks/ddp/components';

export default (ComposedComponent) => {
  class Enchancer extends React.Component {
    componentWillMount() {
      const componentId = this._reactInternalInstance._rootNodeID
      this.componentId = componentId
      this.context.store.dispatch(registerComponent({
        componentId
      }))

      this.isSubsReady = this.isSubsReady.bind(this)
      this.subscribe = this.subscribe.bind(this)
      this.unsubscribe = this.unsubscribe.bind(this)

    }

    componentWillUnmount() {
      this.context.store.dispatch(unregisterComponent(this.componentId))
    }

    isSubsReady(name){
      const state = this.context.store.getState()
      const handlerId = state.ddp.components.getIn([this.componentId, name], false);
      if (!handlerId) return true;
      return state.ddp.handlers.getIn([handlerId, 'isReady'], true);
    }

    subscribe({name, publication, params }) {
      const dispatch = this.context.store.dispatch;
      const handlerId = dispatch(setupHandler(this.componentId, publication, params))
      dispatch(registerComponentSubscription(this.componentId, handlerId, name))
    }

    unsubscribe(name) {
      const state = this.context.store.getState();
      const dispatch = this.context.store.dispatch;

      const handlerId = state.ddp.components.getIn([this.componentId, name]);
      if (state.ddp.handlers.getIn([handlerId, 'counter']) === 1) {
        dispatch(unregisterHandler(handlerId))
      } else {
        dispatch (decreaseHandlerCounter(handlerId))
      }

      dispatch(removeSubscription(this.componentId, name))
    }
    render() {
      return <ComposedComponent
        {...this.props}
        isSubsReady={this.isSubsReady}
        subscribe={this.subscribe}
        unsubscribe={this.unsubscribe}
        componentId={this.componentId} />
    }
  }

  Enchancer.contextTypes = {
    store: PropTypes.object
  }

  return Enchancer
}
