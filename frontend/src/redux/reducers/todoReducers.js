import {
  TODO_ADD_FAIL,
  TODO_ADD_REQUEST,
  TODO_ADD_SUCCESS,
  
  TODO_DELETE_FAIL,
  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  
  TODO_DETAILS_REQUEST,
  TODO_DETAILS_SUCCESS,
  TODO_DETAILS_FAIL,
  
  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,

  TODO_UPDATE_REQUEST,
  TODO_UPDATE_SUCCESS,
  TODO_UPDATE_FAIL
} from "../types/todoActionTypes"

const initialState = {loading: false, error: null, todos: [], todo: {}}


export const todoReducers = (state = initialState, action) =>{
  switch(action.type){
    // TODO LIST ACTIONS
    case TODO_LIST_REQUEST:
      return {
        ...state, 
        loading: true, todos: []
      }
    case TODO_LIST_SUCCESS:
      return {
        ...state,
        loading: false, todos: action.payload
      }
    case TODO_LIST_FAIL:
      return {
        ...state,
        loading: false, error: action.payload
      }

    // ADD TODO ACTIONS
    case TODO_ADD_REQUEST:
      return {
        ...state,
        loading: true, todo: action.payload
      }
    case TODO_ADD_SUCCESS:
      return {
        ...state, 
        loading: false, todo: action.payload, todos: [...state.todos, action.payload]
      }
    case TODO_ADD_FAIL:
      return {
        ...state,
        loading: false, error: action.payload
      }
    
    // TODO DELETE ACTIONS
    case TODO_DELETE_REQUEST:
      return {
        ...state, 
        loading: true, todo: {}
      }
    case TODO_DELETE_SUCCESS:
      return {
        ...state,
        loading: false, todo: action.payload, 
        todos: state.todos.filter(todo => todo._id !== action.payload._id )
      }
    case TODO_DELETE_FAIL: 
      return {
        ...state,
        loading: false, error: action.payload
      }
    
    // TODO DETAILS ACTIONS
    case TODO_DETAILS_REQUEST:
      return {
        ...state,
        loading: true, todo: {}
      }
    case TODO_DETAILS_SUCCESS: 
      return {
        ...state, 
        loading: false,
        todo: action.payload
      }
    case TODO_DETAILS_FAIL:
      return {
        ...state, 
        loading: false, error: action.payload
      }
    
    // TODO UPDATE ACTIONS
    case TODO_UPDATE_REQUEST:
      return {
        ...state,
        loading: true, todo: {}
      }
    case TODO_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false, todo: action.payload
      }
    case TODO_UPDATE_FAIL:
      return {
        ...state,
        loading: false, error: action.payload
      }
    default:
      return state
  }
}


