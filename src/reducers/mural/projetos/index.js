import { ADD_PROJETO, REMOVE_PROJETO, UPDATE_PROJETO } from '../../../actions';
import { List, Map } from 'immutable';


const projetos = (state = Map(), action) => {
  switch (action.type) {
    case ADD_PROJETO:
      const id = action.payload.projeto.id;
      return state.set(id, Map(action.payload.projeto));
    break;
    case REMOVE_PROJETO:
      return state.delete(action.payload.id)
    break;
    case UPDATE_PROJETO:
      return state.update(action.payload.id, projeto => projeto.merge(action.payload.fields))
    break;
    default:
      return state;
  }
  return state
}

export default projetos
