import * as types from './actionTypes';
import authorApi from './../api/mockAuthorApi';

function loadAuthorsSuccess(authors){
  return {
    type:types.LOAD_AUTHORS_SUCCESS,
    authors
  }
}

//REDUX THUNK for ASYNC API Calls
export function loadAuthors(){
  return function(dispatch){
    return authorApi.getAllAuthors().then(authors=>{
      debugger;
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error=>{
      throw(error);
    })
  }
}
