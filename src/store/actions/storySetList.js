import wepy from 'wepy'
import api from '@/api'
import { GET_STORYSETLIST } from '../types/storySetList'
import { createAction } from 'redux-actions'
import {
  connect
} from 'wepy-redux'

@connect({
  user: state => state.user
})

export const getStorySetList = createAction(GET_STORYSETLIST, (page, pageSize) => {
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