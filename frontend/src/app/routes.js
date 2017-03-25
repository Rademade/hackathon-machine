import Login from 'containers/auth/Login'
import Registration from 'containers/auth/Registration'
import HackathonIndex from 'containers/hackathons/index'
import HackathonNew from 'containers/hackathons/new'
import ModeratorBoard from 'containers/ModeratorBoard'
import NotFound from 'containers/NotFound'

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/auth/login',
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
  path: '/auth/login',
  component: Login
}, {
  path: '/auth/registration',
  component: Registration
}, {
  path: '/hackatons',
  component: HackathonIndex,
  onEnter: requireAuth
}, {
  path: '/hackatons/new',
  component: HackathonNew,
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
