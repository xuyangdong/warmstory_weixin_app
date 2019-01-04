import wepy from 'wepy'
import api from '@/api'
import { GET_USERINFO } from '../types/user'
import { createAction } from 'redux-actions'

export const getUserInfo = createAction(GET_USERINFO, (jsonData) => {
  wepy.showLoading({
    title: '登录中。。。'
  })
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
            wepy.hideLoading()
            resolve({
              data: args[0].data
            })
          },
          fail: () => {
            wepy.hideLoading()
            wepy.showToast({
              title: '登录失败'
            })
          }
        })
      }
    })
  })
})
