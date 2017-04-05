const initialState = {
  authApp: {
    jwt: null,
    isPendingRequest: false,
    isAuthenticated: false,
    loginForm: {
      canSubmit: false
    }
  },
  hackathonApp: {
    hackathons: [{
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
  },
  speakerApp: {
    speakers: [{
      id: 1,
      full_name: 'Alexander Kozlyakov'
    }, {
      id: 2,
      full_name: 'Denys Voriashyn'
    }, {
      id: 3,
      full_name: 'Mikhail Paliukh'
    }, {
      id: 4,
      full_name: 'Mikhail Gubenko'
    }, {
      id: 5,
      full_name: 'Yaroslav Senishyn'
    }],
  },
  topicApp: {
    topics: [{
      id: 1,
      title: 'React'
    }, {
      id: 2,
      title: 'Go'
    }, {
      id: 3,
      title: 'Ruby'
    }, {
      id: 4,
      title: 'Elixir'
    }, {
      id: 5,
      title: 'Phoenix'
    }]
  }
}

export default initialState
