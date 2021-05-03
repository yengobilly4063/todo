import {
  TODO_ADD_FAIL,
  TODO_ADD_REQUEST,
  TODO_ADD_SUCCESS,
  
  TODO_DELETE_FAIL,
  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  
  TODO_DETAILS_FAIL,
  TODO_DETAILS_REQUEST,
  TODO_DETAILS_SUCCESS,

  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
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
    dispatch({type: TODO_ADD_REQUEST})

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    const {data} = await axios.post("/api/todos", todo, config)

    dispatch({
      type: TODO_ADD_SUCCESS,
      payload: data
    })
    
  }catch(error){
    dispatch({
      type: TODO_ADD_FAIL,
      payload: error.message
    })
  }
}

export const getTodoDetails = (id) => async (dispatch) => {
  try{
    dispatch({type: TODO_DETAILS_REQUEST})

    const {data} = await axios.get(`/api/todos/${id}`)

    dispatch({type: TODO_DETAILS_SUCCESS, payload: data})
  }catch(error){
    dispatch({type: TODO_DETAILS_FAIL, payload: error.msg})
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  try{
    dispatch({type: TODO_DELETE_REQUEST})

    const {data} = await axios.delete(`/api/todos/${id}`)

    dispatch({
      type: TODO_DELETE_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: TODO_DELETE_FAIL,
      payload: error.message
    })
  }
}