import * as _ from 'lodash'

const initialState = {
  authApp: {
    jwt: null,
    isPendingRequest: false,
    isAuthenticated: false,
    isAdmin: true
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
