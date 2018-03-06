
const baseUrl = 'https://www.warmtale.com'

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
