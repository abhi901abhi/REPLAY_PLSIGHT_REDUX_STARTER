import * as types from './actionTypes';
import courseApi from './../api/mockCourseApi';



export function loadCoursesSuccess(courses){
  return {type:types.LOAD_COURSES_SUCCESS,courses}
}

export function createCourseSuccess(course){
  return {type:types.CREATE_COURSE_SUCCESS,course}
}

export function updateCourseSuccess(course){
  return {type:types.UPDATE_COURSE_SUCCESS,course}
}

//REDUX THUNKS for ASYNC API Calls
export function loadCourses(){
  return function(dispatch,getState){
    return courseApi.getAllCourses().then(courses=>{
      dispatch(loadCoursesSuccess(courses));
    }).catch(error=>{
      throw(error);
    })
  }
}
//getState: If you dont pass course as parameter in createCourse function,
//still we can access a store state by calling getState .
export function saveCourse(course){
  debugger;
  return function(dispatch,getState){
    debugger;
      return courseApi.saveCourse(course).then(course=>{
        if(course.id){
          //update
          dispatch(updateCourseSuccess(course));
        }
        else {
          dispatch(createCourseSuccess(course));
        }
      }).catch(error=>{
        throw(error);
      })
    }


}
