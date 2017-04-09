import axios from 'axios'
import {API_ENDPOINT} from 'constants/common'

const config = {
  headers: {
    'Authorization': localStorage.getItem('jwt')
  }
}

export default {
  login: (credentials) => axios.post(`${API_ENDPOINT}/auth`, credentials, config)
}
