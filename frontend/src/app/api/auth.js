import axios from 'axios'
import {PUBLIC_ENDPOINT} from 'constants/common'

const index = _ => `${PUBLIC_ENDPOINT}/login`

export default {
  login: data => axios.post(index(), data)
}
