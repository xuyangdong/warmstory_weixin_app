import wepy from 'wepy'
import api from '@/api'
import { GET_USERINFO } from '../types/user'
import { createAction } from 'redux-actions'

export const getUserInfo = createAction(GET_USERINFO, (jsonData) => {
  return new Promise(resolve => {
    wepy.request({
      url: api.user.check(),
      data: {
        code: jsonData.code,
        encryptedData: jsonData.encryptedData,
        iv: jsonData.iv
      },
      success: (data, statusCode, header) => {
        wepy.request({
          url: api.user.get,
          method: 'POST',
          header: {
            'Story-Access-Token': data.data.obj.accessToken
          },
          success: (...args) => {
            resolve({
              data: args[0].data
            })
          }
        })
      }
    })
  })
})
