import axios from 'axios'
axios.defaults.timeout = 300000

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
})
axios.interceptors.response.use(function (response) {
    if (response.status === 200) {
  } 
  return response.data
}, function (error) {
 if (error.response.status === 400) {
  }
  return error.response.data //Promise.reject(error)
})
