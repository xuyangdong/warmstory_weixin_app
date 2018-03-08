import wepy from 'wepy'
import api from '@/api'
import { GET_STORYLIST } from '../types/storyList'
import { createAction } from 'redux-actions'

export const getStoryList = createAction(GET_STORYLIST, (playListId,page,pageSize) => {
  return new Promise(resolve => {
    wepy.request({
      url: api.storyList.get(playListId,page,pageSize),
      success: (data, statusCode, header) => {
        resolve({
          data: data.data
        })
      }
    })
  })
})