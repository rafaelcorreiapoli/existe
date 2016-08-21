const AUTHENTICATE = '/authenticate'
import axios from 'axios'

export default class API {
  constructor(baseURL, timeout = 1000) {
    this.client = axios.create({
      baseURL,
      timeout
    });
  }

  login({ username, email, password}, cb) {
    return this.client.post(AUTHENTICATE, {
        email,
        username,
        password
      })
      .then(response => {
        console.log(response)
        this.client.headers.common['Authorization'] = response
        cb(null, response)
      })
      .catch(err => {
        cb(err.response)
      });
  }

}
