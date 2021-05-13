import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(
  (config) => {
    const token = window.accessToken ? window.accessToken : 'dummy_token'
    config.headers['Authorization'] = 'Bearer ' + token
    return config
  },
  (error) => {
    Promise.reject(console.error(error))
  }
)

export default axiosInstance

