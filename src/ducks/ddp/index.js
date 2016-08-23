import { combineReducers } from 'redux'
import collections from './collections'
import connection from './connection'
import handlers from './handlers'
import components from './components'

export default combineReducers({
  collections,
  connection,
  handlers,
  components
})
