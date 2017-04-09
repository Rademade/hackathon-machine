import axios from 'axios'
import {API_ENDPOINT} from 'constants/common'

const config = {
  headers: {
    'Authorization': localStorage.getItem('jwt')
  }
}

export default {
  query: () => {
    return axios.get(`${API_ENDPOINT}/speakers`, config)
  }
}
