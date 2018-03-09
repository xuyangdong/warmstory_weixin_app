import wepy from 'wepy'
import api from '@/api'
import { GET_AFREERANDOMWORK, SET_WORK } from '../types/work'
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
