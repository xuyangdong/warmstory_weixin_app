
const baseUrl = 'https://www.warmtale.com'

export default {
  user: {
    // get: (id = 1066) => `${baseUrl}/user/wxAppletLoginByWeChat`
    get: (id = 1066) => `${baseUrl}/wx/mockLogin?id=1066`
  },
  todayStory: {
    get: `${baseUrl}/user/getRandomStoryList`
  },
  ossToken: {
    get: `${baseUrl}/auth/getOssSignature`
  },
  storyList: {
    get: (playList = -1, page = 0, pageSize = 30) =>
      `${baseUrl}/user/playList/getWorksListByPlayListIdByPage?playListId=${playList}&page=${page}&pageSize=${pageSize}`
  },
  storySet: {
    get: (page = 0, pageSize = 30) =>
      `${baseUrl}/user/playList/getPlayListsByPage?page=${page}&pageSize=${pageSize}`
  }
}
