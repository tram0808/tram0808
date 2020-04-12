import {createStore} from 'redux';
import rootReducer from './src/common/redux/reducer/rootReducer';

const store = createStore(reducer);

  export default store;