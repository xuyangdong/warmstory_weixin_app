import { handleActions } from 'redux-actions'
import { GET_USERINFO } from '../types/user'

export default handleActions({
  [GET_USERINFO] (state, action) {
    return {
      ...state,
      ...action.payload.data.obj
    }
  }
}, {
})
