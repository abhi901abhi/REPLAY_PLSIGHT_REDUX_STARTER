import * as types from './actionTypes';
import authorApi from './../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

function loadAuthorsSuccess(authors){
  return {
    type:types.LOAD_AUTHORS_SUCCESS,
    authors
  }
}

//REDUX THUNK for ASYNC API Calls
export function loadAuthors(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(authors=>{
      debugger;
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error=>{
      throw(error);
    })
  }
}
