const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 1323;

export class AppSettings {
  static get PUBLIC_ENDPOINT() {
    if (process.env.NODE_ENV === 'production') {
      return window.location.origin + '/api/public';
    } else {
      return `http://${HOST}:${PORT}/api/public`;
    }
  }

  static get API_ENDPOINT() {
    if (process.env.NODE_ENV === 'production') {
      return window.location.origin + '/api/private';
    } else {
      return `http://${HOST}:${PORT}/api/private`;
    }
  }
}
