
const baseUrl = 'http://47.93.242.215'

export default {
  user: {
    get: `${baseUrl}/wx/mockLogin?id=1066`
  },
  todayStory: {
    getTodayStory: `${baseUrl}/user/getStoryById?id=40`
  },
  ossToken: {
    get: `${baseUrl}/auth/getOssSignature`
  }
}
