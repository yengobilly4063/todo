import {
  ADD_TODO_FAIL,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS
} from "../types/todoActionTypes"

export const todoListReeducers = (state = {todos: []}, action) =>{
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

export const addTodoReeducers = (state = {todo: {}}, action) =>{
  switch(action.type){
    case ADD_TODO_REQUEST:
      return {loading: true}
    case ADD_TODO_SUCCESS:
      return {loading: false, todo: action.payload}
    case ADD_TODO_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

