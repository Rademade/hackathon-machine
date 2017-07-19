import onEnter from 'store/config/on-enter';
import Login from 'containers/auth/Login';
import HackathonIndex from 'containers/hackathons/Index';
import HackathonNew from 'containers/hackathons/New';
import HackathonEdit from 'containers/hackathons/Edit';
import TopicIndex from 'containers/topics/Index';
import TopicNew from 'containers/topics/New';
import TopicEdit from 'containers/topics/Edit';
import SpeakerIndex from 'containers/speakers/Index';
import SpeakerNew from 'containers/speakers/New';
import SpeakerEdit from 'containers/speakers/Edit';
import NotFound from 'containers/NotFound';

const routes = [{
  path: '/',
  component: HackathonIndex,
  onEnter
}, {
  path: '/auth',
  component: Login
}, {
  path: '/hackathons',
  component: HackathonIndex,
  onEnter
}, {
  path: '/hackathons/new',
  component: HackathonNew,
  onEnter
}, {
  path: '/hackathons/:id/edit',
  component: HackathonEdit,
  onEnter
},{
  path: '/topics',
  component: TopicIndex,
  onEnter
}, {
  path: '/topics/new',
  component: TopicNew,
  onEnter
}, {
  path: '/topics/:id/edit',
  component: TopicEdit,
  onEnter
}, {
  path: '/speakers',
  component: SpeakerIndex,
  onEnter
}, {
  path: '/speakers/new',
  component: SpeakerNew,
  onEnter
}, {
  path: '/speakers/:id/edit',
  component: SpeakerEdit,
  onEnter
}, {
  path: '*',
  component: NotFound
}]

export default routes
