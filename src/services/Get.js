import axios from 'axios'

  export function getData (api) {  //request func that uses axios
    const configuration = {
      headers: {
        'content-type': 'application/json; charset=utf-8'
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