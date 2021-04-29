import {
  ADD_TODO_FAIL,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS
} from "../types/todoActionTypes"

import axios from "axios"

export const getTodos = () => async (dispatch) => {
  try{
    dispatch({type: TODO_LIST_REQUEST})

    const {data} = await axios.get("/api/todos")

    dispatch({
      type: TODO_LIST_SUCCESS,
      payload: data
    })

  }catch(error){
    dispatch({
      type: TODO_LIST_FAIL,
      payload: error.message
    })
  }
}

export const addTodo = (todo) => async (dispatch) => {
  try{
    dispatch({type: ADD_TODO_REQUEST})

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const {data} = await axios.post("/api/todos", todo, config)

    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: data
    })
    
  }catch(error){
    dispatch({
      type: ADD_TODO_FAIL,
      payload: error.message
    })
  }
}