import {push} from 'react-router-redux'

export default {
  goToRoot: () => dispatch => dispatch(push('/')),
  goToHackathons: () => dispatch => dispatch(push('/hackathons')),
  goToHackathonsNew: () => dispatch => dispatch(push('/hackathons/new')),
  goToHackathonsEdit: (id) => dispatch => dispatch(push(`/hackathons/${id}/edit`)),
  goToTopics: () => dispatch => dispatch(push('/topics')),
  goToTopicsNew: () => dispatch => dispatch(push('/topics/new')),
  goToTopicsEdit: (id) => dispatch => dispatch(push(`/topics/${id}/edit`)),
  goToSpeakers: () => dispatch => dispatch(push('/speakers')),
  goToSpeakersNew: () => dispatch => dispatch(push('/speakers/new')),
  goToSpeakersEdit: (id) => dispatch => dispatch(push(`/speakers/${id}/edit`)),
}
