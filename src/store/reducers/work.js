import { handleActions } from 'redux-actions'
import { GET_AFREERANDOMWORK, SET_WORK, GET_WORKBYID, LIKE_WORK, UNLIKE_WORK, ADD_A_COMMENT, DELETE_A_COMMENT  } from '../types/work'

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
  },
  [GET_WORKBYID] (state, action) {
    return action.payload.data.obj?{
      ...state,
      ...action.payload.data.obj,
      playingType: action.payload.data.playingType
    }:{}
  },
  [LIKE_WORK] (state, action) {
    return {
      ...state,
      like: true,
      likeCount: !isNaN(state.likeCount)? state.likeCount + 1 : 0
    }
  },
  [UNLIKE_WORK] (state, action) {
    return {
      ...state,
      like: false,
      likeCount: !isNaN(state.likeCount)? state.likeCount - 1 : 0
    }
  },
  [ADD_A_COMMENT] (state, action) {
    return {
      ...state,
      reviewCount: state.reviewCount + 1
    }
  },
  [DELETE_A_COMMENT] (state, action) {
    return {
      ...state,
      reviewCount: action.payload
    }
  }
}, {
})
