import wepy from 'wepy'
import api from '@/api'
import { GET_USERINFO } from '../types/user'
import { createAction } from 'redux-actions'

export const getUserInfo = createAction(GET_USERINFO, () => {
  return new Promise(resolve => {
    wepy.request({
      url: api.user.get(),
      success: (data, statusCode, header) => {
        resolve({
          data: data.data
        })
      }
    })
  })
})
