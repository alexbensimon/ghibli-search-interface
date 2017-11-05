import { combineReducers } from 'redux';

import filmReducer from './filmReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  films: filmReducer,
  filters: filterReducer,
});
