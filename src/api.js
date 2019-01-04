
const baseUrl = 'https://www.warmtale.com'

export default {
  user: {
     check: (id = 1066) => `${baseUrl}/user/wxAppletLoginByWeChat`,
     get: `${baseUrl}/user/getUserSelfInfo`
    // get: (id = 1066) => `${baseUrl}/wx/mockLogin?id=1066`
  },
  todayStory: {
    get: `${baseUrl}/user/getRandomStoryList`
  },
  ossToken: {
    get: `${baseUrl}/auth/getOssSignature`
  },
  storyList: {
    get: (playList = -1, page = 0, pageSize = 30) =>
      `${baseUrl}/wx/getWorksListByPlayListIdByPage?playListId=${playList}&page=${page}&pageSize=${pageSize}`
  },
  storySet: {
    get: (page = 0, pageSize = 30) =>
      `${baseUrl}/wx/getPlayListsByPage?page=${page}&pageSize=${pageSize}`
  },
  work: {
    get: `${baseUrl}/user/getAFreeRandomWorks`,
    post: `${baseUrl}/user/v4/publishWorks`,
    delete: `${baseUrl}/user/deleteWorks`,
    query: worksId => `${baseUrl}/user/getShareWorksById?id=${worksId}`,
    like: `${baseUrl}/user/likeWorks`,
    unlike: `${baseUrl}/user/unlikeWorks`
  },
  playList: {
    post: `${baseUrl}/user/playList/newPlayList`
  },
  comment: {
    get: (page, pageSize, workId) => `${baseUrl}/user/work/review/getMainWorkReviewsByPage?page=${page}&pageSize=${pageSize}&workId=${workId}`,
    post: `${baseUrl}/user/work/review/addReview`,
    delete: `${baseUrl}/user/work/review/deleteReviewByUser`,
    like: `${baseUrl}/user/work/review/likeWorkReview`,
    unlike: `${baseUrl}/user/work/review/unLikeWorkReview`
  },
  activity: {
    donatedWork:{
      get: `${baseUrl}/user/donate/getDonatedWorks?page=0&pageSize=100`
    },
    star: {
      get: `${baseUrl}/user/donate/getStars`
    }
  }
}
