const apiRouterConfig = function() {
  return {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
  }
}

export default apiRouterConfig
