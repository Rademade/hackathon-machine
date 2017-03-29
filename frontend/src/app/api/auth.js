import axios from 'axios'
import {API_ENDPOINT} from 'constants/common'

export default {
  login: (credentials) => {
    return axios.post(`${API_ENDPOINT}/auth`, credentials)
  }
}
