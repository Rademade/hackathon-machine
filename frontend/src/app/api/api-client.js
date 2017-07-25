import { AppSettings } from 'settings';
import axios from 'axios';

const join = (...chunks) => chunks.join('/');

export class ApiClient {
  constructor(resourceRelativePath = '') {
    const endpoint = AppSettings.API_ENDPOINT + resourceRelativePath;

    this.query = _ => this.http.get(endpoint, this.config);
    this.get = id => this.http.get(join(endpoint, id), this.config);
    this.create = data => this.http.post(endpoint, data, this.config);
    this.update = data => this.http.put(join(endpoint, data.id), data, this.config);
    this.delete = id => this.http.delete(join(endpoint, id), this.config);
  }

  get http() {
    return axios;
  }

  get config() {
    return {
      headers: {
       'Authorization': `Bearer ${this.jwt}`
      }
    }
  }

  get jwt() {
    return localStorage.getItem('jwt');
  }
}
