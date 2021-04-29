import {
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