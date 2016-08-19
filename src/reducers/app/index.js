import { SET_DRAWER_OPEN } from '../../actions/app';
import { List, Map } from 'immutable';
const initialState = Map({
  drawerOpen: false
})

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRAWER_OPEN:
      return state.set('drawerOpen', action.payload.open)
    break;
    default:
      return state;
  }
}

export default app
