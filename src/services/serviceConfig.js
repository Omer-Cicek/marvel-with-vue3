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
    // vs.notify({
    //   time: 8800,
    //   title: 'Uyarı',
    //   text: response.data.Result,
    //   iconPack: 'feather',
    //   icon: 'icon-alert-circle',
    //   color: 'warning'
    // })
  } 
  return response.data
}, function (error) {
 if (error.response.status === 400) {
    // vs.notify({
    //   time: 8800,
    //   title: 'Hata',
    //   text: JSON.parse(error.response.data.Result).Message || error.response.data.Result,
    //   iconPack: 'feather',
    //   icon: 'icon-alert-circle',
    //   color: 'warning'
    // })
  }
  return error.response.data //Promise.reject(error)
})
