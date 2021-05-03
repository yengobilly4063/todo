import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import {useSelector, useDispatch} from "react-redux"
import Loader from '../components/Loader'
import Message from '../components/Message'
import { addTodo } from '../redux/actions/todoActions'

const TodoAddScreen = ({history}) => {
  const dispatch = useDispatch()
  const todoStatus = ["PENDING", "ACTIVE", "COMPLETED"]

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState(todoStatus[0])

  const [message, setMessage] = useState("")

  const todoAdd = useSelector(state => state.todoAdd)
  const {todo} = todoAdd

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name || !description || !status){
      setMessage("Please input all fields")
    }else{
      dispatch(addTodo({name, description, status}))
      history.push("/")
    }
  }



  return (
    <div>
      <Container className="my-3">
        {message && <Message>{message}</Message>}
        <Form  onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter todo name"
              value={name}
              onChange={(e) => setName(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4} placeholder="Enter todo description"></Form.Control>
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status:</Form.Label>
            <Form.Control as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              >
              {todoStatus.map((st, index)=> {
                return (
                  <option key={index}>{st}</option>
                )
              })}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Todo
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default TodoAddScreen
