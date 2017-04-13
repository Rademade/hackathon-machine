import axios from 'axios'
import {API_ENDPOINT} from 'constants'

const index = _ => `${API_ENDPOINT}/topics`
const show = id => `${API_ENDPOINT}/topics/${id}`

const config = {
  headers: {
    'Authorization': localStorage.getItem('jwt')
  }
}

export default {
  query: _ => axios.get(index(), config),
  get: id => axios.get(show(id), config),
  create: data => axios.post(index(), data, config),
  update: data => axios.put(show(data.id), data, config),
  delete: id => axios.delete(show(id), config)
}
