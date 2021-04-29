import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import { addTodoReeducers, todoListReeducers } from "./redux/reducers/todoReducers";

const middlewares = [thunk]



const reducers = combineReducers({
  todoList: todoListReeducers,
  todoAdd: addTodoReeducers
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))

export default store

