const initialState = {
  authApp: {
    jwt: null,
    isPendingRequest: false,
    isAuthenticated: false,
    user: {}
  },
  hackathonApp: {
    hackathons: []
  },
  speakerApp: {
    speakers: [],
  },
  topicApp: {
    topics: []
  }
};

export default initialState
