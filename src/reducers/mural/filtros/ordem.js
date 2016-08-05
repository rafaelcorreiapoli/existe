import { SET_FILTRO_ORDEM } from '../../../actions';
const ordem = (state = '', action) => {
  switch (action.type) {
    case SET_FILTRO_ORDEM:
      return action.payload.ordem
    break;
    default:
      return state;
  }
}

export default ordem;
