import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import { addTodoReducers, deleteTodoReducer, todoDetailsReducer, todoListReeducers } from "./redux/reducers/todoReducers";
const middlewares = [thunk]



const reducers = combineReducers({
  todoList: todoListReeducers,
  todoAdd: addTodoReducers,
  todoDeleted: deleteTodoReducer
})


const initialState = {
  
}

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store

