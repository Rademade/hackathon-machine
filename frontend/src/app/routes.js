import LogIn from 'containers/LogIn'
import Registration from 'containers/Registration'
import NewHackaton from 'containers/NewHackaton'
import ModeratorBoard from 'containers/ModeratorBoard'

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}

const routes = {
  childRoutes: [{
    path: '/',
    component: ModeratorBoard,
    onEnter: requireAuth
  }, {
    path: '/login',
    component: LogIn
  }, {
    path: '/registration',
    component: Registration
  }, {
    path: 'hackatons/new',
    component: NewHackaton,
    onEnter: requireAuth
  }, {
    path: '/moderator',
    component: ModeratorBoard,
    onEnter: requireAuth
  }]
}

export default routes
