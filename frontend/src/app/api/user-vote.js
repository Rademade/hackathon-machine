import axios from 'axios'
import {API_ENDPOINT} from 'constants'
import apiRouterConfig from 'api/config'

const index = _ => `${API_ENDPOINT}/api/user_votes`
const show = id => `${API_ENDPOINT}/api/user_votes/${id}`

export default {
  create : data => axios.post(index(), data, apiRouterConfig()),
  update : data => axios.put(show(data.id), data, apiRouterConfig()),
}
