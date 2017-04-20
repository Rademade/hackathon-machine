import axios from 'axios'
import {API_ENDPOINT} from 'constants'

const index = _ => `${API_ENDPOINT}/user_votes`
const show = id => `${API_ENDPOINT}/user_votes/${id}`

const config = {
  headers : {
    'Authorization' : localStorage.getItem('jwt')
  }
}

export default {
  create : data => axios.post(index(), data, config),
  update : data => axios.put(show(data.id), data, config),
}
