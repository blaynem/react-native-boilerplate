import { combineReducers } from 'redux';
import testReducer from './tetsReducer';

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;