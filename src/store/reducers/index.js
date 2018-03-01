import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import record from './record'

export default combineReducers({
  counter,
  user,
  record
})
