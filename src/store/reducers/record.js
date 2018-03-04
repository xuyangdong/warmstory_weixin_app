import { handleActions } from 'redux-actions'
import { FINISH_RECORD } from '../types/record'

export default handleActions({
  [FINISH_RECORD] (state, action) {
    return {
      ...state,
      ...action.payload
    }
  }
}, {
  test: 'test4'
})
