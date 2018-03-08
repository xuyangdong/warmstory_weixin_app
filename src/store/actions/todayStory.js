import wepy from 'wepy'
import api from '@/api'
import { GET_TODAYSTORY } from '../types/todayStory'
import { createAction } from 'redux-actions'
import { getStore } from 'wepy-redux'

export const getTodayStory = createAction(GET_TODAYSTORY, () => {
  let user = getStore().getState().user
  return new Promise(resolve => {
    wepy.request({
      url: api.todayStory.get,
      header: {
        'Story-Access-Token': `${user.accessToken}`
      },
      success: (data, statusCode, header) => {
        resolve({
          data: data.data
        })
      }
    })
  })
})
