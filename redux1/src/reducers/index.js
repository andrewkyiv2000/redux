import { combineReducers } from "redux";
import counterReducer from './counter.js'

const allReducers = combineReducers({
  counter: counterReducer
});

export default allReducers;
