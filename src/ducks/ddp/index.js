import { combineReducers } from 'redux'
import collections from './collections'
import connection from './connection'
import handlers from './handlers'
import components from './components'
import user from './user'

export default combineReducers({
  collections,
  connection,
  handlers,
  components,
  user
})
