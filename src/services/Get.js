import axios from 'axios'
export default {

  getData (api) {
    const configuration = {
      headers: {
        'content-type': 'application/json',
        'authorization': ''
      }
    }

    return axios.get(api, configuration)
      .then(request => {
        return request.data
      })
      .catch(err => {
        return err.response
      })
  }
}