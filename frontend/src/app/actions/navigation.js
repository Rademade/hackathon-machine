import {push} from 'react-router-redux'

export default {
  goToRoot: () => dispatch => dispatch(push('/')),
  goToHackathons: () => dispatch => dispatch(push('/hackathons')),
  goToHackathonsNew: () => dispatch => dispatch(push('/hackathons/new')),
  goToHackathonsEdit: (id) => dispatch => dispatch(push(`/hackathons/${id}/edit`)),
  goToTopics: () => dispatch => dispatch(push('/topics')),
  goToUsers: () => dispatch => dispatch(push('/users'))
}
