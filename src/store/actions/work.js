import wepy from 'wepy'
import api from '@/api'
import { GET_AFREERANDOMWORK, SET_WORK, PUBLISHWORK, DELETE_WORK, GET_WORKBYID, LIKE_WORK, UNLIKE_WORK, ADD_A_COMMENT, DELETE_A_COMMENT} from '../types/work'
import { createAction } from 'redux-actions'
import { getStore } from 'wepy-redux'

export const getAFreeRandomWork = createAction(GET_AFREERANDOMWORK, () => {
  let user = getStore().getState().user
  wepy.showLoading({
    title: '加载中',
  })
  return new Promise(resolve => {
    wepy.request({
      url: api.work.get,
      header: {
        'Story-Access-Token': `${user.accessToken}`
      },
      success: (data, statusCode, header) => {
        wepy.hideLoading()
        resolve({
          data: {
            ...data.data,
            playingType: 'random'
          }
        })
      },
      complete: (...args) => {
        console.log('complete', args)
      }
    })
  })
})

export const setPlayingWork = createAction(SET_WORK, (sequence) => {
  let storySetList = getStore().getState().storySetList
  let work = getStore().getState().work
  if (!sequence) {
    // 下一首，从state中取出sequence，获取下一首
    let sequenceInWork = work.sequence || [0, 0]
    // 取出当前sequence所指向的storySet
    let currentStorySet = storySetList[sequenceInWork[0]] || {storyList: []}
    let newSequenceInWork = [sequenceInWork[0], sequenceInWork[1] >= (currentStorySet.storyList.length - 1) ? 0 : (sequenceInWork[1] + 1)]
    // 根据指定的sequence找到新的故事
    return Promise.resolve({
      ...storySetList[newSequenceInWork[0]].storyList[newSequenceInWork[1]],
      playingType: 'sequence',
      sequence: newSequenceInWork
    })
  } else {
    //指定播放
    return Promise.resolve({
      ...storySetList[sequence[0]].storyList[sequence[1]],
      playingType: 'sequence',
      sequence: sequence
    })
  }
})

export const publishWork = createAction(PUBLISHWORK, (storyId, url, duration = '--/--', tagIdList = '') => {
  let user = getStore().getState().user
  return new Promise(resolve => {
    wepy.request({
      url: api.work.post,
      method: 'POST',
      header: {
        'Story-Access-Token': `${user.accessToken}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        storyId,
        url,
        tagIdList,
        duration
      },
      success: (data, statusCode, header) => {
        resolve({
          data: data.data
        })
      },
      complete: (...args) => {
        console.log('complete', args)
      }
    })
  })
})

export const deleteWork = createAction(DELETE_WORK, (sequence) => {
  let storySetList = getStore().getState().storySetList
  let work = storySetList[sequence[0]].storyList[sequence[1]]
  let user = getStore().getState().user
  return new Promise(resolve => {
    wepy.request({
      url: api.work.delete,
      method: 'POST',
      header: {
        'Story-Access-Token': `${user.accessToken}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        worksId: work.id
      },
      success: (data, statusCode, header) => {
        if (data.data.status === 1) {
          // 删除成功
          resolve({
            data: {
              storySetIndex: sequence[0],
              workIndex: sequence[1]
            }
          })
        } else {
        }
      },
      complete: (...args) => {
        console.log('complete', args)
      }
    })
  })
})

export const getWorkById = createAction(GET_WORKBYID, (id, userInfo) => {
  let user = userInfo || getStore().getState().user
  return new Promise(resolve => {
    wepy.request({
      url: api.work.query(id),
      header: {
        'Story-Access-Token': `${user.accessToken}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (data, statusCode, header) => {
        console.log('invoke success', data)
        if (data.data.status === 1) {
          resolve({
            data: {
              ... data.data,
              'playingType': 'random'
            }
          })
        } else {
          resolve({
            data: {
              ... data.data,
              'playingType': 'random'
            }
          })
        }
      },
      complete: (...args) => {
        console.log('complete', args)
      }
    })
  })
})

export const likeWork = createAction(LIKE_WORK, (worksId) => {
  let user = getStore().getState().user
  return new Promise(resolve => {
    wepy.request({
      method: 'POST',
      url: api.work.like,
      header: {
        'Story-Access-Token': `${user.accessToken}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        worksId
      },
      success: (data, statusCode, header) => {
        console.log('invoke success', data)
        if (data.data.status === 1) {
          resolve()
          wepy.showToast({
            icon: 'none',
            title: '点赞成功'
          })
        } else {
        }
      },
      complete: (...args) => {
        console.log('complete', args)
      }
    })
  })
})

export const unLikeWork = createAction(UNLIKE_WORK, (worksId) => {
  let user = getStore().getState().user
  return new Promise(resolve => {
    wepy.request({
      method: 'POST',
      url: api.work.unlike,
      header: {
        'Story-Access-Token': `${user.accessToken}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        worksId
      },
      success: (data, statusCode, header) => {
        console.log('invoke success', data)
        if (data.data.status === 1) {
          resolve()
          wepy.showToast({
            icon: 'none',
            title: '取消点赞'
          })
        } else {
        }
      },
      complete: (...args) => {
        console.log('complete', args)
      }
    })
  })
})

export const addAComment = createAction(ADD_A_COMMENT, res => {
  console.log('addAComment')
  return Promise.resolve(res)
})
export const deleteAComment = createAction(DELETE_A_COMMENT, (count) => Promise.resolve(count))
