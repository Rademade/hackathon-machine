import axios from 'axios'
import {API_ENDPOINT} from 'constants/common'

const config = {
  headers: {
    'Authorization': localStorage.getItem('jwt')
  }
}

export default {
  query: () => axios.get(`${API_ENDPOINT}/hackathons`, config),
  update: (hackathon) => axios.put(`${API_ENDPOINT}/hackathons`, hackathon, config),
  delete: (id) => axios.delete(`${API_ENDPOINT}/hackathons/${id}`, config)
}
