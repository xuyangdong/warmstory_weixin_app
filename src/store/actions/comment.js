import wepy from 'wepy'
import api from '@/api'
import { getStore } from 'wepy-redux'

export const getCommentList = (page, pageSize, workId) => {
  let user = getStore().getState().user
  wepy.showLoading({
    title: '加载中',
  })
  return new Promise(resolve => {
    wepy.request({
      url: api.comment.get(page, pageSize, workId),
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
}

export const addComment = (workId, parentId, toUserId, content) => {
  let user = getStore().getState().user
  wepy.showLoading({
    title: '提交中',
  })
  return new Promise(resolve => {
    wepy.request({
      url: api.comment.post,
      method: 'POST',
      header: {
        'Story-Access-Token': `${user.accessToken}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        workId,
        parentId,
        toUserId,
        content
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
}

export const deleteComment = (reviewId) => {
  let user = getStore().getState().user
  wepy.showLoading({
    title: '删除中',
  })
  return new Promise(resolve => {
    wepy.request({
      url: api.comment.delete,
      method: 'POST',
      header: {
        'Story-Access-Token': `${user.accessToken}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        reviewId
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
}

export const appreciateComment = (reviewId) => {
  let user = getStore().getState().user
  wepy.showLoading({
    title: '删除中',
  })
  return new Promise(resolve => {
    wepy.request({
      url: api.comment.like,
      method: 'POST',
      header: {
        'Story-Access-Token': `${user.accessToken}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        reviewId
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
}

export const deAppreciateComment = (reviewId) => {
  let user = getStore().getState().user
  wepy.showLoading({
    title: '删除中',
  })
  return new Promise(resolve => {
    wepy.request({
      url: api.comment.unlike,
      method: 'POST',
      header: {
        'Story-Access-Token': `${user.accessToken}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        reviewId
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
}
