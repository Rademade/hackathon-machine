import axios from 'axios'
import {API_ENDPOINT} from 'constants/common'

export default {
  query: () => {
    return axios.get(`${API_ENDPOINT}/topics`)
  }
}
