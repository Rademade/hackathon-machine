import {push} from 'react-router-redux'

export default {
  goToRoot: () => dispatch => dispatch(push('/')),
  goToHackathons: () => dispatch => dispatch(push('/hackathons')),
  goToHackathonsNew: () => dispatch => dispatch(push('/hackathons/new')),
  goToHackathonsEdit: (id) => dispatch => dispatch(push(`/hackathons/${id}/edit`)),
  goToTopics: () => dispatch => dispatch(push('/topics')),
  goToTopicsNew: () => dispatch => dispatch(push('/topics/new')),
  goToUsers: () => dispatch => dispatch(push('/users'))
}
