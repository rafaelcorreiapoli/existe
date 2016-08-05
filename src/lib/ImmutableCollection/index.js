const INSERT = 'INSERT';
const REMOVE = 'REMOVE';
const UPDATE = 'UPDATE';
import { Map } from 'immutable';
export default class ImmutableCollection {
  constructor(name, asteroid, store) {
    this.name = name;
    this.asteroid = asteroid;
    this.store = store;
    //this._setupDdpListeners();
    this._setupActionTypes();
    this._setupReducer();

  }

  _setupActionTypes() {
    this.insertAT = `INSERT_${this.name}`;
    this.updateAT = `UPDATE_${this.name}`;
    this.removeAT = `REMOVE_${this.name}`;
  }

  setDispatchFunction(dispatch) {
    this.dispatch = dispatch;
    this._setupDdpListeners();
  }
  _setupDdpListeners() {
    this.asteroid.ddp.on('added', ({collection, id, fields}) => {
      if (collection === this.name) {
        this.dispatch(this._insertDoc({...fields, id}))
      }
    });

    this.asteroid.ddp.on('removed', ({collection, id}) => {
      if (collection === this.name) {
        this.dispatch(this._removeDoc(id))
      }
    });

    this.asteroid.ddp.on('changed', ({collection, id, fields}) => {
      if (collection === this.name) {
        this.dispatch(this._updateDoc(id, fields));
      }
    });
  }


  _insertDoc(doc) {
    return {
      type: this.insertAT,
      payload: {
        doc
      }
    }
  }


  _removeDoc(id) {
    return {
      type: this.removeAT,
      payload: {
        id
      }
    }
  }

  _updateDoc(id, fields) {
    return {
      type: this.updateAT,
      payload: {
        id,
        fields
      }
    }
  }

  _setupReducer() {
    this.reducer = (state = Map(), action) => {
      switch (action.type) {
        case this.insertAT:
          const id = action.payload.doc.id;
          return state.set(id, Map(action.payload.doc));
        break;
        case this.removeAT:
          return state.delete(action.payload.id)
        break;
        case this.updateAT:
          return state.update(action.payload.id, doc => doc.merge(action.payload.fields))
        break;
        default:
          return state;
      }
      return state
    }
  }

  getReducer() {
    return this.reducer
  }
}
