import { handleActions } from 'redux-actions'
import { GET_STORYLIST } from '../types/storyList'

export default handleActions({
  [GET_STORYLIST] (state, action) {
    let storySetId=action.payload.storySetId
    let storyList=action.payload.data
    let newStorySetList=state.storySetList.map(v=>{
      if(v.id == storySetId){
        v.storyList=storyList
      }
      return v
    })
    return {
      ...state,
      storyList:newStorySetList
    }
  }
})
