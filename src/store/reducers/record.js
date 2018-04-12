import { handleActions } from 'redux-actions'
import { FINISH_RECORD,CLEAN_RECORD } from '../types/record'

export default handleActions({
  [FINISH_RECORD] (state, action) {
    return {
      ...state,
      ...action.payload
    }
  },
  [CLEAN_RECORD] (state, action) {
    return {}
  }
}, {})
