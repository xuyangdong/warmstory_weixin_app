import { handleActions } from 'redux-actions'
import { GET_STORYSETLIST } from '../types/storySetList'

export default handleActions({
  [GET_STORYSETLIST](state, action) {
    return {
      storySetList: action.payload.data.map(v => {
       ...v,
        storyList: []
      })
     }
  }
})