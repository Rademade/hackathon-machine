import configureStore from 'store/config/store';
import configureHistory from './config/history';
import initialState from 'store/config/initial-state';

const store = configureStore(initialState);
const history = configureHistory(store);

export { store, history };
