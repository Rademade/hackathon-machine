const initialState = {
  authApp: {
    jwt: null,
    isPendingRequest: false,
    isAuthenticated: false,
    isAdmin: false
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
