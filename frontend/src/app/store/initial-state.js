const initialState = {
  authApp: {
    jwt: null,
    isPendingRequest: false,
    isAuthenticated: false,
    isAdmin: true,
    loginForm: {
      isAvailableSubmit: false
    }
  },
  hackathonApp: {
    hackathons: [{
      id: 1,
      topic: 'PostgreSQL',
      date: new Date(),
      speaker: 'Alexander Kozlyakov',
      is_done: true,
      materials_link: 'http://ya.ru'
    }, {
      id: 2,
      topic: 'Websockets',
      date: new Date(),
      speaker: 'Denys Voriashyn',
      is_done: true,
      materials_link: 'http://ya.ru'
    }, {
      id: 3,
      topic: 'React',
      date: new Date(),
      speaker: 'Mikhail Paliukh',
      is_done: false,
      materials_link: 'http://ya.ru'
    }, {
      id: 4,
      topic: 'Go',
      date: new Date(),
      speaker: 'Mikhail Gubenko',
      is_done: false,
      materials_link: 'http://ya.ru'
    }, {
      id: 5,
      topic: 'Elixir',
      date: new Date(),
      speaker: 'Yaroslav Senishyn',
      is_done: false,
      materials_link: 'http://ya.ru'
    }, {
      id: 6,
      topic: 'Rx JS',
      date: new Date(),
      speaker: 'Alexander Kozlyakov',
      is_done: true,
      materials_link: 'http://ya.ru'
    }, {
      id: 7,
      topic: 'Phoenix',
      date: new Date(),
      speaker: 'Denys Voriashyn',
      is_done: true,
      materials_link: 'http://ya.ru'
    }, {
      id: 8,
      topic: 'SQL',
      date: new Date(),
      speaker: 'Mikhail Paliukh',
      is_done: false,
      materials_link: 'http://ya.ru'
    }, {
      id: 9,
      topic: 'Ruby',
      date: new Date(),
      speaker: 'Mikhail Gubenko',
      is_done: false,
      materials_link: 'http://ya.ru'
    }, {
      id: 10,
      topic: 'Docker',
      date: new Date(),
      speaker: 'Yaroslav Senishyn',
      is_done: false,
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
      title: 'React',
      raitng: 99,
      currentUserVote: 3
    }, {
      id: 2,
      title: 'Go',
      raitng: 99,
      currentUserVote: 3
    }, {
      id: 3,
      title: 'Ruby',
      raitng: 99,
      currentUserVote: 3
    }, {
      id: 4,
      title: 'Elixir',
      raitng: 99,
      currentUserVote: 3
    }, {
      id: 5,
      title: 'Phoenix',
      raitng: 99,
      currentUserVote: 3
    }]
  }
}

export default initialState
