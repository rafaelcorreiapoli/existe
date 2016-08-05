import { SET_FILTRO_CATEGORIA } from '../../../actions';
const categoria = (state = '', action) => {
  switch (action.type) {
    case SET_FILTRO_CATEGORIA:
      return action.payload.categoria;
    break;
    default:
      return state;
  }
}

export default categoria;
