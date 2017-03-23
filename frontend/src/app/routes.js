import LogIn from 'containers/LogIn'
import SignIn from 'containers/SignIn'
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
    path: '/signin',
    component: SignIn
  }, {
    path: 'hackatons/new',
    component: NewHackaton
  }, {
    path: '/moderator',
    component: ModeratorBoard
  }]
}

export default routes
