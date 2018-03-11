import wepy from 'wepy'
import api from '@/api'
import { GET_USERINFO } from '../types/user'
import { createAction } from 'redux-actions'

export const getUserInfo = createAction(GET_USERINFO, (jsonData) => {
  return new Promise(resolve => {
    wepy.request({
      url: api.user.get(),
      data: {
        code: jsonData.code,
        encryptedData: jsonData.encryptedData,
        iv: jsonData.iv
      },
      success: (data, statusCode, header) => {
        console.log(data)
        resolve({
          data: data.data
        })
      }
    })
  })
})
