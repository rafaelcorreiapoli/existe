import { SET_FILTRO_STATUS } from '../../../actions';
const status = (state = '', action) => {
  switch (action.type) {
    case SET_FILTRO_STATUS:
      return action.payload.status;
    break;
    default:
      return state;
  }
}

export default status;
