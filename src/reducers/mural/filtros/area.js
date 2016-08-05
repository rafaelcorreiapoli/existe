import { SET_FILTRO_AREA } from '../../../actions';
const area = (state = '', action) => {
  switch (action.type) {
    case SET_FILTRO_AREA:
      return action.payload.area
    break;
    default:
      return state;
  }
}

export default area;
