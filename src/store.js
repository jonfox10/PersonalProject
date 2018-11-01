import {createStore} from 'redux';
import reducer from './ducks/user_reducer';
const store = createStore(
    reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;