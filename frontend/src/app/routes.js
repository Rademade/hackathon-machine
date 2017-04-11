import Login from 'containers/auth/Login'
import HackathonIndex from 'containers/hackathons/Index'
import HackathonNew from 'containers/hackathons/New'
import HackathonEdit from 'containers/hackathons/Edit'
import TopicIndex from 'containers/topics/Index'
import TopicNew from 'containers/topics/New'
import TopicEdit from 'containers/topics/Edit'
import SpeakerIndex from 'containers/speakers/Index'
import SpeakerNew from 'containers/speakers/New'
import SpeakerEdit from 'containers/speakers/Edit'
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
  path: '/topics/new',
  component: TopicNew,
  onEnter: requireAuth
}, {
  path: '/topics/:id/edit',
  component: TopicEdit,
  onEnter: requireAuth
}, {
  path: '/speakers',
  component: SpeakerIndex,
  onEnter: requireAuth
}, {
  path: '/speakers/new',
  component: SpeakerNew,
  onEnter: requireAuth
}, {
  path: '/speakers/:id/edit',
  component: SpeakerEdit,
  onEnter: requireAuth
}, {
  path: '*',
  component: NotFound
}]

export default routes
