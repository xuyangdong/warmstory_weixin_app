import wepy from 'wepy'
import api from '@/api'
import { GET_USERINFO } from '../types/user'
import { createAction } from 'redux-actions'

export const getUserInfo = createAction(GET_USERINFO, (id) => {
  return new Promise(resolve => {
    wepy.request({
      url: api.user.get(id),
      success: (data, statusCode, header) => {
        resolve({
          data: data.data
        })
      }
    })
  })
})
