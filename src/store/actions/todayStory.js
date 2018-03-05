import wepy from 'wepy'
import api from '@/api'
import { GET_TODAYSTORY } from '../types/todayStory'
import { createAction } from 'redux-actions'

export const getTodayStory = createAction(GET_TODAYSTORY, () => {
  return new Promise(resolve => {
    wepy.request({
      url: api.todayStory.get(),
      success: (data, statusCode, header) => {
        resolve({
          data: data.data
        })
      }
    })
  })
})
