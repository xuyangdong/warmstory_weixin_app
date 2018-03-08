import wepy from 'wepy'
import api from '@/api'
import { GET_STORYSETLIST, GET_STORYLIST } from '../types/storySetList'
import { createAction } from 'redux-actions'
import {
  getStore
} from 'wepy-redux'

export const getStorySetList = createAction(GET_STORYSETLIST, (page, pageSize) => {
  let user = getStore().getState().user
  return new Promise(resolve => {
    wepy.request({
      url: api.storySet.get(page, pageSize),
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

export const getStoryList = createAction(GET_STORYLIST, (playListId,page,pageSize) => {
  let user = getStore().getState().user
  return new Promise(resolve => {
    wepy.request({
      url: api.storyList.get(playListId,page,pageSize),
      header: {
        'Story-Access-Token': `${user.accessToken}`
      },
      success: (data, statusCode, header) => {
        resolve({
          data: data.data,
          storySetId: playListId
        })
      }
    })
  })
})
