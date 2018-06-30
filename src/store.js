import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import api from './utils/api';

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));

export default store;