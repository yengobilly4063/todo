import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducers } from "./redux/reducers/todoReducers";
const middlewares = [thunk]



const reducers = combineReducers({
  todoInfo: todoReducers,
})


const initialState = {

}

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store

