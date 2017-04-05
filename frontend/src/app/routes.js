import Login from 'containers/auth/Login'
import HackathonIndex from 'containers/hackathons/index'
import HackathonNew from 'containers/hackathons/new'
import HackathonEdit from 'containers/hackathons/edit'
import ModeratorBoard from 'containers/ModeratorBoard'

import NotFound from 'containers/NotFound'

function requireAuth(nextState, replace) {
  if (false) {
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
}, {
  path: '/moderator',
  component: ModeratorBoard,
  onEnter: requireAuth
}, {
  path: '*',
  component: NotFound
}]

export default routes
