import {combineReducers} from 'redux';
import courses from './courseReducer';
import authorReducer from './authorReducer';
import inprogressAjaxCallsCount from './ajaxStatusReducer';


const rootReducer = combineReducers({
  //what ever you are giving here will be attached to this.state in component
  //example: this.state.courses & this.state.authorReducer
  courses,
  authorReducer,
  inprogressAjaxCallsCount
});
export default rootReducer;
