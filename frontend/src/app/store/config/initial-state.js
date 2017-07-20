const initialState = {
  authApp: {
    jwt: null,
    isAuthenticated: localStorage.getItem('jwt') ? true : false,
    user: {}
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
