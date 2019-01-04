import wepy from 'wepy'
import api from '@/api'
import { GET_DONATEDWORK, GET_STAR, CHANGE_STARORDER } from '../types/activity'
import { createAction } from 'redux-actions'
import { getStore } from 'wepy-redux'

export const getDonatedWork = createAction(GET_DONATEDWORK, () => {
  let user = getStore().getState().user
  wepy.showLoading({
    title: '加载中',
  })
  return new Promise(resolve => {
    wepy.request({
      url: api.activity.donatedWork.get,
      header: {
        'Story-Access-Token': `${user.accessToken}`
      },
      success: (data, statusCode, header) => {
        wepy.hideLoading()
        resolve({
          data: {
            ...data.data
          }
        })
      },
      complete: (...args) => {
        console.log('complete', args)
      }
    })
  })
})

export const getStar = createAction(GET_STAR, () => {
  let user = getStore().getState().user
  wepy.showLoading({
    title: '加载中',
  })
  return new Promise(resolve => {
    wepy.request({
      url: api.activity.star.get,
      header: {
        'Story-Access-Token': `${user.accessToken}`
      },
      success: (data, statusCode, header) => {
        wepy.hideLoading()
        resolve({
          data: {
            ...data.data
          }
        })
      },
      complete: (...args) => {
        console.log('complete', args)
      }
    })
  })
})

export const changeStarOrder = createAction(CHANGE_STARORDER, index => Promise.resolve({
  data:index
}))
