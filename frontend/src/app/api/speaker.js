import axios from 'axios'
import {API_ENDPOINT} from 'constants'
import apiRouterConfig from 'api/config'

const index = _ => `${API_ENDPOINT}/users`
const show = id => `${API_ENDPOINT}/users/${id}`

export default {
  query: _ => axios.get(index(), apiRouterConfig()),
  get: id => axios.get(show(id), apiRouterConfig()),
  create: data => axios.post(index(), data, apiRouterConfig()),
  update: data => axios.put(show(data.id), data, apiRouterConfig()),
  delete: id => axios.delete(show(id), apiRouterConfig())
}
