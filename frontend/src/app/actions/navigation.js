import { push } from 'react-router-redux';

export default {
  goToRoot: (_) => dispatch => dispatch(push('/')),
  goToAuthSignIn: (_) => dispatch => dispatch(push('/auth/sign_in')),
  goToAuthSignUp: (_) => dispatch => dispatch(push('/auth/sign_up')),
  goToHackathons: (_) => dispatch => dispatch(push('/hackathons')),
  goToHackathonsNew: (_) => dispatch => dispatch(push('/hackathons/new')),
  goToHackathonsEdit: (id) => dispatch => dispatch(push(`/hackathons/${id}/edit`)),
  goToTopics: (_) => dispatch => dispatch(push('/topics')),
  goToTopicsNew: (_) => dispatch => dispatch(push('/topics/new')),
  goToTopicsEdit: (id) => dispatch => dispatch(push(`/topics/${id}/edit`)),
  goToTopicsComments: (id) => dispatch => dispatch(push(`/topics/${id}/comments`)),
  goToSpeakers: (_) => dispatch => dispatch(push('/speakers')),
  goToSpeakersNew: (_) => dispatch => dispatch(push('/speakers/new')),
  goToSpeakersEdit: (id) => dispatch => dispatch(push(`/speakers/${id}/edit`)),
}
