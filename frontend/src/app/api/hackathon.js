import axios from 'axios'
import {API_ENDPOINT} from 'constants/common'

export default {
  query: () => axios.get(`${API_ENDPOINT}/hackathons`),
  update: (hackathon) => axios.put(`${API_ENDPOINT}/hackathons`, hackathon)
}
