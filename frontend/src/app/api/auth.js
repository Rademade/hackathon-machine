import { AppSettings } from 'settings';
import { ApiClient } from './api-client';

class AuthApiClient extends ApiClient {
  constructor(props) {
    super(props);

    this.signIn = (data) => this.http.post(`${AppSettings.PUBLIC_ENDPOINT}/sign_in`, data);
    this.signUp = (data) => this.http.post(`${AppSettings.PUBLIC_ENDPOINT}/sign_up`, data);
  }
}

export default new AuthApiClient('/login');
