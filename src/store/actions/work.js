import wepy from 'wepy'
import api from '@/api'
import { GET_AFREERANDOMWORK, SET_WORK, PUBLISHWORK} from '../types/work'
import { createAction } from 'redux-actions'
import { getStore } from 'wepy-redux'

export const getAFreeRandomWork = createAction(GET_AFREERANDOMWORK, () => {
  let user = getStore().getState().user
  return new Promise(resolve => {
    wepy.request({
      url: api.work.get,
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

export const setPlayingWork = createAction(SET_WORK)

export const publishWork = createAction(PUBLISHWORK, (storyId, url, duration = '--/--', tagIdList = '') => {
  let user = getStore().getState().user
  return new Promise(resolve => {
    wepy.request({
      url: api.work.post,
      method: 'POST',
      header: {
        'Story-Access-Token': `${user.accessToken}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        storyId,
        url,
        tagIdList,
        duration
      },
      success: (data, statusCode, header) => {
        resolve({
          data: data.data
        })
      }
    })
  })
})
