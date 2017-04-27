import axios from 'axios'
import {API_ENDPOINT} from 'constants/common'

const index = _ => `${API_ENDPOINT}/login`

export default {
  login: data => axios.post(index(), data)
}
