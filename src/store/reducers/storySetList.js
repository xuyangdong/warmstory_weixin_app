import { handleActions } from 'redux-actions'
import { GET_STORYSETLIST, GET_STORYLIST, CREATEPLAYLIST } from '../types/storySetList'

export default handleActions({
  [GET_STORYSETLIST](state, action) {
    return action.payload.data.obj.map(v => ({
     ...v,
      storyList: []
    }))
  },
  [GET_STORYLIST] (state, action) {
    let storySetId=action.payload.storySetId
    let storyList=action.payload.data.obj
    return state.map(v=>{
      if(v.id == storySetId){
        v.storyList=storyList
      }
      return v
    })
  },
  [CREATEPLAYLIST] (state, action) {
    return [...state, {
      ...action.payload.data.obj,
      storyList: []
    }]
  }
},[])
