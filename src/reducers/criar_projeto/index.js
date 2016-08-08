import { CRIAR_PROJETO_SUCCESS, CRIAR_PROJETO_ERROR, START_CRIAR_PROJETO } from '../../actions';
import { List, Map } from 'immutable';


const criarProjeto = (state = Map({ loading: false, error: false, success: false }), action) => {
  switch (action.type) {
    case START_CRIAR_PROJETO:
      return state.merge({
        loading: true,
        error: false,
        success: false
      });
    break;
    case CRIAR_PROJETO_SUCCESS:
      return state.merge({
        loading: false,
        error: false,
        success: true
      })
    break;
    case CRIAR_PROJETO_ERROR:
      return state.merge({
        loading: false,
        error: action.payload.reason,
        success: false
      });
    break;
    default:
      return state;
  }
  return state
}

export default criarProjeto
