import LogIn from 'containers/LogIn'
import SignIn from 'containers/SignIn'
import NewHackaton from 'containers/NewHackaton'
import ModeratorBoard from 'containers/ModeratorBoard'

const routes = {
  childRoutes: [{
    path: '/',
    component: ModeratorBoard
  }, {
    path: '/login',
    coomponent: LogIn
  }, {
    path: '/signin',
    coomponent: SignIn
  }, {
    path: 'hackatons/new',
    component: NewHackaton
  }, {
    path: '/moderator',
    component: ModeratorBoard
  }]
}

export default routes
