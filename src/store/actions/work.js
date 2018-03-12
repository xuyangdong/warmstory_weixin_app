import wepy from 'wepy'
import api from '@/api'
import { GET_AFREERANDOMWORK, SET_WORK, PUBLISHWORK} from '../types/work'
import { createAction } from 'redux-actions'
import { getStore } from 'wepy-redux'

export const getAFreeRandomWork = createAction(GET_AFREERANDOMWORK, () => {
  let user = getStore().getState().user
  return new Promise(resolve => {
    wepy.request({
      url: api.work.get,
      header: {
        'Story-Access-Token': `${user.accessToken}`
      },
      success: (data, statusCode, header) => {
        resolve({
          data: {
            ...data.data,
            playingType: 'random'
          }
        })
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
    return {
      ...storySetList[newSequenceInWork[0]].storyList[newSequenceInWork[1]],
      playingType: 'sequence',
      sequence: newSequenceInWork
    }
  } else {
    //指定播放
    return {
      ...storySetList[sequence[0]].storyList[sequence[1]],
      playingType: 'sequence',
      sequence: sequence
    }
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
      }
    })
  })
})
