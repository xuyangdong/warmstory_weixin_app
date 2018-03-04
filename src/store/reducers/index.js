import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import record from './record'
import todayStory from './record'

export default combineReducers({
  counter,
  user,
  record,
  todayStory
})
