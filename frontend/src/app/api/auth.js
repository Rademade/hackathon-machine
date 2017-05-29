import { AppSettings } from 'settings';
import { ApiClient } from './api-client';

class AuthApiClient extends ApiClient {
  constructor(props) {
    super(props);

    this.login = data => this.http.post(`${AppSettings.PUBLIC_ENDPOINT}/login`, data);
  }
}

export default new AuthApiClient('/login');
