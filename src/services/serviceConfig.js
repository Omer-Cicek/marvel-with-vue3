import axios from 'axios'
axios.defaults.timeout = 300000

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
axios.interceptors.request.use(function (config) {
    console.log("123");
  return config
}, function (error) {
    console.log("hata");
  // Do something with request error
  return Promise.reject(error);
})
axios.interceptors.response.use(function (response) {
    console.log("123");

    if (response.status === 200) {
  } 
  return response.data
}, function (error) {
    console.log("hata");
 if (error.response.status === 400) {
  }
  return error.response.data //Promise.reject(error)
})
