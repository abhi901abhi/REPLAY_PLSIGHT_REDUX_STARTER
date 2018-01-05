  import * as types from './../actions/actionTypes';

export default function courseReducer(state=[],action){
  switch(action.type){
    case types.CREATE_COURSE_SUCCESS:
            const newState=[...state,
              Object.assign({},action.course)
            ];
            return newState;

    //EXAMPLE OF SPREAD OPERATOR and Object.assign:
    /*
    spread operator spreads the items in an array as isolated items and a sepration of comma usually
    var state = [{name:'angualr'},{name:'react'}];
    var course = {name:'knockoutjs'};
    var target = [...state,course]; // output: [{name:'angualr'},{name:'react'},{name:'knockoutjs'}];

    But, if you change target[1].name = "changed konckout";
    then course automatically changes to => course= {name:'changed konckout'};
    thats why we need to use Object.assign to clone (to prevent immutability)
    var target = [...state,  Object.assign({},course)];
    */
    case types.UPDATE_COURSE_SUCCESS:
    // get all items whose id's are not matching with the updating item id
    //then push the updated item to that list
            // let items_not_belong_to_targetId=[...state.filter((course)=>{
            //      return (course.id !== action.course.id);
            // })];
            //
            // return [...items_not_belong_to_targetId,Object.assign({},action.course)];

    //Same above implementation can be done in few lines like BELOW - start
          return  [
              ...state.filter(course=>course.id !== action.course.id),
              Object.assign({},action.course)
          ];
    //end

    case types.LOAD_COURSES_SUCCESS:
           return action.courses;
    default:
            return state;
  }
}
