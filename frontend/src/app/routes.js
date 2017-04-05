import Login from 'containers/auth/Login'
import HackathonIndex from 'containers/hackathons/Index'
import HackathonNew from 'containers/hackathons/New'
import HackathonEdit from 'containers/hackathons/Edit'
import ModeratorBoard from 'containers/ModeratorBoard'
import TopicIndex from 'containers/topics/Index'

import NotFound from 'containers/NotFound'

function requireAuth(nextState, replace) {
  if (!localStorage.getItem('jwt')) {
    replace({
      pathname: '/auth',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}

const routes = [{
  path: '/',
  component: HackathonIndex,
  onEnter: requireAuth
}, {
  path: '/auth',
  component: Login
}, {
  path: '/hackathons',
  component: HackathonIndex,
  onEnter: requireAuth
}, {
  path: '/hackathons/new',
  component: HackathonNew,
  onEnter: requireAuth
}, {
  path: '/hackathons/:id/edit',
  component: HackathonEdit,
  onEnter: requireAuth
},{
  path: '/topics',
  component: TopicIndex,
  onEnter: requireAuth
}, {
  path: '/moderator',
  component: ModeratorBoard,
  onEnter: requireAuth
}, {
  path: '*',
  component: NotFound
}]

export default routes
