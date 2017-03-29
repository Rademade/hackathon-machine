const initialState = {
  auth: {
    jwt: null,
    isPendingRequest: false,
    loginForm: {
      canSubmit: false
    }
  },
  hackathon: {
    hackstons: [{
      id: 1,
      topic: 'PostgreSQL',
      date: new Date(),
      speaker: 'Test 1',
      done: true,
      materials_link: 'http://ya.ru'
    }, {
      id: 2,
      topic: 'Websockets',
      date: new Date(),
      speaker: 'Test 2',
      done: true,
      materials_link: 'http://ya.ru'
    }, {
      id: 3,
      topic: 'React',
      date: new Date(),
      speaker: 'Test 3',
      done: false,
      materials_link: 'http://ya.ru'
    }]
  }
}

export default initialState
