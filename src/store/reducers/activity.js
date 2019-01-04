import { handleActions } from 'redux-actions'
import { GET_DONATEDWORK, GET_STAR, CHANGE_STARORDER } from '../types/activity'

export default handleActions({
  [GET_DONATEDWORK] (state, action) {
    return {
      ...state,
      storyList: action.payload.data.obj
    }
  },
  [GET_STAR] (state, action) {
    return {
      ...state,
      star: action.payload.data.obj
    }
  },
  [CHANGE_STARORDER] (state, action) {
    console.log(state)
    let newState = {...state}
    let tmp = {
      ...newState.star[action.payload.data]
    }
    newState.star[action.payload.data] = {
      ...newState.star[1]
    }
    newState.star[1] = {
      ...tmp
    }
    return {
      ...newState,
    }
  }
}, {
  star: [],
  storyList: [{
    title: '名字_1.0',
    profile: '副标题或间接',
    icon: 'https://picsum.photos/20/20'
  },{
    title: '名字_1.0',
    profile: '副标题或间接',
    icon: 'https://picsum.photos/20/20'
  },{
    title: '名字_1.0',
    profile: '副标题或间接',
    icon: 'https://picsum.photos/20/20'
  },{
    title: '名字_1.0',
    profile: '副标题或间接',
    icon: 'https://picsum.photos/20/20'
  }]
})
