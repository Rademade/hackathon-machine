const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

export class AppSettings {
  static get PUBLIC_ENDPOINT() {
    if (process.env.NODE_ENV === 'production') {
      return window.location.origin;
    } else {
      return `http://${HOST}:${PORT}`;
    }
  }

  static get API_ENDPOINT() {
    return this.PUBLIC_ENDPOINT + '/api';
  }
}
