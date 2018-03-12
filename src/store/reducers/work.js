import { handleActions } from 'redux-actions'
import { GET_AFREERANDOMWORK, SET_WORK,  } from '../types/work'

export default handleActions({
  [GET_AFREERANDOMWORK] (state, action) {
    return {
      ...state,
      ...action.payload.data.obj,
      playingType: action.payload.data.playingType
    }
  },
  [SET_WORK] (state, action) {
    return {
      ...state,
      ...action.payload
    }
  }
}, {
})
