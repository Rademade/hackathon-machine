import axios from 'axios'
import {API_ENDPOINT} from 'constants/common'

const index = _ => `${API_ENDPOINT}/auth`

const config = {
  headers: {
    'Authorization': localStorage.getItem('jwt')
  }
}

export default {
  login: data => axios.post(index(), data, config)
}
