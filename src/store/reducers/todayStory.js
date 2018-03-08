import { handleActions } from 'redux-actions'
import { GET_TODAYSTORY } from '../types/todayStory'

export default handleActions({
  [GET_TODAYSTORY] (state, action) {
    return {
      ...state,
      ...action.payload.data.obj
    }
  }
}, {
})
