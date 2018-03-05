
const baseUrl = 'http://47.93.242.215'

export default {
  user: {
    get: (id = 1066) => `${baseUrl}/wx/mockLogin?id=${id}`
  },
  todayStory: {
    get: (id = 40) => `${baseUrl}/user/getStoryById?id=${id}`
  },
  ossToken: {
    get: `${baseUrl}/auth/getOssSignature`
  }
}
