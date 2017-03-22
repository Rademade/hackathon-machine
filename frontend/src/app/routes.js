import ScoreBoard from 'containers/ScoreBoard'
import SignIn from 'containers/SignIn'
import NewHackaton from 'containers/NewHackaton'
import ModeratorBoard from 'containers/ModeratorBoard'

const routes = {
  childRoutes: [{
    path: '/',
    component: ScoreBoard
  },{
    path: '/sign-in',
    coomponent: SignIn
  },{
    path: '/new',
    component: NewHackaton
  },{
    path: '/moderator',
    component: ModeratorBoard
  }
    

  ]
};

export default routes;
