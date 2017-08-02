const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user')) || {};
  } catch(_) {
    return {};
  }
}

const initialState = {
  authApp: {
    jwt: localStorage.getItem('jwt'),
    isAuthenticated: localStorage.getItem('jwt') ? true : false,
    user: getUser()
  },
  hackathonApp: {
    hackathons: [],
    hackathon: {}
  },
  speakerApp: {
    speakers: [],
    speaker: {}
  },
  topicApp: {
    topics: [],
    topic: {}
  }
};

export default initialState;
