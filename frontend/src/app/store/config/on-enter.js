import { store } from 'store/index';
import navigation from 'actions/navigation';

const onEnter = () => {
  if (!store.getState().authApp.isAuthenticated) {
    store.dispatch(navigation.goToAuthSignIn());
  }
}

export default onEnter;
