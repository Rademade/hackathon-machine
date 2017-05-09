import {AppSettings} from 'settings'
import axios from 'axios'

const config = {
  headers: {
   'Authorization': 'Bearer ' + localStorage.getItem('jwt')
  }
}

const join = (...chunks) => chunks.join('/')

export class ApiClient {
  constructor(resourceRelativePath = '') {
    const endpoint = AppSettings.API_ENDPOINT + resourceRelativePath

    this.http = axios

    this.query = _ => this.http.get(endpoint, config)
    this.get = id => this.http.get(join(endpoint, id), config)
    this.create = data => this.http.post(endpoint, data, config)
    this.update = data => this.http.put(join(endpoint, data.id), data, config)
    this.delete = id => this.http.delete(join(endpoint, id), config)
  }
}
