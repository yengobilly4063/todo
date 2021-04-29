import {
  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS
} from "../types/todoActionTypes"

export const todoListReeducers = (state = {todos: []}, action) =>{
  console.log(action.type)
  console.log(action.payload)
  switch(action.type){
    case TODO_LIST_REQUEST:
      return {loading: true, todos: []}
    case TODO_LIST_SUCCESS:
      return {loading: false, todos: action.payload}
    case TODO_LIST_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}